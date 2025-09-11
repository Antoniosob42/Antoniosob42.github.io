import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  private readonly correoElectronico = 'antoniosobrinomartin@gmail.com';
  public readonly githubUrl = 'https://github.com/Antoniosob42';
  public readonly linkedinUrl = 'https://www.linkedin.com/in/antonio-sobrino-mart%C3%ADn-015896296/';
  contactByEmail() {
    window.location.href = `mailto:${this.correoElectronico}`;
  }
}
