import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Cart({ order, count, setCount, money, setMoney, prezzo }) {

    const cancelItem = item => {
        order.pop(item);
        setCount(count - 1);
    }

         
    return (
        <>
            <div className='d-flex flex-wrap justify-content-center align-items-start pt-5'>
                {order.length ? order.map((n, index) => (
                    <Card className='my-4 mx-2' key={index}>
                        <h6>Selected Product: </h6>
                        <br />
                        <p className='mx-2'>{n}</p>
                        <p className='mx-2'>{prezzo}</p>
                        <Button variant='success' className='my-2 mx-3'onClick={() => setMoney(money - prezzo)}>Buy</Button>
                        <Button variant='danger' className='my-2 mx-3' onClick={() => cancelItem(n)}>Delete</Button>
                    </Card>)
                ) : <h1>No Item in Cart</h1>}
            </div>
        </>

    )
}
