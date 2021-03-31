import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addOps } from "../../actions/operationAction";

const AddOperation = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [operation, setOperation] = useState({
    label: "",
    amount: "",
    type: "income",
  });
  const handleChange = (e) => {
    setOperation({ ...operation, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new operation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2" m="2">
                Label
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="label"
                  placeholder="..."
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <br/>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2" m="2">
                Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="..."
                  name="amount"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <br/>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Type</Form.Label>
              <Col sm="10">
              <Form.Control as="select" name="type" onChange={handleChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Form.Control>
              </Col>
            </Form.Group>
            <div>
              {/* <label className="lab">label:</label>
              <input
                type="text"
                size="20"
                name="label"
                className="inp-text"
                onChange={handleChange}
              ></input>
              <br /> */}
              {/* <label className="lab">amount:</label>
              <input
                type="text"
                size="20"
                name="amount"
                className="inp-text"
                onChange={handleChange}
              ></input>
              <br /> */}
              {/* <label className="lab">type:</label> */}
              {/* <input
                type="text"
                size="20"
                name="type"
                className="inp-text"
                onChange={handleChange}
              ></input> */}
              {/* <select name="type" onChange={handleChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select> */}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(addOps(operation));
            }}
          >
            Add operation
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddOperation;
