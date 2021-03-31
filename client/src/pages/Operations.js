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
  const [field, setfield] = useState({
    label: "",
    amount: "",
    type: "",
  });
  const handleChange = (e) => {
    setfield({ ...field, [e.target.name]: e.target.value });
  };
  const zot = SaveOperation.saved && SaveOperation.saved.label;
  console.log(zot);
  const aamount = Operation.map((el) => el.amount);
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var ii = 1;
  useEffect(() => {
    dispatch(loadUser());
    // dispatch(getOps())
  }, [SaveOperation]);
  useEffect(() => {
    setfield(SaveOperation);
  }, [SaveOperation]);
  return (
    <div className="container">
      <h2 className="btn-dark">All Operations</h2>
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
      <table className="table table-hover">
        <thead>
          {/* {
              show ?
              <tr>
                <button>a</button>
                <button>a</button>
                <button>a</button>
              </tr> : null
              }
            <button onClick={handleShow} className="btn btn-warning btn-search">hide</button> */}

          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">Date</th> */}
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
          {SaveOperation.isEdited && (
            <input
              type="text"
              name="label"
              placeholder=".."
              onChange={handleChange}
              value={SaveOperation.saved && SaveOperation.saved.label}
            />
          )}
          {SaveOperation.isEdited && (
            <input
              type="text"
              name="amount"
              placeholder=".."
              onChange={handleChange}
              value={SaveOperation.saved && SaveOperation.saved.amount}
            />
          )}
          {Operation.map((el, i) => (
            <tr key={i}>
              <th scope="row">{ii++}</th>
              {/* <td name="created_at" className="col-3">
                {el.created_at}
              </td> */}

              <td name="label" className="col-3">
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
                <i
                  className={
                    SaveOperation.isEdited
                      ? "far fa-check-square"
                      : "fas fa-edit"
                  }
                  style={{ cursor: "pointer" }}
                  // className="col-1"
                  onClick={() => {
                    SaveOperation.isEdited
                      ? dispatch(saveOps(el, (SaveOperation.isEdited = false)))
                      : dispatch(editOps(el._id));
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Operations;
