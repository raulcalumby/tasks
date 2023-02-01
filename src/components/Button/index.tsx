import React from "react";
import style from './style.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

class Button extends React.Component<Props,{
  type?: "button" | "submit"| "reset" | undefined
}>{
  render() {
    const {type} = this.props;
    return (
      <button type={type} className={style.button}>
       {this.props.children}
      </button>
    );
  }
}
export default Button;