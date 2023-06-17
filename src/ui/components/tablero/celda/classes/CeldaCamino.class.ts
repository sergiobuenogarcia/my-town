import { Dispatch, SetStateAction } from 'react';
import { TipoCelda } from '../Celda.types';
import Celda from './CeldaClass.class';

export default class CeldaCamino extends Celda {
  constructor(x: number, y: number, setTablero: Dispatch<SetStateAction<TipoCelda[][]>>) {
    super(1, 'camino', 'gray', x, y, setTablero);
  }
}
