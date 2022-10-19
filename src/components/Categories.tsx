import React from 'react';
import { memo } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
}

const categories = ['Все', 'Ура маки', 'Хот маки', 'Маки', 'Хосо маки', 'Нигири и гунканы'];


export const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
})
