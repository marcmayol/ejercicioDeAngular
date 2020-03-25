import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.scss']
})
export class ParquesComponent implements OnInit, OnChanges {
  @Input() nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    console.log('Existen cambios en las propiedades');
  }

  emitirEvento() {
    this.pasameLosDatos.emit(
      {
        nombre: this.nombre,
        metros: this.metros,
        vegetacion: this.vegetacion,
        abierto: this.abierto
      }
    );
  }
}
