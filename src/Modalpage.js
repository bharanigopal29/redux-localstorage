import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextInput,
} from "carbon-components-react";

function Modalpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    // Validate that the input is a numeric value
    const value = event.target.value;
    if (!isNaN(value)) {
      setAge(value);
    }
  };

  const handleSave = () => {
    // Add your logic to handle the data (name, age) here
    console.log("Name:", name);
    console.log("Age:", age);
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal
        open={isModalOpen}
        onRequestClose={closeModal}
        modalHeading="Add Person"
      >
        <ModalWrapper>
          <ModalHeader title="Person Information" />
          <ModalBody>
            <TextInput
              id="name"
              labelText="Name"
              value={name}
              onChange={handleNameChange}
            />
            <TextInput
              id="age"
              labelText="Age"
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button kind="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </ModalFooter>
        </ModalWrapper>
      </Modal>
    </div>
  );
}

export default Modalpage;
