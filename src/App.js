import { Fragment } from 'react';
import * as React from "react";
import Header from './components/header/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';

const FoodManager = React.lazy(() => import("./containers/foodManager"));
const CartManager = React.lazy(() => import("./containers/cartManager"));
const OrderManager = React.lazy(() => import("./containers/orderManager"));


function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={
            <Suspense fallback={<>Loading...</>}>
                <FoodManager />
            </Suspense>
        } />
        <Route path="cart" element={
            <Suspense fallback={<>Loading...</>}>
                <CartManager />
            </Suspense>
        } />
        <Route path="orders" element={
            <Suspense fallback={<>Loading...</>}>
                <OrderManager />
            </Suspense>
        } />
      </Routes>
    </Fragment>
  );
}

export default App;
