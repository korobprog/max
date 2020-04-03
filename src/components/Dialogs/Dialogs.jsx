import React from 'react';
import s from './Dialogs.module.css' ;

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andray
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hai</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Very well</div>

            </div>
        </div>


    )
}

export default Dialogs;