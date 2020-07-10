import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt='monster' />
    <h1 className='card'>{props.monster.name}</h1>
  </div>
);
