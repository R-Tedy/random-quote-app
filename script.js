import { quoteData } from "./utils/quotes.js";

const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet');
const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');

// let quoteIndex = 0;
randomQuote()

newQuote.addEventListener("click", randomQuote);

function randomQuote(){
  let quoteNumber = Math.floor(Math.random()*quoteData.length);
  quoteText.innerText = quoteData[quoteNumber].quote;
  author.innerText = quoteData[quoteNumber].author;
}
