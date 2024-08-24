import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css',
})
export class CalcComponent {
  num1: number | undefined;
  num2: number | undefined;
  resultado: number | undefined;

  
  @Output() result = new EventEmitter<number>();


  
  suma() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }

    this.resultado = this.num1 + this.num2;
    this.result.emit(this.resultado)
  }
  resta() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }

    this.resultado = this.num1 - this.num2;
    this.result.emit(this.resultado)

  }
  multiplicacion() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }

    this.resultado = this.num1 * this.num2;
    this.result.emit(this.resultado)

  }
  division() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }

    this.resultado = this.num1 / this.num2;
    this.result.emit(this.resultado)
  }

  borrar() {
    this.resultado = undefined;
    this.num1 = undefined;
    this.num2 = undefined;
    this.result.emit(this.resultado)
  }

  potencia() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }
    this.resultado = Math.pow(this.num1, this.num2);
    this.result.emit(this.resultado)

  }

  raiz() {
    if (this.num1 == undefined) {
      this.num1 = 0;
    }
    if (this.num2 == undefined) {
      this.num2 = 0;
    }
    this.resultado = Math.pow(this.num1, 1 / this.num2);
    this.result.emit(this.resultado)

  }
}
