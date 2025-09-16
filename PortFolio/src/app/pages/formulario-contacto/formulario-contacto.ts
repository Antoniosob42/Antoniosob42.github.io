import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-contacto.html',
  styleUrl: './formulario-contacto.css'
})
export class FormularioContacto {
  private _fb = inject(FormBuilder);
  private emailPersonal:string="antoniosobrinomartin@gmail.com"
  formularioContacto: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(25)]]
  });

  // Método auxiliar para saber si un campo está inválido y tocado
  campoInvalido(campo: string): boolean {
    const control = this.formularioContacto.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  enviar() {
    if (this.formularioContacto.invalid) {
      // marca todos como tocados para que se muestren los errores
      this.formularioContacto.markAllAsTouched();
      return;
    }

    console.log(this.formularioContacto.value);
    alert('Formulario enviado con éxito');
    this.formularioContacto.reset();
  }
}
