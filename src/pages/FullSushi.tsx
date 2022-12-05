import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const FullSushi: React.FC = () => {
  const [sushi, setSushi] = useState<{
    imageUrl: string,
    title: string,
    proteins: number,
    fats: number,
    carbs: number,
    calories: number,
    weight: number,
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSushi() {
      try {
        const response = await axios.get('https://63299d9f4c626ff832c59c25.mockapi.io/items/' + id);
        setSushi(response.data);
      } catch (error) {
        console.log('ERROR', error);
        alert('Ошибка при получении данных');
        navigate('/');
      }
    }
    fetchSushi();
  }, []);

  if (!sushi) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <h4 className="title">{sushi.title}</h4>
      <div className="fullSushi">
        <div className="fullSushi__image">
          <img
            src={'../' + sushi.imageUrl}
            alt="Products"
          />
        </div>
        <div className="fullSushi__text">
          <h2 className="fullSushi__energyValue">Энергетическая ценность:</h2>
          <ul>
            <li className="fullSushi__description">Белки - {sushi.proteins.toFixed()} г.</li>
            <li className="fullSushi__description">Жиры - {sushi.fats.toFixed()} г.</li>
            <li className="fullSushi__description">Углеводы - {sushi.carbs.toFixed()} г.</li>
            <li className="fullSushi__description">Калорийность - {sushi.calories.toFixed()} ккал.</li>
            <li className="fullSushi__weight">*вес 1 шт. составляет - {sushi.weight} г.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FullSushi;
