import Button from '../Button';
import style from './style.module.scss';
import { Watch } from './Watch';

export function Stopwatch() {
  return(
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.watchWrapper}>
      <Watch />
      </div>
      <Button> Start </Button>
    </div>
  )
}