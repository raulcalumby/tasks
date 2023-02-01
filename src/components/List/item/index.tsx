
import style from '../style.module.scss';
import { ITask } from "../../../types/tasks";

export default function Item({task, time}: ITask) {
    return (
      <li className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
      </li>
    );
}
