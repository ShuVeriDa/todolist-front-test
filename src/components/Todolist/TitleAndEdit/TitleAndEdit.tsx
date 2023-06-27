import {FC} from 'react';
import {Field} from "../Field/Field.tsx";
import {MdModeEditOutline} from "react-icons/md";
import {FaTrashAlt} from "react-icons/fa";
import {FcCancel} from "react-icons/fc";

interface ITitleAndEditProps {
  styles?: { readonly [key: string]: string }
  stylesUpdate?: { readonly [key: string]: string }
  changeText: (text: string) => void
  isEdit: boolean
  onEditOpen: () => void
  onEditHandler: () => void
  title: string
  newText: string
  remove: () => void
  onEditClose: () => void
}

export const TitleAndEdit: FC<ITitleAndEditProps> = ({isEdit, styles, onEditOpen, title, newText, stylesUpdate, changeText, onEditHandler, remove, onEditClose}) => {
  return (
   <>
      <div className={styles?.title}
           onClick={onEditOpen}
      >
        {isEdit
          ? <Field name={'title'}
                   styles={stylesUpdate}
                   value={newText}
                   onChange={changeText}
          />
          : <span>{title}</span>
        }
      </div>
      <div className={styles?.btn}>
        <div className={styles?.edit}
             onClick={onEditHandler}
        >
          <MdModeEditOutline/>
        </div>
        {!isEdit
          ? <div className={styles?.remove} onClick={remove}><FaTrashAlt/></div>
          : <div className={styles?.cancel} onClick={onEditClose}><FcCancel/></div>
        }
      </div>

  </>
)
  ;
};