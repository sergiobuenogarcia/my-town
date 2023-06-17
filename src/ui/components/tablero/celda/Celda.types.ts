import { Dispatch, SetStateAction } from 'react';
// eslint-disable-next-line import/no-cycle
import { CeldaCamino, CeldaCasa, CeldaParcela, CeldaTrabajo } from './classes';

export type TipoCelda = CeldaParcela | CeldaCamino | CeldaCasa | CeldaTrabajo;

export type CeldaComponentType = {
  x: number;
  y: number;
  clave: number;
  color: string;
  setTablero: Dispatch<SetStateAction<TipoCelda[][]>>;
};
