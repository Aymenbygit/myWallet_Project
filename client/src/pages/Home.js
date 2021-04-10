import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { getOps } from "../actions/operationAction";
import AddOperation from "../pages/operations/addOperation";
import Homee from "../homee.jpg";
import { Link } from "react-router-dom";

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

  const add = Operation.filter((el) =>
    el.type.toLowerCase().includes("income")
  ).map((el) => el.amount);
  const del = Operation.filter((el) =>
    el.type.toLowerCase().includes("expense")
  ).map((el) => el.amount);
  // const mount = add-del;
  // const bal = mount.reduce(reducer)
  return (
    <div className="container accueil">
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
          {add.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
          -
          {del.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        </span>
        <span> DT</span>
      </h3>
      <h3>
        Income
        <span>
          {add.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        </span>
        <span> DT</span>
      </h3>
      <h3>
        Expenses
        <span>
          {del.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        </span>
        <span> DT</span>
      </h3>

      <AddOperation handleClose={handleClose} show={show} addNewOp={addNewOp} />
      <button
        onClick={handleShow}
        className="btn btn-search"
        style={{ backgroundColor: "#EA7336", color: "white", margin: 20,marginLeft:100, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}
      >
        Add a new operation
      </button>
      <div className="row">
        <div className="col-sm-12">
          <table>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Label</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {Operation.filter((el) =>
                el.type.toLowerCase().includes("income")
              )
                .map((el, i) => (
                  <tr key={i}>
                    <td data-label="Date" name="created_at">
                      {el.created_at}
                    </td>
                    <td data-label="Label" name="label">
                      {el.label}
                    </td>
                    <td data-label="Amount" name="amount">
                      {el.amount}
                    </td>
                    <td
                      data-label="Type"
                      name="type"
                      style={
                        el.type == "expense"
                          ? { backgroundColor: "#FF6347" }
                          : { backgroundColor: "#1E90FF" }
                      }
                    >
                      {el.type}
                    </td>
                  </tr>
                ))
                .slice(0, 2)}
              {Operation.filter((el) =>
                el.type.toLowerCase().includes("expense")
              )
                .map((el, i) => (
                  <tr key={i}>
                    <td data-label="Date" name="created_at">
                      {el.created_at}
                    </td>
                    <td data-label="Label" name="label">
                      {el.label}
                    </td>
                    <td data-label="Amount" name="amount">
                      {el.amount}
                    </td>
                    <td
                      data-label="Type"
                      name="type"
                      style={
                        el.type == "expense"
                          ? { backgroundColor: "#FF6347" }
                          : { backgroundColor: "#1E90FF" }
                      }
                    >
                      {el.type}
                    </td>
                  </tr>
                ))
                .slice(0, 2)}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/operations" style={{ textDecoration: "none" }}>
        <h5 style={{ color: "#f5c657" }}>⮞Show all operations</h5>
      </Link>
    </div>
  );
};

export default Home;
