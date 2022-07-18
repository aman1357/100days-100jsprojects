const btn = document.getElementById('btn');

btn.addEventListener('click', generator);

// A Function to generate quotes
const quotes = [
    {
      quote:
        "Bhai sahab yr kis line me a gye app",
      author: "rajeev from (welcome)"
    },
    {
      quote:
        "Choti bachhi ho kya samaj nhi aata ",
      author: "Tiger"
    },
    {
      quote:
        "ab itna kharcha ho hi gya h to ek chips ka packet bhi le lete h",
      author: "Bandiya"
    },
    {
      quote: "Are kabtak me tri galtiyo ka tokra mai apne sarr pr lr kar ghoomta  rahunga",
      author: "uday shetty"
    },
    {
      quote:
        "Jor Jor se bolkar sabko scheme bata de ",
      author: "Raju"
    },
    {
      quote:
        "Jaldi bol subhah panvel niklna h",
      author: "Vasuli bhai"
    }
  ];

function generator(){
     let random = Math.floor(Math.random() * quotes.length);
   

      document.getElementById('quote').textContent= quotes[random].quote;
    document.getElementById('quotee').textContent= quotes[random].author; 
}