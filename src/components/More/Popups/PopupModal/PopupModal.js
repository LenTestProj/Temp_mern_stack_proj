import React from "react";
import classes from "./PopupModal.module.css";
import ReactDOM  from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Modal=({onClose})=>{
    return <div className={classes.main}>
        <div className={classes.row}>
            <p>Popup One</p>
            <FontAwesomeIcon icon={faClose} className={classes.closeButton} onClick={onClose.bind(null,false)}/>
        </div>
        <div className={classes.row}>
            <p>Popup One body..
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        <div className={classes.row}>
        <button className={classes.button} onClick={onClose.bind(null,false)}>
            Close
        </button>
        </div>
        
    </div>
}

const PopupModal = ({onClose}) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay} onClick={onClose.bind(null,false)}></div>
      <Modal onClose={onClose}/>
    </>,document.getElementById('portal')
  );
};

export default PopupModal;
