import {FC, useState} from 'react';
import styles from './Header.module.scss';
import stylesUpdate from '../Field/UpdateField.module.scss';
import {ITodolist, IUpdateTodolist} from "../../../services/todolist.type.ts";
import {UseMutateFunction} from "@tanstack/react-query";
import {TitleAndEdit} from "../TitleAndEdit/TitleAndEdit.tsx";


interface IHeaderProps {
  remove: () => void
  editTodolist: UseMutateFunction<ITodolist, unknown, IUpdateTodolist, unknown>
  title: string
}

export const Header: FC<IHeaderProps> = ({remove, title, editTodolist}) => {
  const [newText, setNewText] = useState(title)
  const [isEdit, setEdit] = useState(false)
  const changeText = (text: string) => setNewText(text)
  const onEditOpen = () => setEdit(true)
  const onEditClose = () => {
    setNewText(title)
    setEdit(false)
  }
  const onEditHandler = () => {
    if (!isEdit) {
      onEditOpen()
    }
    if (isEdit) {
      editTodolist({title: newText})
      setEdit(false)
    }
  }

  return (
    <div className={styles?.header}>
      <TitleAndEdit isEdit={isEdit}
                    onEditOpen={onEditOpen}
                    onEditHandler={onEditHandler}
                    title={title}
                    newText={newText}
                    remove={remove}
                    onEditClose={onEditClose}
                    styles={styles}
                    changeText={changeText}
                    stylesUpdate={stylesUpdate}
                    />
    </div>)
};