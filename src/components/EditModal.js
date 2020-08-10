import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditModal({ editTodo, oldText, idOfTheTodo }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(oldText);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setEditText(oldText);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!editText.trim()) {
      return alert("Enter a valid modification");
    }
    editTodo(idOfTheTodo, editText);
    setIsOpen(false);
  }

  return (
    <div>
      <button className="my-btn" onClick={openModal}>
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="text"
            style={{ padding: "1rem" }}
          />
          <button className="my-btn">Confirm</button>
        </form>
      </Modal>
    </div>
  );
}

export default EditModal;
