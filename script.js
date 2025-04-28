const quotes = [
    { text: "Life isn't about getting and having, it's about giving and being.", author: "Kevin Kruse" },
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" }
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Function to display the quote
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = '"' + quote.text + '"';
    document.getElementById('author').textContent = '- ' + quote.author;
    document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" - ' + quote.author)}`;
  }
  
  // Event Listener for new quote button
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  
  // Display a quote on first load
  window.onload = displayQuote;
  