import { getAll, getAllOfNow } from "./data.js";

const nowCheckbox = document.getElementById('now');
nowCheckbox.onchange = _ => showFishes();
const leftSelect = document.getElementById('left');
/** @type {HTMLSelectElement} */
const rightSelect = document.getElementById('right');

function showFishes() {
    leftSelect.innerHTML = '';

    const fishes = nowCheckbox.checked ? getAllOfNow() : getAll();

    for (const fish of fishes) {
        leftSelect.insertAdjacentHTML('beforeend', createFishRow(fish));
    }
}

function createFishRow(fish) {
    return `<div class="fish"><label><input type="checkbox" data-name="${fish.name}" value="${fish.sell}">${fish.name}&nbsp;[${fish.sell}]</label></div>`;
}

const addButton = document.getElementById('add');
const delButton = document.getElementById('del');

addButton.onclick = _ => {
    const selected = Array.from(leftSelect.getElementsByTagName('input'))
        .filter(input => input.checked);
    for (const opt of selected) {
        rightSelect.insertAdjacentHTML('afterbegin', `<option value="${opt.value}">${opt.dataset.name}</option>`);
        opt.checked = false;
    }
    showAmount();
};

delButton.onclick = _ => {
    rightSelect.innerHTML = '';
    showAmount();
};

const bellLabel = document.getElementById('bell');
const justinLabel = document.getElementById('justin');

function showAmount() {
    const values = Array.from(rightSelect.options).map(opt => parseInt(opt.value));
    const total = values.reduce((p, c) => p += c, 0);
    const justin = total * 1.5;
    bellLabel.textContent = total;
    justinLabel.textContent = justin;
}

showFishes();
