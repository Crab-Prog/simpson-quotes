import './App.css';
import React from 'react';
import QuoteCard from './Components/QuoteCard';
import axios from 'axios';

function App() {
  const [quoteCard, setQuoteCard] = React.useState({"quote":"Eat my shorts","character":"Bart Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638","characterDirection":"Right"});

  const getQuotes = () => {

    axios
      .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setQuoteCard(data[0]);
      });
  };

  return (
    <div >
      <QuoteCard quoteCard={quoteCard} />
      <button type="button" onClick={getQuotes}>Click to see another character</button>
    </div>
  );

}
export default App;
