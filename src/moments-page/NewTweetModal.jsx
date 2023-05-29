import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import camera from "../res/camera.png"
import PicturesWall from './components/PicturesWall';
import { Input } from 'antd';
const { TextArea } = Input;

const NewTweetModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("clicked")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img src={camera} onClick={showModal}/>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <TextArea rows={4} /> 
        {
            PicturesWall()
        }
      </Modal>
    </>
  );
};

export default  NewTweetModal;
