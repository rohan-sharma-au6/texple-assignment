import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

const ModalExample = (props,todos) => {
  const {
    buttonLabel,
    className
  } = props;
  console.log("sndcbn",todos)
  const [modal, setModal] = useState(false);
  const [todo,setTodo] =useState("")
  const toggle = () => setModal(!modal);
  const UpdateTodo=()=>{
      
  }

  return (
    <div>
      <Button className="btn2" color="danger" onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Todo</ModalHeader>
        <input style={{width:"200px",marginLeft:"30px"}} type="text" placeholder="Edit Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;