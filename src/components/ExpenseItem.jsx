import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AppContext } from "../context/AddContext";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditedExpense from "./EditedExpense";

const ExpenseItem = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const { expense, dispatch } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expense || []);

	useEffect(() => {
		setfilteredExpenses(expense);
	}, [expense]);

	const handleChange = (event) => {
		const searchResults = expense.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};


  return (
    <>
    <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Search by name...'
				onChange={handleChange}
			/>
    <Table className="mt-4" border={1}>
      <thead>
        <tr>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Name
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Category
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Date of Expense
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Amount
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Update By
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3">
            Created By
          </th>
          <th className="bg-secondary-subtle text-center border-1 pt-3 pb-3"></th>
        </tr>
      </thead>
      <tbody>

        {filteredExpenses.map((items) => (
          <tr key={items.id}>
            <td className="text-center border-1">{items.name}</td>
            <td className="text-center border-1">{items.category}</td>
            <td className="text-center border-1">{items.date}</td>
            <td className="text-center border-1">INR {items.amount}</td>
            <td className="text-center border-1">{items.updated}</td>
            <td className="text-center border-1">{items.createdby}</td>
            <td className="text-center border-1">
              <div className="d-flex justify-content-evenly">
                <span className="text-center" style={{ fontSize: "20px" }}>
                  <EditedExpense expenseToUpdate={expense.name}/>
                </span>
                <span>
                  <RiDeleteBin6Fill style={{color:'red', fontSize:'20px'}} onClick={handleShow}></RiDeleteBin6Fill>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    keyboard={false}
                    >
                    <Modal.Body>
                      Are you sure do you want to delete this Expense?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={handleClose}>
                        No
                      </Button>
                      <Button
                      variant="success"
                        onClick={() =>dispatch({type: "DELETE_EXPENSE",payload: items.id,}, handleClose())
                        }
                      >
                        Yes, Delete!
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
  );
};

export default ExpenseItem;
