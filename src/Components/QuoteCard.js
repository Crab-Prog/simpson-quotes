import React from 'react';

function QuoteCard({ quoteCard }) {
  return (
      <div>
          <p><strong>Name: {quoteCard.character}</strong></p>
          <img src={quoteCard.image} alt=""/>
          <p>Quote: {quoteCard.quote}</p>
          <p>Direction: {quoteCard.characterDirection}</p>;
      </div>
  );
}

export default QuoteCard;