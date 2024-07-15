import React, {useState} from "react";
import mvPurchaseOrdersData from './purchaseorders.json';
import { Modal, Button } from 'react-bootstrap';

const OrderList = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [show,setShow] = useState(false);

    const mvPurchaseOrders = mvPurchaseOrdersData.mvPurchaseOrders;
    const handleClose= ()=> setShow(false);
    const handleShow=(order)=>{
        setSelectedOrder(order);
        setShow(true);
    };

    return(
        <div className="container">
            <h1>Purchase Orders</h1>
            <ul className="list-group">
                {mvPurchaseOrders.map((order, index) => (
                    <li key={index} className="list-group-item">
                        <a href="#" onClick={() => handleShow(order)}>
                            {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
                        </a>
                    </li>
                 ))}
            </ul>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder && (
                        <>
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
                                    {selectedOrder.PurchaseOrderDetails.map((detail, index)=> (
                                        <tr key={index}>
                                            <td>{detail.PurchaseOrderRowProductSKU}</td>
                                            <td>{detail.PurchaseOrderRowQuantity}</td>
                                            <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                                            <td>{detail.PurchaseOrderRowTotalAmount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                     )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
          </div>
        );
    };

export default OrderList;