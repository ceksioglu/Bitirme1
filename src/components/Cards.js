import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Kurslara göz atın.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Javascript'
              label='Kodlama'
              path='/urunler'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
