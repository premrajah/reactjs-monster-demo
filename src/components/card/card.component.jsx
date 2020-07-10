import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img className='card-image' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='monster' />
    <h2 className='card'>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
