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

  // tu email destino privado
  private emailPersonal: string = 'antoniosobrinomartin@gmail.com';

  formularioContacto: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(25)]]
  });

  campoInvalido(campo: string): boolean {
    const control = this.formularioContacto.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  enviar() {
    if (this.formularioContacto.invalid) {
      this.formularioContacto.markAllAsTouched();
      return;
    }

    // Creamos el objeto JSON con tus claves personalizadas
    const datos = {
      nombre_remitente: this.formularioContacto.value.nombre,
      email_remitente: this.formularioContacto.value.email,
      mensaje_remitente: this.formularioContacto.value.mensaje,
      email_destinatario: this.emailPersonal
    };

    // Aquí ya tienes el JSON que puedes enviar por HTTP o mostrar
    console.log('JSON para enviar:', datos);

    alert('Formulario enviado con éxito');
    this.formularioContacto.reset();
  }
}
