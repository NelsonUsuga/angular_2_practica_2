import { Component} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component {

  // Propiedad ejemplo etiquetas html dinámicas
  oculto = true;

  // Propiedad ejemplo de directiva ngModel
  textoprueba = 'Prueba de texto bidireccional';

  // Propiedades ejemplo de directiva ngClass
  textosino = 'SI';
  estado = true;

  // Propiedad ejemplo de directiva ngFor
  animales = ['Perro', 'Gato', 'Caballo', 'Ratón', 'Elefante'];

  // Propiedad ejemplo de directiva ngIf
  mostrarImagen = false;

  // Función ejemplo de directiva ngClass
  cambiarEstado() {
      this.estado = !this.estado;
      this.textosino = (this.estado) ? 'SI' : 'NO';
  }

  // Función ejemplo de directiva ngFor
  listarAnimales() {
      return this.animales;
  }

  // Función ejemplo etiquetas html dinámicas
  ocultar(oculto) {
    this.oculto = oculto;
  }

  // Funciones ejemplo de directiva ngIf
  sobreponerMouse() {
      this.mostrarImagen = true;
  }
  retirarMouse() {
      this.mostrarImagen = false;
  }

}
