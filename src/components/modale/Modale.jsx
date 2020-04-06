import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Modale({ titolo, setCount, count, setOrder, order }) {

    //clarify my state
    const [show, setShow] = useState(false);

    //init modal handler
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateCart = (item) => {
        setOrder([...order, item])
        setCount(count + 1);
        handleClose()
    };

    return (
        <>
            <Button variant='warning' onClick={handleShow} style={{ backgroundColor: 'orange' }}>
                Add to Cart
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* props => titolo */}
                    <Modal.Title>{titolo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hey nice, proceed to the cart</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="success" onClick={() => updateCart(titolo)}>
                        Add to Cart
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

