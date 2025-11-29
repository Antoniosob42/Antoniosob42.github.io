import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-horas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calcular-horas-component.html',
  styleUrls: ['./calcular-horas-component.css']
})
export class CalcularHorasComponent {
  // Inputs (bind in template)
  entryTime = ''; // hora de entrada "HH:MM"
  hoursToCompute: number | null = null; // en horas, puede ser decimal (ej: 8.5)

  salidaDesayuno = '';
  vueltaDesayuno = '';

  entradaComida = '';
  salidaComida = '';
  minutosComida: number | null = null; // opcional: si se pone y no hay salidaComida, se calcula

  // Result / errores
  result = '';
  error = '';

  private toMinutes(time: string | null | undefined): number | null {
    if (!time) return null;
    const parts = time.split(':');
    if (parts.length < 2) return null;
    const h = Number(parts[0]);
    const m = Number(parts[1]);
    if (isNaN(h) || isNaN(m)) return null;
    return h * 60 + m;
  }

  private fromMinutes(totalMin: number): string {
    const dayOffset = Math.floor(totalMin / 1440);
    const m = ((totalMin % 1440) + 1440) % 1440;
    const hh = Math.floor(m / 60);
    const mm = m % 60;
    const time = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
    return dayOffset > 0 ? `${time} (+${dayOffset} día${dayOffset > 1 ? 's' : ''})` : time;
  }

  private normalizeInterval(s: number, e: number) {
    // ensure end >= start; if end < start assume it goes to next day
    if (e < s) e += 1440;
    return { start: s, end: e };
  }

  private mergeIntervals(intervals: Array<{ start: number; end: number }>) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a.start - b.start);
    const merged: Array<{ start: number; end: number }> = [];
    let cur = { ...intervals[0] };
    for (let i = 1; i < intervals.length; i++) {
      const it = intervals[i];
      if (it.start <= cur.end) {
        cur.end = Math.max(cur.end, it.end);
      } else {
        merged.push(cur);
        cur = { ...it };
      }
    }
    merged.push(cur);
    return merged;
  }

  calculateExitTime() {
    this.error = '';
    this.result = '';

    if (!this.entryTime || this.hoursToCompute == null || isNaN(this.hoursToCompute)) {
      this.error = 'Rellena "Hora de entrada" y "Horas por computar".';
      return;
    }

    const start = this.toMinutes(this.entryTime)!;
    const target = Math.round(this.hoursToCompute * 60);

    const breaks: Array<{ start: number; end: number }> = [];

    const sd = this.toMinutes(this.salidaDesayuno);
    const vd = this.toMinutes(this.vueltaDesayuno);
    if (sd != null && vd != null) {
      breaks.push(this.normalizeInterval(sd, vd));
    }

    const ec = this.toMinutes(this.entradaComida);
    let sc = this.toMinutes(this.salidaComida);
    if (ec != null) {
      if (sc == null && this.minutosComida != null && !isNaN(this.minutosComida)) {
        sc = ec + Math.round(this.minutosComida);
      }
      if (sc != null) {
        breaks.push(this.normalizeInterval(ec, sc));
      }
    }

    // merge overlapping breaks
    const mergedBreaks = this.mergeIntervals(breaks);

    // helper to check if current minute is inside any break
    const isInAnyBreak = (cur: number) => {
      for (const it of mergedBreaks) {
        let s = it.start;
        let e = it.end;
        // shift interval forward until it may overlap cur
        // this handles intervals that were normalized across midnight
        while (e < cur) {
          s += 1440;
          e += 1440;
          // safety to avoid infinite loop
          if (s - cur > 1440 * 3) break;
        }
        if (cur >= s && cur < e) return true;
      }
      return false;
    };

    let current = start;
    let worked = 0;
    const safetyLimit = 1440 * 3; // no más de 3 días de iteración
    let steps = 0;
    while (worked < target && steps < safetyLimit) {
      if (!isInAnyBreak(current)) {
        worked++;
      }
      current++;
      steps++;
    }

    if (worked < target) {
      this.error = 'No fue posible calcular dentro de límites razonables.';
      return;
    }

    this.result = this.fromMinutes(current);
  }

  clear() {
    this.entryTime = '';
    this.hoursToCompute = null;
    this.salidaDesayuno = '';
    this.vueltaDesayuno = '';
    this.entradaComida = '';
    this.salidaComida = '';
    this.minutosComida = null;
    this.result = '';
    this.error = '';
  }
}
