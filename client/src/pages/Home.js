import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { getOps } from "../actions/operationAction";
import AddOperation from "../pages/operations/addOperation";
import Homee from '../homee.jpg'

const Home = ({ addNewOp }) => {
  const Operation = useSelector((state) => state.OperationReducer);
  const AuthReducer = useSelector((state) => state.AuthReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getOps());
  }, []);
  // const reducer = ((accumulator, currentValue) => accumulator + currentValue, 0);
  const mount = Operation.map((el) => el.amount);
  // const bal = mount.reduce(reducer)
  return (
    <div className="container">
          {/* <img src={Homee} style={{
      opacity: 0.8,
      backgroundRepeat:'no-repeat',
      backgroundSize:"300px 100px",
      backgroundPosition:"center" }} /> */}
      {/* <img src={Homee} style={{backgroundRepeat:'no-repeat', width:'100%',height:'100%' ,border:"5px solid black"}}/> */}
      {AuthReducer.user && (
        <h2>
          Hello {AuthReducer.user.first_name}
          <span>,</span>
        </h2>
      )}
      <h3>
        Balance
        <span>
          {mount.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        </span>
        <span>DT</span>
      </h3>

      <AddOperation handleClose={handleClose} show={show} addNewOp={addNewOp} />
      <button onClick={handleShow} className="btn btn-warning btn-search">
        Add a new operation
      </button>
      <h3>Add Income</h3>
      <h3>Add Expense</h3>

      <h4>Last 2 Incomes</h4>
      <h4>Last 2 Expenses</h4>
      <tbody>
        {Operation.filter((el) => el.type.toLowerCase().includes("income")).map(
          (el, i) => (
            <tr key={i} >
              <td name="created_at">{el.created_at}</td>
              <td name="label">{el.label}</td>
              <td name="amount">{el.amount}</td>
              <td
                name="type"
                style={
                  el.type == "expense"
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "blue" }
                }
              >
                {el.type}
              </td>
            </tr>
          )
        )}
        {Operation.filter((el) =>
          el.type.toLowerCase().includes("expense")
        ).map((el, i) => (
          <tr key={i}>
            <td name="created_at">{el.created_at}</td>
            <td name="label">{el.label}</td>
            <td name="amount">{el.amount}</td>
            <td
              name="type"
              style={
                el.type == "expense"
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "blue" }
              }
            >
              {el.type}
            </td>
          </tr>
        ))}
      </tbody>
      {/* </img> */}
    </div>
  );
};

export default Home;
