const dogs = [
  { 
    name: 'Snickers', 
    age: 2 
  }, 
  { 
    name: 'hugo', 
    age: 8 
  }
];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello');

  // Interpolated
  console.log('hello i am a %s string', 'whatever');

  // Styled
  console.log('%c i am some great text', 'font-size: 50px; background:pink; color: white');

  // warning!
  console.warn('oh nuuuu');
  // Error :|
  console.error('errorrrrrr');
  // Info
  console.info('crocodiles eat 3-4 people per year')
  
  // Testing
  console.assert(1 === 1, 'that is wrong'); //nothing will happen if its true
  console.assert(1 === 0, 'that is wrong'); //it will show an assert if its false

  const p = document.querySelector('p');
  console.assert(p.classList.contains('ouch'), 'that is wrong');
  
  // clearing
  console.clear();

  // Viewing DOM Elements
  console.log(p); //shows the actual element itself
  console.dir(p); //this allows you to open it up and see all the properties and methods that lives on that element

  // Grouping together
  dogs.forEach(dog => {
    // console.groupCollapsed(`${dog.name}`)
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`)
  })

  // counting
  console.count('wes');
  console.count('wes');
  console.count('steve');
  console.count('wes');

  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/wesbos')
    .then(resp => resp.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    })

  // table
  console.table(dogs);