import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container">
            <div className="row"  >
                <div className="col-sm-12">
                    <div className="card" style={{backgroundColor:"black",textAlign:"center"}}>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:"white"}}>MY WALLET, <i>web application to manage your wallet</i> </h6>
                        <p className="card-text" style={{color:"#ea7336"}}>All rights reserved&copy;. 2021</p>
                        {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                        {/* <Link className="btn btn-primary" to="/">Home</Link> */}
                    </div>
                    </div>
                </div>
                {/* <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Footer
