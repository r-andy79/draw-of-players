// const people = ['Radek ', ' Darek K', 'Darek Kr ', 'Grzesiek ', ' Piotr', ' Janusz', 'Dawid', 'Filip', 'Kajtek', 'Ela'];

const playersList = document.querySelector('.players-list');
const formEl = document.querySelector('form');
const inputEl = document.querySelector('.name');
const messageEl = document.querySelector('.message');

// String conversion to array
const stringToArr = str => str.split(',');

// Removing trailing spaces
const trimmed = arr => arr.map(el => el.trim());

// Checking if array contains even elements number
const checkIfEven = arr => arr.length % 2 === 0;

// Generating random integer in range of array length
const randInt = (arr) => {
  return Math.floor(Math.random()*arr.length)
}

// Creating an array using indexes generated by randInt
const createRandomArr = (arr) => {
  const newArr = [];
  while(arr.length > 0) {
    let index = randInt(arr);
    const person = arr.splice(index, 1).toString();
    newArr.push(person);
  }
  return newArr;
};

// Creating array of arrays containing pairs
const createPairs = (arr) => {
  let pairs = [];
  const chunk = 2;
  for(let i=0; i < arr.length; i += chunk) {
    pairs.push(arr.slice(i, i + chunk));
  }
  return pairs;
}

const render = (arr, parent) => {
  arr.forEach(el => {
    const listItem = document.createElement('li');
    listItem.textContent = el;
    parent.appendChild(listItem);
  })
}




formEl.addEventListener('submit', event => {
  event.preventDefault();
  messageEl.textContent = "";
  const str = inputEl.value;
  console.log(str);
  const strArr = stringToArr(str);
  const trimmedArr = trimmed(strArr);
  const checkEven = checkIfEven(trimmedArr);
  if(!checkEven) {
    messageEl.textContent = "Podano nieparzystą liczbę osób, dodaj kogoś jeszcze."
    return;
  }
  inputEl.value = "";
  const randomArr = createRandomArr(trimmedArr);
  const players = createPairs(randomArr);
  players.forEach(pair => {
    const liEl = document.createElement('li');
    liEl.textContent = `${pair[0]} : ${pair[1]}`;
    playersList.appendChild(liEl);
  });
})