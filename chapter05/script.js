'use strict';

console.log('Hello World!!');

const animalList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];
const ul = document.getElementById('list');
for (let animal of animalList) {
    const li = document.createElement('li');
    li.textContent = animal
    ul.appendChild(li);
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8];
const ul2 = document.getElementById('list2');
for (const num of numList) {
    if (num % 2 ==0) {
        const li = document.createElement('li');
        li.textContent = 'No.' + num;
        ul2.appendChild(li);
    }
}

const numList2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const evenList = numList2.filter((num2) => num2 % 2 == 0).map((even) => 'No.' + even);
const ul3 = document.getElementById('list3');
for (const num2 of evenList) {
    const li = document.createElement('li');
    li.textContent = num2;
    ul3.appendChild(li);
}