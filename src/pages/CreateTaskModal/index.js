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
      console.log(values);
      values.deadline = values.deadline.format('YYYY-DD-MM')
      dispatch(createTaskRequest(values));
    };

    return (
      <> 
    <Modal visible={createTaskPopUpShow} onCancel={handleClose} footer={null}>
    <h1>Creating Task</h1>
    <CustomIcon name="bookmarker" style={styles} className="book-marker" width={50} height={50}/>
    <Form
    name="creating_task"
    className="creating-task-layout"
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
  <div>

  <Form.Item
  name="deadline"
  rules={[{ required: true, message: "DeadLine" }]}
  >
  <DatePicker  format={'YYYY-DD-MM'} />

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
  <CustomIcon name="plus-button"  width={60} height={60}/>
  <input type="image" alt="Submit Form"/>
  
</label>
</Form.Item>

</div>
  </Form>
  </Modal>
  </>
  );

}

export default CreateTaskModal;