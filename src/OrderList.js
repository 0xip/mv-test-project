import React, {useState} from "react";
import mvPurchaseOrdersData from './purchaseorders.json';
import { Modal, Button, Container, Row, Col, Table} from 'react-bootstrap';
import './OrderList.css'; 

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
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                <h1 className="text-center mb-4">Purchase Orders</h1>
                <ul className="list-group">
                    {mvPurchaseOrders.map((order, index) => (
                    <li key={index} className="list-group-item list-group-item-action">
                        <a href="#" onClick={() => handleShow(order)}>
                        {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
                        </a>
                    </li>
                    ))}
                </ul>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder && (
                        <>
                            <p><strong>Adress:</strong> {selectedOrder.PurchaseOrderAddress}</p>
                            <p><strong>Contact Person:</strong> {selectedOrder.PurchaseOrderContactPerson}</p>
                            <p><strong>Status:</strong> {selectedOrder.PurchaseOrderStatus}</p>
                            <Table className="mt-4" bordered hover>
                                <thead className="thead-dark">
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
                            </Table>
                        </>
                     )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
          </Container>
        );
    };

export default OrderList;