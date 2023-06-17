import { Dispatch, SetStateAction } from 'react';
import { TipoCelda } from '../Celda.types';
import Celda from './CeldaClass.class';

export default class CeldaTrabajo extends Celda {
  constructor(x: number, y: number, setTablero: Dispatch<SetStateAction<TipoCelda[][]>>) {
    super(3, 'trabajo', 'yellow', x, y, setTablero);
  }
}
