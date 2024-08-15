import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>1984</td>
                        <td>1</td>
                        <td>₸2333</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: ₸2333
            </div>
        </div>
    )
    
}

export {ShoppingCartTable};