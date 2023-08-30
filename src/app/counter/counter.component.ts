import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;             // Valor inicial del contador
  activeDecrease = false;  // Variable para controlar la activación/desactivación de la disminución

  increase() {
    this.counter++;  // Incrementa el contador en 1 al presionar el botón "+1"
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;  // Disminuye el contador en 1, si es mayor que 0
    }

    if (this.counter === 0) {
      this.activeDecrease = true;  // Activa el bloqueo del botón de disminución cuando el contador llega a 0
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;  // Cambia el estado de la activación/desactivación de la disminución
  }
}