import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) { }
    /**
   * Redirige a una ruta interna
   * @param path ruta dentro de la app (no externa)
   */
  navigateTo(path:string){
    if(!path) return;
    const routes=this.router.config.map(r=>r.path);
    if(routes.includes(path)){
       this.router.navigate([path]);
    }else{
      console.warn(`Ruta no encontrada: ${path}`);
        this.router.navigate(['']);
      }
   
  }
}
