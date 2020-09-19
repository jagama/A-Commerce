import React, { useState, useEffect, useCallback } from "react";
import LazyLoad from "react-lazyload";
import { Card, Avatar } from "antd";
import getContent from '../../services/dataFetch'
import Modale from '../modale/Modale'
import '../../shared/shared.css'

//meta circle for antd (orange one)
const { Meta } = Card;


export default function Body({ endUrl, setCount, count, setOrder, order, prezzo, setPrezzo }) {
    //clarify my init state
    const [data, setData] = useState([]);

    // data GET
    // apply dynamic portion of my query defined in my High Order State[endUrl] = tile
    // !!ATTENTION!! : State can change with "onClick() in <Navigation/> link"

    const tile = endUrl;

    // import fetch
    const getData = useCallback(async () => {
        getContent(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=${tile}`) // dynamic portion
            .then(data => {
                //setting state
                setData(data) // data pairing
            })
            //catch err
            .catch(err => {
                console.log(err)
            });
    }, [tile]) // deps (see below)

    // useEffect is executed on every component render,
    // but if i pass a second empty argument [] (array empty),
    // it will act like: 'componentDidMount'.
    // In addition i can pass dependencies [deps] with a callBack(),
    // and useEffect() will trigger with every single change of getData => callback()

    // see here => https://it.reactjs.org/docs/hooks-reference.html#usecallback :

    // "useCallback will return a memoized version of the callback 
    // that only changes if one of the dependencies has changed. This is useful,
    // when passing callbacks to optimized child components 
    // that rely on reference equality to prevent unnecessary renders. "

    useEffect(() => {
        getData();
    }, [getData]); //deps

    // return <Card/>  with dynamic data from dynamic fetch
    return (
        <div className='flex' style={{ marginTop: '7em', flexWrap: 'wrap' }}>
            {/* mappin' my card deck */}
            {data.map(item => (
                <LazyLoad key={item.id}>
                    <Card
                        className='corning'
                        style={{ width: 300, margin: '1em', textAlign: '-webkit-auto' }}
                        cover={

                            <img
                                className='corning'
                                alt="example"
                                src={item.url}
                                style={{ height: 300, width: 300 }}
                            />

                        }
                    ><Meta
                            avatar={
                                <Avatar style={{ backgroundColor: "orange" }}>{item.id}</Avatar>
                            }
                            title={item.title} 

                        />
                        {/* passing to <Modale/> my props */}
                        <h3>{item.id % 2 === 0 ? '15€' : '30€'}</h3>
                        <Modale titolo={item.title} style={{ margin: 'auto' }}
                            setCount={setCount}
                            count={count}
                            setOrder={setOrder}
                            order={order} 
                            price={item.id % 2 === 0 ? '15€' : '30€'}
                                prezzo={prezzo}
                                setPrezzo={setPrezzo}
                        />
                    </Card>
                </LazyLoad>
            ))}
        </div>
    );
}
