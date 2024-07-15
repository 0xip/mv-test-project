import React, {useState,useEffect} from "react";
import orders from './purchaseorders.json';

const OrderList = () => {
    const [selectedOrder, setSelectedOrder] = useState();

    return(
        <div className="container">
            <h1>Purchase Orders</h1>
            <ul className="list-group">
                {orders.map((order, index) => (
                    <li key={index} className="list-group-item">
                        <a href="#" onClick={() => setSelectedOrder(order)}>
                            {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
                        </a>
                    </li>
                 ))}
            </ul>
            {selectedOrder && (
                <div className="order-details">
                    <h2>Order Details</h2>
                    <p>Adress: {selectedOrder.PurchaseOrderAddress}</p>
                    <p>Contact Person: {selectedOrder.PurchaseOrderContactPerson}</p>
                    <p>Status: {selectedOrder.PurchaseOrderStatus}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product SKU</th>
                                <th>Quantity Ordered</th>
                                <th>Unit Price</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedOrder.PurchasedOrderDetails.map((detail, index)=> (
                                <tr key={index}>
                                    <td>{detail.PurchasedOrderRowProductSKU}</td>
                                    <td>{detail.PurchaseOrderRowQuantity}</td>
                                    <td>{detail.PurchaseOrderRowUnitPrice}</td>
                                    <td>{detail.PurchaseOrderRowTotalAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default OrderList;