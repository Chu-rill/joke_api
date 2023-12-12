let display1 = document.querySelector('h1')
let display2 = document.querySelector('h2')
let btn = document.querySelector('button')
   function getData(){
    fetch(`https://v2.jokeapi.dev/joke/Any`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      display1.innerText = data.setup
      display2.innerText = data.delivery
    })
   }

   btn.addEventListener('click',getData)
      // let btn = document.querySelector("button");
      // let jokesDisplay = document.querySelector("#jokes");
      
      // function getJokes(count = 5) {
      //   fetch(`https://v2.jokeapi.dev/joke/Any/${count}`)
      //     .then(response => response.json())
      //     .then(data => {
      //       if (data.error) {
      //         console.error('Error fetching jokes:', data.error);
      //         return;
      //       }
      
      //       // Filter out two-part jokes
      //       const filteredJokes = data.jokes.filter(joke => joke.type !== 'twopart');
      
      //       // Display the non-two-part jokes
      //       jokesDisplay.innerHTML = '';
      
      //       for (let joke of filteredJokes) {
      //         const jokeText = joke.type === 'twopart'
      //           ? `${joke.setup} ${joke.delivery}`
      //           : joke.joke;
      
      //         const jokeElement = document.createElement('p');
      //         jokeElement.innerText = jokeText;
      //         jokesDisplay.appendChild(j
      