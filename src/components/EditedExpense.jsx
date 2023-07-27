import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdModeEditOutline } from "react-icons/md";
import { AppContext } from "../context/AddContext";
import { v4 as uuidv4 } from 'uuid'

const EditedExpense = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name:name,
      category:category,
      date:date,
      amount:amount,
    };
    dispatch({
      type: 'UPDATE_EXPENSE',
      payload: expense,
    })
    handleClose();
    setName('');
    setAmount('');
    setCategory('');
    setDate('');
    setDesc('');
  }

  return (
    <div>
      <MdModeEditOutline onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={onSubmit} >
          <Modal.Header>
            <Modal.Title>Edit Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-1">
              <label for="name">Name</label>
              <br />
              <input
                className="w-100 ps-4 pt-2 pb-2 border-0 bg-secondary-subtle"
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required="required"
              ></input>
            </div>
            <div className="mb-1">
              <label for="description">Description</label>
              <br />
              <input
                className="w-100 ps-4 pt-2 pb-2 border-0 bg-secondary-subtle"
                type="text"
                id="description"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                required="required"
              ></input>
            </div>
            <div className="mb-1">
              <label for="category">Category</label>
              <br />
              <select
                className="w-100 p-2 border-0"
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Select a Category</option>
                <option value="party">Party</option>
                <option value="cinema">Cinema</option>
                <option value="shopping">Shopping</option>
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>
                <option value="utilities">Utilities</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="mb-1">
              <label for="date">Date of Expense</label>
              <br />
              <input
                className="w-100 ps-4 pt-2 pb-2 border-0 bg-secondary-subtle"
                type="date"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required="required"
              ></input>
            </div>
            <div className="mb-1">
              <label for="amount">Expense Amount</label>
              <br />
              <input
                className="w-100 ps-4 pt-2 pb-2 border-0 bg-secondary-subtle"
                type="number"
                id="amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required="required"
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button className="bg-secondary rounded-1 ps-4 pe-4" onClick={handleClose} >Close</Button>
            <Button className="bg-success rounded-1 ps-4 pe-4" type="submit">
              Save Expense
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default EditedExpense;
