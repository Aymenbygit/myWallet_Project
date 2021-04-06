import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import {
  deleteOps,
  editOps,
  getOps,
  saveOps,
} from "../actions/operationAction";
import AddOperation from "./operations/addOperation";

const Operations = ({ search }) => {

  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const dispatch = useDispatch();
  const Operation = useSelector((state) => state.OperationReducer);
  const SaveOperation = useSelector((state) => state.SavedOperation);
  const [toggleEdit,setToggleEdit] = useState(false)
  const [field, setfield] = useState(SaveOperation ? SaveOperation.saved : '');
  const handleChange = (e) => {
    setfield({ ...field, [e.target.name]: e.target.value });
  };
  const update = e => {
    setToggleEdit(!toggleEdit)
}
const updateNow = e => {
  e.preventDefault(); 
  dispatch(editOps(Operation._id))
  update();
}
useEffect( ()=> {
  if(!SaveOperation)
  setfield({
    label:"",
    amount:"",
    type:"",
  })
  else
  setfield(SaveOperation)
},[SaveOperation])

  const aamount = Operation.map((el) => el.amount);
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var ii = 1;
  // useEffect(() => {
  //   dispatch(loadUser());
  //   // dispatch(getOps())
  // }, [SaveOperation]);
  // useEffect(() => {
  //   setfield(SaveOperation);
  // }, [SaveOperation]);
  return (
    <div className="container">
      {/* <h2 className="btn-dark">All Operations</h2> */}
      <AddOperation handleClose={handleClose} show={show} />
      <h2 className="btn-dark">
        Balance{" "}
        <span>
          {aamount.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        </span>{" "}
        <span>DT</span>
      </h2>
      <small className="form-text text-muted">
        Operations Count: {Operation.length}
      </small>
      <br />
      <input type="text" placeholder="search..." />
      {/* <table className="table table-hover">
        <thead>
    

          <tr>
            <th scope="col">#</th>
            <th scope="col">label</th>
            <th scope="col">amout</th>
            <th scope="col">type</th>
            <th scope="col">type</th>
            <th scope="col">type</th>
          </tr>
        </thead>
        <td
          colSpan="7"
          style={{
            textAlign: "center",
            cursor: "pointer",
            padding: 7,
            border: "solid black 1px",
            borderRadius: "2px",
            backgroundColor: "#EA7336",
            color: "white",
          }}
          onClick={handleShow}
        >
          {" "}
          Click here to add new operation
        </td>
        <tbody>
          {!toggleEdit && (
            <input
              type="text"
              name="label"
              placeholder=".."
              onChange={handleChange}
              // value={field.label}
            />
          )}
          {!toggleEdit && (
            <input
              type="text"
              name="amount"
              placeholder=".."
              onChange={handleChange}
              // value={field.amount}
            />
          )}
          {Operation.map((el, i) => (
            <tr key={i}>
              <th scope="row">{ii++}</th>
              {/* <td name="created_at" className="col-3">
                {el.created_at}
              </td> */}

              {/* <td name="label" className="col-3">
                {el.label}
              </td>

              <td name="amount" className="col-2">
                {el.amount}
              </td>

              <td
                name="type"
                className="col-1"
                style={
                  el.type == "expense"
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "blue" }
                }
              >
                {el.type}
              </td>
              <td onClick={() => dispatch(deleteOps(el._id))} className="col-1">
                <i className="fas fa-trash" style={{ cursor: "pointer" }}></i>
              </td>
              <td>
              <button onClick={toggleEdit ? update :updateNow}>{toggleEdit ? "update" :"save"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan="2">Date</th>
            <th scope="col">Label</th>
            <th scope="col">Amount</th>
            <th scope="col">Type</th>
            <th scope="col">del</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
        <th
          colSpan="8"
          style={{
            textAlign: "center",
            cursor: "pointer",
            padding: 7,
            border: "solid black 2px",
            borderRadius: "2px",
            backgroundColor: "#EA7336",
            color: "white",
          }}
          onClick={handleShow}
        >
          {" "}
          Click here to add new operation
        </th>
        </tr>
        {/* {!toggleEdit && (
            <input
              type="text"
              name="label"
              placeholder=""
              onChange={handleChange}
              // value={field.label}
            />
          )}
          {!toggleEdit && (
            <input
              type="text"
              name="amount"
              placeholder=""
              onChange={handleChange}
              // value={field.amount}
            />
          )} */}
        {Operation.map((el, i) => (
          <tr key={i}>
            <td data-label="#">{ii++}</td>
            <td data-label="Date" name="created_at" colSpan="2">{el.created_at}</td>
            <td data-label="Label" name="label">{el.label}</td>
            <td data-label="Amount" name="amount">{el.amount}</td>
            <td data-label="Type"
                name="type"
                style={
                  el.type == "expense"
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "blue" }
                }
              >
                {el.type}
              </td>
              <td data-label="del" data-confirm="Are you sure to delete this item?" onClick={() => dispatch(deleteOps(el._id))} className="col-1">
                <i className="fas fa-trash" style={{ cursor: "pointer" }}></i>
              </td>
              <td data-label="edit" name="amount"> <button onClick={toggleEdit ? update :updateNow}>{toggleEdit ? "update" :"save"}</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Operations;
