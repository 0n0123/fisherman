export function getAll(kind) {
    const data = DATA[kind];
    const items = JSON.parse(JSON.stringify(data));
    items.sort(sortByName);
    return items;
}

export function getAllOfNow(kind) {
    const now = new Date();
    const month = now.getMonth();
    const hourIndex = getHourIndex(kind, now);
    const data = DATA[kind];
    const items = data.filter(item => item.months[month] & item.times[hourIndex]);
    items.sort(sortByName);
    return JSON.parse(JSON.stringify(items));
}

function sortByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (b.name < a.name) {
        return 1;
    }
    return 0;
}

function getHourIndex(kind, now) {
    const hours = now.getHours();
    return APPEARANCE_HOURS[kind].findIndex(h => h.includes(hours));
}

const HOURS4 = [
    [4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 0, 1, 2, 3]
];
const HOURS6 = [
    [23, 0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16],
    [17, 18],
    [19, 20, 21, 22]
];
const APPEARANCE_HOURS = {
    fishes: HOURS4,
    seabros: HOURS4,
    bugs: HOURS6
};

const DATA = {
    fishes: [{
        name: 'タナゴ',
        sell: 900,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'オイカワ',
        sell: 200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'フナ',
        sell: 160,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ウグイ',
        sell: 240,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'コイ',
        sell: 300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'ニシキゴイ',
        sell: 4000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '池'
    }, {
        name: 'キンギョ',
        sell: 1300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'デメキン',
        sell: 1300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '池'
    }, {
        name: 'ランチュウ',
        sell: 4500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '池'
    }, {
        name: 'メダカ',
        sell: 300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'ザリガニ',
        sell: 200,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'スッポン',
        sell: 3750,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'カミツキガメ',
        sell: 5000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 0, 1],
        location: '川'
    }, {
        name: 'オタマジャクシ',
        sell: 100,
        months: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'カエル',
        sell: 120,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池'
    }, {
        name: 'ドンコ',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'ドジョウ',
        sell: 400,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ナマズ',
        sell: 800,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 0, 1, 1],
        location: '池'
    }, {
        name: 'ライギョ',
        sell: 5500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 0, 0],
        location: '池'
    }, {
        name: 'ブルーギル',
        sell: 180,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'イエローパーチ',
        sell: 300,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ブラックバス',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ティラピア',
        sell: 800,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'パイク',
        sell: 1800,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ワカサギ',
        sell: 400,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'アユ',
        sell: 900,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '川'
    }, {
        name: 'ヤマメ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)'
    }, {
        name: 'オオイワナ',
        sell: 3800,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)'
    }, {
        name: 'ゴールデントラウト',
        sell: 15000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)'
    }, {
        name: 'イトウ',
        sell: 15000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 0, 1, 1],
        location: '川(崖上)'
    }, {
        name: 'サケ',
        sell: 700,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '河口'
    }, {
        name: 'キングサーモン',
        sell: 1800,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '河口'
    }, {
        name: 'シャンハイガニ',
        sell: 2000,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'グッピー',
        sell: 1300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'ドクターフィッシュ',
        sell: 1500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'エンゼルフィッシュ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'ベタ',
        sell: 2500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'ネオンテトラ',
        sell: 500,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'レインボーフィッシュ',
        sell: 800,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 0],
        location: '川'
    }, {
        name: 'ピラニア',
        sell: 2500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 0, 1],
        location: '川'
    }, {
        name: 'アロワナ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'ドラド',
        sell: 15000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 0],
        location: '川'
    }, {
        name: 'ガー',
        sell: 6000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '池'
    }, {
        name: 'ピラルク',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川'
    }, {
        name: 'エンドリケリー',
        sell: 4000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 0, 1],
        location: '川'
    }, {
        name: 'チョウザメ',
        sell: 10000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '河口'
    }, {
        name: 'クリオネ',
        sell: 1000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'タツノオトシゴ',
        sell: 1100,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'クマノミ',
        sell: 650,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'ナンヨウハギ',
        sell: 1000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'チョウチョウウオ',
        sell: 1000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'ナポレオンフィッシュ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 0],
        location: '海'
    }, {
        name: 'ミノカサゴ',
        sell: 500,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'フグ',
        sell: 5000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [0, 0, 0, 1],
        location: '海'
    }, {
        name: 'ハリセンボン',
        sell: 250,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'アンチョビ',
        sell: 200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 0],
        location: '海'
    }, {
        name: 'アジ',
        sell: 150,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'イシダイ',
        sell: 5000,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'スズキ',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'タイ',
        sell: 3000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'カレイ',
        sell: 300,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'ヒラメ',
        sell: 800,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'イカ',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'ウツボ',
        sell: 2000,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'ハナヒゲウツボ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'マグロ',
        sell: 7000,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        location: '海(桟橋)'
    }, {
        name: 'カジキ',
        sell: 10000,
        months: [1, 1, 1, 1, 10, 0, 1, 1, 1, 0, 1, 1],
        times: [1, 1, 1, 1],
        location: '海(桟橋)'
    }, {
        name: 'ロウニンアジ',
        sell: 4500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海(桟橋)'
    }, {
        name: 'シイラ',
        sell: 6000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海(桟橋)'
    }, {
        name: 'マンボウ',
        sell: 4000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 0]
    }, {
        name: 'エイ',
        sell: 3000,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 0],
        location: '海'
    }, {
        name: 'ノコギリザメ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海'
    }, {
        name: 'シュモクザメ',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海'
    }, {
        name: 'サメ',
        sell: 15000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海'
    }, {
        name: 'ジンベエザメ',
        sell: 13000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'コバンザメ',
        sell: 1500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'チョウチンアンコウ',
        sell: 2500,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 0, 1, 1],
        location: '海'
    }, {
        name: 'リュウグウノツカイ',
        sell: 9000,
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }, {
        name: 'デメニギス',
        sell: 15000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 0, 0, 1],
        location: '海'
    }, {
        name: 'シーラカンス',
        sell: 15000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海'
    }],
    seabros: [{
        name: 'ワカメ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ウミブドウ',
        sell: 900,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'ナマコ',
        sell: 500,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'センジュナマコ',
        sell: 10000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 0, 1, 1]
    }, {
        name: 'ヒトデ',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ウニ',
        sell: 1700,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'パイプウニ',
        sell: 2000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1]
    }, {
        name: 'イソギンチャク',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ミズクラゲ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'ウミウシ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'アコヤガイ',
        sell: 2800,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ムールガイ',
        sell: 1500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'オイスター',
        sell: 1100,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ホタテ',
        sell: 1200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'バイガイ',
        sell: 1000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'サザエ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'アワビ',
        sell: 2000,
        months: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1]
    }, {
        name: 'オオシャコガイ',
        sell: 15000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'オウムガイ',
        sell: 1800,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1]
    }, {
        name: 'タコ',
        sell: 1200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'メンダコ',
        sell: 6000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'コウモリダコ',
        sell: 10000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 0, 1, 1]
    }, {
        name: 'ホタルイカ',
        sell: 1400,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        times: [0, 0, 0, 1]
    }, {
        name: 'ガザミ',
        sell: 2200,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'ダンジネスクラブ',
        sell: 1900,
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ズワイガニ',
        sell: 6000,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'タラバガニ',
        sell: 8000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'フジツボ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'タカアシガニ',
        sell: 12000,
        months: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'クルマエビ',
        sell: 3000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1]
    }, {
        name: 'アマエビ',
        sell: 1400,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 0, 1, 1]
    }, {
        name: 'シャコ',
        sell: 2500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1]
    }, {
        name: 'イセエビ',
        sell: 5000,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [0, 0, 0, 1]
    }, {
        name: 'ロブスター',
        sell: 4500,
        months: [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1]
    }, {
        name: 'ダイオウグソクムシ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 1]
    }, {
        name: 'カブトガニ',
        sell: 2500,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 0, 1]
    }, {
        name: 'ホヤ',
        sell: 1500,
        months: [0, 0, 0, 1, 1, 11, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1]
    }, {
        name: 'チンアナゴ',
        sell: 1100,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 0]
    }, {
        name: 'ヒラムシ',
        sell: 700,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1]
    }, {
        name: 'カイロウドウケツ',
        sell: 5000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1]
    }],
    bugs: [{
        name: 'モンシロチョウ',
        sell: 160,
        months: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中'
    }, {
        name: 'モンキチョウ',
        sell: 160,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中'
    }, {
        name: 'アゲハチョウ',
        sell: 240,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中'
    }, {
        name: 'カラスアゲハ',
        sell: 2500,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '花'
    }, {
        name: 'アオスジアゲハ',
        sell: 300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中'
    }, {
        name: 'オオゴマダラ',
        sell: 1000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 0, 1, 1, 1, 0],
        location: '花'
    }, {
        name: 'オオムラサキ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '花'
    }, {
        name: 'オオカバマダラ',
        sell: 140,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [0, 1, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'モルフォチョウ',
        sell: 4000,
        months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        times: [1, 1, 0, 0, 1, 1],
        location: '花'
    }, {
        name: 'ミイロタテハ',
        sell: 3000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'アカエリトリバネアゲハ',
        sell: 2500,
        months: [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'アレキサンドラトリバネアゲハ',
        sell: 4000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 0, 0, 0],
        location: '花'
    }, {
        name: 'ガ',
        sell: 130,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 0, 0, 0, 1],
        location: '家'
    }, {
        name: 'ヨナグニサン',
        sell: 3000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 0, 0, 0, 1],
        location: '木'
    }, {
        name: 'ニシキオオツバメガ',
        sell: 2500,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 0, 0, 0],
        location: '花'
    }, {
        name: 'ショウリョウバッタ',
        sell: 200,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '草地など'
    }, {
        name: 'トノサマバッタ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '草地など'
    }, {
        name: 'イナゴ',
        sell: 400,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '草地など'
    }, {
        name: 'キリギリス',
        sell: 160,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '160'
    }, {
        name: 'コオロギ',
        sell: 130,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '草地など'
    }, {
        name: 'スズムシ',
        sell: 430,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '草地など'
    }, {
        name: 'カマキリ',
        sell: 430,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'ハナカマキリ',
        sell: 2400,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'ミツバチ',
        sell: 200,
        months: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'ハチ',
        sell: 2500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'アブラゼミ',
        sell: 250,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '木'
    }, {
        name: 'ミンミンゼミ',
        sell: 300,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '木'
    }, {
        name: 'クマゼミ',
        sell: 500,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '木'
    }, {
        name: 'ツクツクホウシ',
        sell: 400,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '木'
    }, {
        name: 'ヒグラシ',
        sell: 550,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 0, 1, 1, 0],
        location: '木'
    }, {
        name: 'セミのぬけがら',
        sell: 10,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'アキアカネ',
        sell: 180,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '空中'
    }, {
        name: 'ギンヤンマ',
        sell: 230,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '空中'
    }, {
        name: 'オニヤンマ',
        sell: 4500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '空中'
    }, {
        name: 'イトトンボ',
        sell: 500,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '空中'
    }, {
        name: 'ホタル',
        sell: 300,
        months: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        times: [1, 0, 0, 0, 0, 1],
        location: '空中'
    }, {
        name: 'オケラ',
        sell: 500,
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '地中'
    }, {
        name: 'アメンボ',
        sell: 130,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '水面'
    }, {
        name: 'ゲンゴロウ',
        sell: 800,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 1, 0],
        location: '水面'
    }, {
        name: 'タガメ',
        sell: 2000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 0, 0, 0, 1],
        location: '水面'
    }, {
        name: 'カメムシ',
        sell: 120,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '花'
    }, {
        name: 'ジンメンカメムシ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 0, 0, 0, 1],
        location: '花'
    }, {
        name: 'テントウムシ',
        sell: 200,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花'
    }, {
        name: 'ハンミョウ',
        sell: 1500,
        months: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '草地など'
    }, {
        name: 'タマムシ',
        sell: 2400,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株'
    }, {
        name: 'バイオリンムシ',
        sell: 450,
        months: [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株'
    }, {
        name: 'ゴマダラカミキリ',
        sell: 350,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株'
    }, {
        name: 'ルリボシカミキリ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株'
    }, {
        name: 'ホウセキゾウムシ',
        sell: 800,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'フンコロガシ',
        sell: 3000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '雪玉'
    }, {
        name: 'オオセンチコガネ',
        sell: 300,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '草地など'
    }, {
        name: 'プラチナコガネ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 0, 0],
        location: '木'
    }, {
        name: 'カナブン',
        sell: 200,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'ゴライアスオオツノハナムグリ',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'ノコギリクワガタ',
        sell: 2000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'ミヤマクワガタ',
        sell: 1000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'オオクワガタ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 0, 0],
        location: '木'
    }, {
        name: 'ニジイロクワガタ',
        sell: 6000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 0, 0, 0, 1],
        location: '木'
    }, {
        name: 'ホソアカクワガタ',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'オウゴンオニクワガタ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'ギラファノコギリクワガタ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'カブトムシ',
        sell: 1350,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'コーカサスオオカブト',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'ゾウカブト',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'ヘラクレスオオカブト',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '木'
    }, {
        name: 'ナナフシ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        times: [0, 1, 0, 0, 1, 0],
        location: '木'
    }, {
        name: 'コノハムシ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '木の下'
    }, {
        name: 'ミノムシ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '木'
    }, {
        name: 'アリ',
        sell: 80,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: 'くさったカブ'
    }, {
        name: 'ヤドカリ',
        sell: 1000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 0, 0, 0, 1],
        location: '砂浜'
    }, {
        name: 'フナムシ',
        sell: 200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '岩場'
    }, {
        name: 'ハエ',
        sell: 60,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: 'ゴミ'
    }, {
        name: 'カ',
        sell: 130,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 0, 0, 1, 1],
        location: '空中'
    }, {
        name: 'ノミ',
        sell: 70,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '住民'
    }, {
        name: 'カタツムリ',
        sell: 250,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '岩・低木'
    }, {
        name: 'ダンゴムシ',
        sell: 250,
        months: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 0, 0, 0],
        location: '岩'
    }, {
        name: 'ムカデ',
        sell: 300,
        months: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        times: [0, 0, 0, 1, 1, 1],
        location: '岩'
    }, {
        name: 'クモ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 0, 0, 0, 1],
        location: '木'
    }, {
        name: 'タランチュラ',
        sell: 8000,
        months: [],
        times: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        location: '草地など'
    }, {
        name: 'サソリ',
        sell: 8000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 0, 0, 0, 0, 1],
        location: '草地など'
    }]
};