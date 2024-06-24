import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  scrollToDetails() {
    document.getElementById('detalii-eveniment')?.scrollIntoView({ behavior: 'smooth' });
  }
}
