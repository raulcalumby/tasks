
import Item from './item';
import style from './style.module.scss'
import { ITask } from '../../types/tasks';

function List({tasks} : {tasks: ITask[]}) {
  return (
    <aside className={style.listTask}>
      <h2>Studies of the Day</h2>

      <ul>
        {tasks.map((item, index) => {
          return (
            <Item
              {...item}
              key={index}
            />
          );
        })}
      </ul>
    </aside>
  )
}
export default List