import React from 'react';
import CustomIcon from "assets/svg/CustomIcon"
import "./Design.scss"

const CustomButton = (props) => { 


    if(props.type == "plus") {
    return (
        <label className="plus-button">
        <input type="submit" name="image" value="one"></input>
        <CustomIcon name="plus-button"  className="plus-button" width={props.width} height={props.height}/>
        </label>
        )
    }else if(props.type == "empty-user-add") {
        return (
            <label className="empty-user-add-button">
            <input type="submit" name="image" value="one" onClick={props.onClick}></input>
            <CustomIcon name="empty-user-with-plus"  className="plus-button" width={props.width} height={props.height}/>
            </label>
            )
    }
    else {
        return (
            <div >
            <label className="plus-button" className= {props.className} >
            <input type="submit" name="image" value="one"></input>
            <CustomIcon name="plus-button" width={props.width} height={props.height}/>
            </label> 
            </div>
           
            )
    }

}


export default CustomButton;