import { getData } from "./data.js";

const kindChecks = new class {
    elms = Array.from(document.getElementsByName('kind'));
    constructor() {
        this.elms.forEach(el => el.onchange = _ => showItems());
    }
    getSelected() {
        return this.elms.filter(el => el.checked).map(el => el.value);
    }
}();

const datetime = new class {
    /** @type {HTMLSelectElement} */
    month = document.getElementById('month');
    time = document.getElementById('time');
    constructor() {
        this.month.onchange = () => this.#onChange();
        this.time.onchange = () => this.#onChange();
    }
    #onChange() {
        showItems();
    }
    enable() {
        this.month.disabled = false;
        this.time.disabled = false;
    }
    disable() {
        this.month.disabled = true;
        this.time.disabled = true;
    }
    #pad2(n) {
        return String(n).padStart(2, '0');
    }
    setNow() {
        const date = new Date();
        const month = date.getMonth();
        this.month.selectedIndex = month;
        const hour = this.#pad2(date.getHours());
        const minute = this.#pad2(date.getMinutes());
        this.time.value = `${hour}:${minute}`;
    }
    get() {
        const date = new Date();
        const year = date.getFullYear();
        const month = this.#pad2(parseInt(this.month.selectedOptions[0].value) + 1);
        const time = this.time.value;
        return new Date(`${year}-${month}-01 ${time}`);
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
}();

const nowCheckbox = new class {
    elm = document.getElementById('now');

    constructor() {
        this.elm.onchange = _ => {
            if (this.elm.checked) {
                datetime.disable();
                datetime.setNow();
            } else {
                datetime.enable();
            }
            showItems();
        };
    }
    isChecked() {
        return this.elm.checked;
    }
    uncheck() {
        this.elm.checked = false;
    }
}();

const table = new class {
    elm = document.getElementById('grid');
    grid;
    constructor() {
        this.grid = new gridjs.Grid({
            columns: [{
                name: '名前',
                width: '30%'
            }, {
                name: '値段',
                width: '15%'
            }, {
                name: '場所',
                width: '20%'
            }, {
                name: 'サイズ',
                width: '15%'
            }],
            data: [],
            fixedHeader: true,
            height: this.elm.clientHeight + 'px',
            sort: true,
            style: {
                td: {
                    padding: '.8rem'
                }
            }
        }).render(this.elm);
    }
    show(data) {
        this.grid.updateConfig({ data }).forceRender();
    }
}

let showHour;

function showItems() {
    const kinds = kindChecks.getSelected();
    const date = datetime.get();
    const weather = weatherRadios.getSelected();
    const items = getData(kinds, date, weather);
    table.show(items);
}

showItems();

setInterval(() => {
    if (!nowCheckbox.isChecked()) {
        return;
    }
    datetime.setNow();
    const hours = new Date().getHours();
    if (hours !== showHour) {
        showHour = hours;
        showItems();
    }
}, 1000);
