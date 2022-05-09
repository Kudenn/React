import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return <div className={s.dialog + " " + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Vera' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
  ]

  // Стрелочная функция с .map для вывода элементов массива dialogsData
  let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElement = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
