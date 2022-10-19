import React, { Suspense } from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './scss/app.scss';
import MainLayouts from './layouts/MainLayouts';

const Cart = React.lazy(() => import(/* webpackChunkName: 'Cart' */ './pages/Cart'));
const FullSushi = React.lazy(() => import(/* webpackChunkName: 'FullSushi' */ './pages/FullSushi'));
const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFound' */ './pages/NotFound'));

function App() {
   return (
    <Routes>
      <Route path="/react-Sushi-Rolly/" element={<MainLayouts />}>
        <Route path="/react-Sushi-Rolly/" element={<Home />} />
        <Route 
          path="/react-Sushi-Rolly/cart" 
          element={
            <Suspense fallback={<div>Загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          } 
        />
        <Route 
          path="/react-Sushi-Rolly/sushi/:id" 
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <FullSushi />
            </Suspense>
          }  
        />
        <Route 
          path="/react-Sushi-Rolly/*" 
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App;
