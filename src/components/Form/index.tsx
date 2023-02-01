import React from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from './style.module.scss';



class Form extends React.Component<{
  setTasks:React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task:"",
    time:"",
  }
  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTasks(tasksA =>[...tasksA, {...this.state}])
    this.setState({
      task:"",
      time:"00:00",
    })
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
        <label htmlFor="task"></label>
        <input 
        type="text"
        name="task"
        id="task"
        value={this.state.task}
        onChange={event => this.setState({...this.state, task: event.target.value})}
        placeholder="What do you want to study?"
        required/>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input
           type="time"
           step="1"
           name="time"
           value={this.state.time} 
           onChange={event => this.setState({...this.state, time: event.target.value})}
           id="time"
           min="00:00:00"
           max="01:30:00"
           required/>
        </div>
        <Button>Add Task </Button>
      </form>
    )
  }
}
export default Form