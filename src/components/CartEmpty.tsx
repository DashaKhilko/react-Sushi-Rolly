import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../assets/img/emptyCart.svg';

export const CartEmpty: React.FC = () => {
  return (
      <div className="cart cart--empty">
        <h2>
          Корзина пуста
        </h2>
        <p>Для того, чтобы заказать суши / роллы, перейди на главную страницу.</p>
        <div className="cartImage">
          <img
            src={emptyCart}
            alt="Empty cart"
          />
        </div>
        <Link
          to="/react-Sushi-Rolly/"
          className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
  );
};

