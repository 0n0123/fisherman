import { getAll, getAllOfNow } from "./data.js";

const kindRadios = Array.from(document.getElementsByName('kind'));
const nowCheckbox = document.getElementById('now');
const gridElm = document.getElementById('grid');
const grid = new gridjs.Grid({
    columns: ['名前', '値段', '場所'],
    data: [],
    fixedHeader: true,
    height: gridElm.clientHeight + 'px',
    sort: true
}).render(gridElm);

kindRadios.forEach(el => el.onchange = _ => showItems());
nowCheckbox.onchange = _ => showItems();

function getSelectedKind() {
    return kindRadios.find(el => el.checked)?.value ?? 'fishes';
}

function getData() {
    const kind = getSelectedKind();
    const items = nowCheckbox.checked ? getAllOfNow(kind) : getAll(kind);
    return items.map(item => [item.name, item.sell, item.location ?? '']);
}

function showItems() {
    grid.updateConfig({
        data: getData()
    }).forceRender();
}

showItems();
