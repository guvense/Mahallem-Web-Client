import React , { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { hideCreateTask } from "../../layouts/DefaultLayout/components/menu/reducer";
import {Modal, Button, Form, Input,DatePicker } from "antd";
import "./CreateTaskModal.scss"
import CustomIcon from "assets/svg/CustomIcon"
import { createTaskRequest } from "./reducer";


const CreateTaskModal = (props) => {

    const { createTaskPopUpShow } = useSelector(
        (state) => state.header
      );

    const dispatch = useDispatch();

    const handleClose = () =>  dispatch(hideCreateTask());

    const styles = {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      fontFamily: "sans-serif",
      justifyContent: "space-between"
    };

    const onFinish = (values) => {
      values.deadline = values.deadline.format('YYYY-DD-MM')
      dispatch(createTaskRequest(values));
      handleClose()
    };

    const datePickerStyle = {
      borderRadius: "7px"
    }

    return (
      <> 
    <Modal visible={createTaskPopUpShow} onCancel={handleClose} footer={null}>
    <h1>Creating Task</h1>
    <CustomIcon name="bookmarker" style={styles} className="book-marker" width={50} height={50}/>
    <CustomIcon name="create-task" className="create-task-icon" width={40} height={40}/>
    <Form
    name="creating_task"
    className="creating-task-layout"
    initialValues={{ remember: false }}
    onFinish={onFinish}
  >
  <div>

  <Form.Item
  name="deadline"
  rules={[{ required: true, message: "DeadLine" }]}
  >
  <DatePicker  format={'YYYY-DD-MM'} style={datePickerStyle}/>

  </Form.Item>

    <Form.Item
      name="title"
      rules={[{ required: true, message: "Title" }]}
    >
      <Input
        placeholder="Title"
        className="form-item"
      />
    </Form.Item>
    <Form.Item
    name="issue"
    >
    <Input
      placeholder="Issuer"
      className="form-item"
    />
  </Form.Item>
  <Form.Item
  name="description"
  rules={[{ required: true, message: "Description" }]}
>
  <Input
    placeholder="Description"
    className="form-item form-desc"
  />
</Form.Item>

<Form.Item className="plus-button">
<label>
  <input type="submit" name="image" value="one"></input>
  <CustomIcon name="plus-button"  className="plus-button" width={60} height={60}/>
</label>
</Form.Item>

</div>
  </Form>
  </Modal>
  </>
  );

}

export default CreateTaskModal;