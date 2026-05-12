import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nombre: string = '';
  edad: number | null = null;
  editandoId: number | null = null;

  mascotas: any[] = [
    { id: 1, nombre: 'Pluto', edad: 20 },
    { id: 2, nombre: 'Mickey', edad: 120 },
    { id: 3, nombre: 'Mark', edad: 20 }
  ];

  guardar() {
    if (this.editandoId !== null) {
     
      const m = this.mascotas.find(x => x.id === this.editandoId);
      if (m) {
        m.nombre = this.nombre;
        m.edad = this.edad;
      }
      this.editandoId = null;
    } else {
      this.mascotas.push({
        id: this.mascotas.length + 1,
        nombre: this.nombre,
        edad: this.edad
      });
    }

    
    this.nombre = '';
    this.edad = null;
  }

  editar(m: any) {
    this.nombre = m.nombre;
    this.edad = m.edad;
    this.editandoId = m.id;
  }

  eliminar(id: number) {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
  }
}