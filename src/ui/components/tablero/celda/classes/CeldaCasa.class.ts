import { Dispatch, SetStateAction } from 'react';
import { TipoCelda } from '../Celda.types';
import Celda from './CeldaClass.class';

export default class CeldaCasa extends Celda {
  constructor(x: number, y: number, setTablero: Dispatch<SetStateAction<TipoCelda[][]>>) {
    super(2, 'casa', 'green', x, y, setTablero);
  }
}
