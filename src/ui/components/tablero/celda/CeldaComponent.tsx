import { CeldaComponentType } from './Celda.types';
import s from './CeldaComponent.module.scss';
// eslint-disable-next-line import/no-cycle
import { CeldaTrabajo } from './classes';

const Celda = ({ x, y, clave, color, setTablero }: CeldaComponentType) => {
  const handleClick = () => {
    setTablero((prevTablero) => {
      const tableroAux = [...prevTablero];
      tableroAux[y][x] = new CeldaTrabajo(x, y, setTablero);
      return tableroAux;
    });
  };

  return (
    <td key={`td-${y}-${x}`} onClick={handleClick} className={s.celdaComponent} style={{ backgroundColor: color }}>
      {clave}
    </td>
  );
};

export default Celda;
