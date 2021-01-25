const btnAdd = document.querySelector(`.add`);
const clean = document.querySelector(`.clean`);
const showAdvice = document.querySelector(`.showAdvice`);
const showOptions = document.querySelector(`.showOptions`);
const input = document.querySelector(`input`);
const arr = [];

clean.addEventListener(`click`, (e) => {
  e.preventDefault();
  arr.length = 0;
  alert(`you cleared advices`);
});

btnAdd.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (input.value == "") {
    alert(`WRONG`);
  } else {
    arr.push(input.value);
    alert(`dodales ${input.value}`);
  }
});

showAdvice.addEventListener(`click`, (e) => {
  const randomOfarr = Math.floor(Math.random() * arr.length);
  document.querySelector(`h1`).textContent = `${arr[randomOfarr]}`;
});

showOptions.addEventListener(`click`, (e) => {
  alert(`you options are ${arr}`);
});
