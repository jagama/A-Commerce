import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Body from './components/site-content/Body'
import Cart from './components/site-content/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import './App.css';

function App() {
  //final portion will be added to my url
  const [endUrl, setEndUrl] = useState(100);
  // counter for badge
  const [count, setCount] = useState(0);
  // order
  const [order, setOrder] = useState([])

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
              />} //passing props with Routing
          />
          <Route
            path='/cart' render={(props) =>
              <Cart
                {...props}
                order={order}
                count={count}
                setCount={setCount}
              />} //passing props with Routing
          />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
