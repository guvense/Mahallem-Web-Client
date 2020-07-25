import Modal from '@material-ui/core/Modal';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import React , { useEffect, useState } from 'react';

const CustomModal = (props) => { 

      const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform:'translate(-50%, -50%)'
        },
      }));
  
      const classes = useStyles();


    return (
        <> 
        <Modal
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <div className={classes.paper} >
        {props.children}
        </div>
        </Modal>
        </>
        )
}

export default CustomModal;