import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Body from './components/site-content/Body'
import Cart from './components/site-content/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import './App.css';
import Wallet from "./components/site-content/wallet";

function App() {
  //final portion will be added to my url
  const [endUrl, setEndUrl] = useState(30);
  // counter for badge
  const [count, setCount] = useState(0);
  // order
  const [order, setOrder] = useState([]);
    // order
    const [money, setMoney] = useState(30)
    // prezzo
    const [prezzo, setPrezzo] = useState(0)

  return (
    //set router
    <BrowserRouter>
      <div className="App">
        <Navigation setEndUrl={setEndUrl} count={count} />
        {/* fallback (Loading) */}
        <Suspense fallback={(<div>Loading</div>)}>
          <Route
            exact path='/' render={(props) =>
              <Body
                {...props}
                endUrl={endUrl}
                setCount={setCount}
                count={count}
                order={order}
                setOrder={setOrder}
                prezzo={prezzo}
                setPrezzo={setPrezzo}
              />} //passing props with Routing
          />
          <Route
            path='/cart' render={(props) =>
              <Cart
                {...props}
                order={order}
                count={count}
                setCount={setCount}
                money={money}
                setMoney={setMoney}
                prezzo={prezzo}
              />} //passing props with Routing
          />
            <Route
                path='/wallet' render={(props) =>
                <Wallet
                    {...props}
                    money={money}
                />} //passing props with Routing
            />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
