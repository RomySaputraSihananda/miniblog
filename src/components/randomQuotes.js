import { billgates, mahatma, einstein, mandela } from "./../assets/img/init";

const quotes = [
  {
    name: "Albert Einstein",
    quote: `"I have no special talent. I am only passionately curious"`,
    image: einstein,
    wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
  },
  {
    name: "Bill Gates",
    quote: `"The Internet is becoming the town square for the global village of tomorrow"`,
    image: billgates,
    wiki: "https://en.wikipedia.org/wiki/Bill_Gates",
  },
  {
    name: "Mahatma Gandhi",
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever"`,
    image: mahatma,
    wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
  },
  {
    name: "Nelson Mandela",
    quote: `"Education is the most powerful weapon you can use to change the world"`,
    image: mandela,
    wiki: "https://en.wikipedia.org/wiki/Nelson_Mandela",
  },
];

const random = () => quotes[Math.floor(Math.random() * quotes.length)];

export default random;
