import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Firstpage() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <table className="en-home-table">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="/logo.png" alt="" className="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="en-page-action1">
        <Link className="btn btn-primary" to="/Registration">
          REGISTER
        </Link>
      </div>

                    <div className="en-page-footer">
                        <span>Powered by <b>Sarvodayam VHSS</b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;
