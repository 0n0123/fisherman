import { getAll, getAllOfNow } from "./data.js";

const kindRadios = new class {
    elms = Array.from(document.getElementsByName('kind'));
    constructor() {
        this.elms.forEach(el => el.onchange = _ => showItems());
    }
    getSelected() {
        return this.elms.find(el => el.checked)?.value ?? 'fishes';
    }
}();

const timeLabel = new class {
    elm = document.getElementById('time');
    #pad2(n) {
        return String(n).padStart(2, '0');
    }
    showTime() {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = this.#pad2(date.getHours());
        const minute = this.#pad2(date.getMinutes());
        const time = `🗓${month}/${day} ⏰${hour}:${minute}`;
        this.elm.textContent = time;
    }
}();

const weatherRadios = new class {
    elms = Array.from(document.getElementsByName('weather'));
    constructor() {
        this.elms.forEach(el => el.onchange = _ => showItems());
    }
    getSelected() {
        return this.elms.find(el => el.checked)?.value ?? 'sunny';
    }
    enable() {
        this.elms.forEach(el => el.disabled = false);
    }
    disable() {
        this.elms.forEach(el => el.disabled = true);
    }
}();

const nowCheckbox = new class {
    elm = document.getElementById('now');
    constructor() {
        this.elm.onchange = _ => {
            if (nowCheckbox.checked) {
                weatherRadios.enable();
            } else {
                weatherRadios.disable();
            }
            showItems();
        };
    }
    isChecked() {
        return this.elm.checked;
    }
}();

const table = new class {
    elm = document.getElementById('grid');
    grid;
    constructor() {
        this.grid = new gridjs.Grid({
            columns: ['名前', '値段', '場所'],
            data: [],
            fixedHeader: true,
            height: this.elm.clientHeight + 'px',
            sort: true
        }).render(this.elm);
    }
    show(data) {
        this.grid.updateConfig({ data }).forceRender();
    }
}

function getData() {
    const kind = kindRadios.getSelected();
    const weather = weatherRadios.getSelected();
    const items = nowCheckbox.isChecked() ? getAllOfNow(kind, weather) : getAll(kind);
    return items.map(item => [item.name, item.sell, item.location ?? '']);
}

let showHour;

function showItems() {
    showHour = new Date().getHours();
    const data = getData();
    table.show(data);
}

showItems();

setInterval(() => {
    timeLabel.showTime();
    if (!nowCheckbox.isChecked()) {
        return;    
    }
    const hours = new Date().getHours();
    if (hours !== showHour) {
        showItems();
    }
}, 1000);
