import { Dispatch, SetStateAction } from 'react';
import { TipoCelda } from '../Celda.types';
import Celda from './CeldaClass.class';

export default class CeldaParcela extends Celda {
  constructor(x: number, y: number, setTablero: Dispatch<SetStateAction<TipoCelda[][]>>) {
    super(0, 'parcela', 'brown', x, y, setTablero);
  }
}
