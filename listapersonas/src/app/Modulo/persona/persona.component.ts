import { Component } from '@angular/core';
import { Persona } from '../../DataSource/Persona.interface';
import { lpersona } from '../../DataSource/lpersona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})

export class PersonaComponent {
  dataPersonas: Persona[] = lpersona;

  nombreUsuario: string = 'Dev_Bootcamp';

  guardarPersona(persona: Persona) {
    const index = this.dataPersonas.findIndex(p => p.id === persona.id);
    if (index !== -1) {
      // Si la persona ya existe en la lista, actualiza sus datos
      this.dataPersonas[index] = persona;
    } else {
      // Si es una nueva persona, añádela a la lista
      persona.id = this.dataPersonas.length + 1;
      this.dataPersonas.push(persona);
    }
  }

  funcionExample() {
    this.dataPersonas.toString();
  }

  funcionPersona(persona: Persona) {
    console.log(persona);
  }

  funcionEliminar(persona: any) {
    alert('Hola');
  }

  actualizarPersona(persona: Persona) {
    
  }

}