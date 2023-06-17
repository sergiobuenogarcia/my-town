import { useEffect, useState } from 'react';
import s from './Tablero.module.scss';
import { TipoCelda } from './celda/Celda.types';
import { CeldaParcela } from './celda/classes';

const Tablero = ({ sizeTablero }: { sizeTablero: number }) => {
  const [tablero, setTablero] = useState<TipoCelda[][]>([]);

  useEffect(() => {
    createTablero();
  }, []);

  const createTablero = () => {
    let tableroAux: TipoCelda[][] = [];
    tableroAux = [];

    setTablero([]);

    for (let y = 0; y < sizeTablero; y++) {
      tableroAux[y] = [];

      for (let x = 0; x < sizeTablero; x++) {
        tableroAux[y][x] = new CeldaParcela(x, y, setTablero);
      }
    }

    setTablero(tableroAux);
  };

  const printTablero = () =>
    tablero.map((fila, y) => {
      const mykey = `tr-${y}`;
      return (
        <tr key={mykey}>
          {fila.map((celda) => (
            <>{celda.printCelda()}</>
          ))}
        </tr>
      );
    });

  return <table className={s.tablero}>{printTablero()}</table>;
};

export default Tablero;
