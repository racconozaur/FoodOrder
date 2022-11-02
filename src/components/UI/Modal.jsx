import React from 'react';
import ReactDOM  from 'react-dom';
import cs from './Modal.module.css'

const Backdrop = props => {
    return (<div className={cs.backdrop} onClick={props.onClose}/>)
}

const ModalOverlay = props => {
    return (<div className={cs.modal}>
            <div className={cs.content}>{props.children}</div>
    </div> )
}

const el = document.getElementById('overlay')

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onPress}/>, el)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, el)}
        </>
    );
};

export default Modal;