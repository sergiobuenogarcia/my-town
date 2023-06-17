import { Dispatch, SetStateAction } from 'react';
import { TipoCelda } from '../Celda.types';
import CeldaComponent from '../CeldaComponent';

export default class Celda {
  clave: number;

  tipo: string;

  color: string;

  x: number;

  y: number;

  setTablero: Dispatch<SetStateAction<TipoCelda[][]>>;

  constructor(
    clave: number,
    tipo: string,
    color: string,
    x: number,
    y: number,
    setTablero: Dispatch<SetStateAction<TipoCelda[][]>>
  ) {
    this.clave = clave;
    this.tipo = tipo;
    this.color = color;
    this.x = x;
    this.y = y;
    this.setTablero = setTablero;
  }

  printCelda() {
    return <CeldaComponent x={this.x} y={this.y} clave={this.clave} color={this.color} setTablero={this.setTablero} />;
  }
}
