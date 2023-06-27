import {ChangeEvent, FC, useState} from 'react';
import styles from './Tasks.module.scss';
import {ITask} from "../../../services/todolist.type.ts";
import stylesUpdate from "../Field/UpdateField.module.scss";
import {useTodolistQuery} from "../../../react-query/useTodolistQuery.ts";
import {TitleAndEdit} from "../TitleAndEdit/TitleAndEdit.tsx";

interface ITasksProps {
  task: ITask
  removeTask: (taskId: string) => void
  todolistId: string
}

export const Tasks: FC<ITasksProps> = ({task, removeTask, todolistId}) => {
  const [newText, setNewText] = useState(task.text)
  const [isEdit, setEdit] = useState(false)
  const {updateTask} = useTodolistQuery(todolistId, task.id)
  const {mutateAsync: editTask} = updateTask

  const changeText = (text: string) => setNewText(text)
  const onEditOpen = () => setEdit(true)
  const onEditClose = () => {
    setNewText(task.text)
    setEdit(false)
  }
  const onEditHandler = async () => {
    if (!isEdit) {
      onEditOpen()
    }
    if (isEdit) {
      await editTask({todolistId: todolistId, text: newText})
      setEdit(false)
    }
  }

  const onChangeCheckbox = async (e: ChangeEvent<HTMLInputElement>) => {
    await editTask({todolistId: todolistId, completed: e.currentTarget.checked})
  }

  const removeTaskHandler = () => removeTask(task.id)

  return (
    <div className={styles.tasks}>
      <div className={styles.checkbox}>
        <input type="checkbox"
               defaultChecked={task.completed}
               onChange={onChangeCheckbox}
        />
      </div>
      <TitleAndEdit isEdit={isEdit}
                    onEditOpen={onEditOpen}
                    onEditHandler={onEditHandler}
                    title={task.text}
                    newText={newText}
                    remove={removeTaskHandler}
                    onEditClose={onEditClose}
                    styles={styles}
                    changeText={changeText}
                    stylesUpdate={stylesUpdate}

      />
    </div>
  );
};