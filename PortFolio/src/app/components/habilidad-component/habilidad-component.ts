import { Component, InputSignal, input } from '@angular/core';
@Component({
  selector: 'app-habilidad-component',
  imports: [],
  templateUrl: './habilidad-component.html',
  styleUrl: './habilidad-component.css'
})
export class HabilidadComponent {
 public nombre: InputSignal<string>=input.required<string>();
 public competencia: InputSignal<number>=input.required<number>();

get stars(){
  const rating= (this.competencia()/10)*5;
  const fullStars=Math.floor(rating);
  const hasHalfStar=rating-fullStars>=0.5;
  return Array.from({length:5},(_,i)=>{
if(i<fullStars)return 'full';
if(i===fullStars&&hasHalfStar)return 'half';
return 'empty';

  })
}


}
