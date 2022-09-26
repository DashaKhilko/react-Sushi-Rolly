import { useState } from 'react';

function Categories({value, onChangeCategory}) {
  const categories = ['Все', 'Ура маки', 'Хот маки','Маки', 'Хосо маки', 'Нигири и гунканы'];
  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
