import { Component } from '@angular/core';
import { boxAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {
 boxState = 'start';
 visible = true;


 animation(){
   this.boxState = this.boxState === 'end' ? 'start' : 'end'
 }

 animationStarted(event: AnimationEvent) {
  console.log('animationStarted', event);
 }

 animationDone(event: AnimationEvent) {
  console.log('animationDone', event);
 }
}
