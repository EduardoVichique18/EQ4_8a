import { Component } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  standalone: false,
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {
  preguntas = [
    { texto: '¿Te gustan las matemáticas?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Te interesa la optimización de procesos?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Disfrutas trabajar en equipo?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Te interesan los sistemas de producción?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Tienes habilidades para la resolución de problemas?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Te gustaría mejorar la eficiencia en las empresas?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Te interesan los procesos de manufactura?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Tienes facilidad para el análisis de datos?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Te gusta la gestión de recursos humanos y materiales?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] },
    { texto: '¿Estás interesado en la mejora continua?', opciones: [{ texto: 'Sí', valor: 1 }, { texto: 'No', valor: 0 }] }
  ];
  respuestas: number[] = new Array(this.preguntas.length).fill(0);
  resultado: number | null = null;

  calcularCompatibilidad() {
    const total = this.respuestas.map(Number).reduce((acc, curr) => acc + curr, 0);
    let porcentaje = Math.round((total / this.preguntas.length) * 100);
    this.resultado = Math.max(1, Math.min(100, porcentaje)); // Asegurar entre 1% y 100%
  }

  reiniciar() {
    this.respuestas.fill(0);
    this.resultado = null;
  }
}