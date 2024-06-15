export function getData(kinds, date, weather) {
    const month = date.getMonth();
    const data = [];
    for (const kind of kinds) {
        const hourIndex = getHourIndex(kind, date);
        const items = DATA[kind].filter(item => {
            const m = item.months[month] & item.times[hourIndex];
            const [ sunny, rainy, snowy ] = item.weather ?? [1, 1, 1];
            const w = { sunny, rainy, snowy }[weather];
            return m && w;
        });
        data.push(...items);
    }
    data.sort(sortByName);
    const ret = JSON.parse(JSON.stringify(data));
    return ret.map(item => ([
        item.name,
        item.sell,
        item.location ?? '',
        item.size ?? ''
    ]));
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
        location: '川',
        size: 'SS'
    }, {
        name: 'オイカワ',
        sell: 200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'SS'
    }, {
        name: 'フナ',
        sell: 160,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'ウグイ',
        sell: 240,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'M'
    }, {
        name: 'コイ',
        sell: 300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'L'
    }, {
        name: 'ニシキゴイ',
        sell: 4000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '池',
        size: 'L'
    }, {
        name: 'キンギョ',
        sell: 1300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'SS'
    }, {
        name: 'デメキン',
        sell: 1300,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '池',
        size: 'SS'
    }, {
        name: 'ランチュウ',
        sell: 4500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '池',
        size: 'S'
    }, {
        name: 'メダカ',
        sell: 300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'SS'
    }, {
        name: 'ザリガニ',
        sell: 200,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'S'
    }, {
        name: 'スッポン',
        sell: 3750,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'L'
    }, {
        name: 'カミツキガメ',
        sell: 5000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 0, 1],
        location: '川',
        size: 'L'
    }, {
        name: 'オタマジャクシ',
        sell: 100,
        months: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'SS'
    }, {
        name: 'カエル',
        sell: 120,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '池',
        size: 'S'
    }, {
        name: 'ドンコ',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'ドジョウ',
        sell: 400,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'ナマズ',
        sell: 800,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 0, 1, 1],
        location: '池',
        size: 'L'
    }, {
        name: 'ライギョ',
        sell: 5500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 0, 0],
        location: '池',
        size: 'L'
    }, {
        name: 'ブルーギル',
        sell: 180,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'S'
    }, {
        name: 'イエローパーチ',
        sell: 300,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'M'
    }, {
        name: 'ブラックバス',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'L'
    }, {
        name: 'ティラピア',
        sell: 800,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'M'
    }, {
        name: 'パイク',
        sell: 1800,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'LL'
    }, {
        name: 'ワカサギ',
        sell: 400,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'アユ',
        sell: 900,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '川',
        size: 'M'
    }, {
        name: 'ヤマメ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)',
        size: 'M'
    }, {
        name: 'オオイワナ',
        sell: 3800,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)',
        size: 'M'
    }, {
        name: 'ゴールデントラウト',
        sell: 15000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川(崖上)',
        size: 'M'
    }, {
        name: 'イトウ',
        sell: 15000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 0, 1, 1],
        location: '川(崖上)',
        size: 'LL'
    }, {
        name: 'サケ',
        sell: 700,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '河口',
        size: 'L'
    }, {
        name: 'キングサーモン',
        sell: 1800,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '河口',
        size: 'LL'
    }, {
        name: 'シャンハイガニ',
        sell: 2000,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'グッピー',
        sell: 1300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'SS'
    }, {
        name: 'ドクターフィッシュ',
        sell: 1500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'SS'
    }, {
        name: 'エンゼルフィッシュ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'ベタ',
        sell: 2500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'S'
    }, {
        name: 'ネオンテトラ',
        sell: 500,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'SS'
    }, {
        name: 'レインボーフィッシュ',
        sell: 800,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 0],
        location: '川',
        size: 'SS'
    }, {
        name: 'ピラニア',
        sell: 2500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 0, 1],
        location: '川',
        size: 'S'
    }, {
        name: 'アロワナ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'L'
    }, {
        name: 'ドラド',
        sell: 15000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 0],
        location: '川',
        size: 'LL'
    }, {
        name: 'ガー',
        sell: 6000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '池',
        size: 'LL'
    }, {
        name: 'ピラルク',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '川',
        size: 'LLL'
    }, {
        name: 'エンドリケリー',
        sell: 4000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 0, 1],
        location: '川',
        size: 'L'
    }, {
        name: 'チョウザメ',
        sell: 10000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '河口',
        size: 'LLL'
    }, {
        name: 'クリオネ',
        sell: 1000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'SS'
    }, {
        name: 'タツノオトシゴ',
        sell: 1100,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'SS'
    }, {
        name: 'クマノミ',
        sell: 650,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'SS'
    }, {
        name: 'ナンヨウハギ',
        sell: 1000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'S'
    }, {
        name: 'チョウチョウウオ',
        sell: 1000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'S'
    }, {
        name: 'ナポレオンフィッシュ',
        sell: 10000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 0],
        location: '海',
        size: 'LLL'
    }, {
        name: 'ミノカサゴ',
        sell: 500,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'フグ',
        sell: 5000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [0, 0, 0, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'ハリセンボン',
        sell: 250,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'アンチョビ',
        sell: 200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 0],
        location: '海',
        size: 'S'
    }, {
        name: 'アジ',
        sell: 150,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'S'
    }, {
        name: 'イシダイ',
        sell: 5000,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'スズキ',
        sell: 400,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'LL'
    }, {
        name: 'タイ',
        sell: 3000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'L'
    }, {
        name: 'カレイ',
        sell: 300,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'ヒラメ',
        sell: 800,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'LL'
    }, {
        name: 'イカ',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'M'
    }, {
        name: 'ウツボ',
        sell: 2000,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'U'
    }, {
        name: 'ハナヒゲウツボ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'U'
    }, {
        name: 'マグロ',
        sell: 7000,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        location: '海(桟橋)',
        size: 'LLL'
    }, {
        name: 'カジキ',
        sell: 10000,
        months: [1, 1, 1, 1, 10, 0, 1, 1, 1, 0, 1, 1],
        times: [1, 1, 1, 1],
        location: '海(桟橋)',
        size: 'LLL'
    }, {
        name: 'ロウニンアジ',
        sell: 4500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海(桟橋)',
        size: 'LL'
    }, {
        name: 'シイラ',
        sell: 6000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1],
        location: '海(桟橋)',
        size: 'LL'
    }, {
        name: 'マンボウ',
        sell: 4000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 0],
        location: '海',
        size: 'J'
    }, {
        name: 'エイ',
        sell: 3000,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 0],
        location: '海',
        size: 'LL'
    }, {
        name: 'ノコギリザメ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海',
        size: 'J'
    }, {
        name: 'シュモクザメ',
        sell: 8000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海',
        size: 'J'
    }, {
        name: 'サメ',
        sell: 15000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        location: '海',
        size: 'J'
    }, {
        name: 'ジンベエザメ',
        sell: 13000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'J'
    }, {
        name: 'コバンザメ',
        sell: 1500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'K'
    }, {
        name: 'チョウチンアンコウ',
        sell: 2500,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 0, 1, 1],
        location: '海',
        size: 'L'
    }, {
        name: 'リュウグウノツカイ',
        sell: 9000,
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        location: '海',
        size: 'LLL'
    }, {
        name: 'デメニギス',
        sell: 15000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 0, 0, 1],
        location: '海',
        size: 'S'
    }, {
        name: 'シーラカンス',
        sell: 15000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: '海',
        weather: [0, 1, 0],
        size: 'LLL'
    }, {
        name: 'あきカン',
        sell: 0,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: 'どこでも',
        size: 'S'
    }, {
        name: 'いし',
        sell: 0,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: 'どこでも',
        size: 'SS'
    }, {
        name: 'タイヤ',
        sell: 0,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: 'どこでも',
        size: 'L'
    }, {
        name: 'ながぐつ',
        sell: 0,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        location: 'どこでも',
        size: 'M'
    }],
    seabros: [{
        name: 'ワカメ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'L'
    }, {
        name: 'ウミブドウ',
        sell: 900,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'ナマコ',
        sell: 500,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        size: 'M'
    }, {
        name: 'センジュナマコ',
        sell: 10000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 0, 1, 1],
        size: 'S'
    }, {
        name: 'ヒトデ',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'ウニ',
        sell: 1700,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'パイプウニ',
        sell: 2000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        size: 'M'
    }, {
        name: 'イソギンチャク',
        sell: 500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'L'
    }, {
        name: 'ミズクラゲ',
        sell: 600,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'ウミウシ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'SS'
    }, {
        name: 'アコヤガイ',
        sell: 2800,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'ムールガイ',
        sell: 1500,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'オイスター',
        sell: 1100,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'ホタテ',
        sell: 1200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'M'
    }, {
        name: 'バイガイ',
        sell: 1000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'サザエ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'アワビ',
        sell: 2000,
        months: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        size: 'M'
    }, {
        name: 'オオシャコガイ',
        sell: 15000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'LL'
    }, {
        name: 'オウムガイ',
        sell: 1800,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 0, 1, 1],
        size: 'M'
    }, {
        name: 'タコ',
        sell: 1200,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'M'
    }, {
        name: 'メンダコ',
        sell: 6000,
        months: [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'コウモリダコ',
        sell: 10000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 0, 1, 1],
        size: 'M'
    }, {
        name: 'ホタルイカ',
        sell: 1400,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        times: [0, 0, 0, 1],
        size: 'SS'
    }, {
        name: 'ガザミ',
        sell: 2200,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        times: [1, 1, 1, 1],
        size: 'M'
    }, {
        name: 'ダンジネスクラブ',
        sell: 1900,
        months: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        size: 'M'
    }, {
        name: 'ズワイガニ',
        sell: 6000,
        months: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        size: 'L'
    }, {
        name: 'タラバガニ',
        sell: 8000,
        months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1],
        size: 'L'
    }, {
        name: 'フジツボ',
        sell: 600,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'SS'
    }, {
        name: 'タカアシガニ',
        sell: 12000,
        months: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'LL'
    }, {
        name: 'クルマエビ',
        sell: 3000,
        months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        size: 'S'
    }, {
        name: 'アマエビ',
        sell: 1400,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        size: 'S'
    }, {
        name: 'シャコ',
        sell: 2500,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 0, 1, 1],
        size: 'S'
    }, {
        name: 'イセエビ',
        sell: 5000,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [0, 0, 0, 1],
        size: 'L'
    }, {
        name: 'ロブスター',
        sell: 4500,
        months: [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        times: [1, 1, 1, 1],
        size: 'L'
    }, {
        name: 'ダイオウグソクムシ',
        sell: 12000,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        times: [0, 1, 0, 1],
        size: 'M'
    }, {
        name: 'カブトガニ',
        sell: 2500,
        months: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 0, 1],
        size: 'M'
    }, {
        name: 'ホヤ',
        sell: 1500,
        months: [0, 0, 0, 1, 1, 11, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1],
        size: 'S'
    }, {
        name: 'チンアナゴ',
        sell: 1100,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 0],
        size: 'S'
    }, {
        name: 'ヒラムシ',
        sell: 700,
        months: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        times: [1, 0, 1, 1],
        size: 'SS'
    }, {
        name: 'カイロウドウケツ',
        sell: 5000,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        times: [1, 1, 1, 1],
        size: 'M'
    }],
    bugs: [{
        name: 'モンシロチョウ',
        sell: 160,
        months: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'モンキチョウ',
        sell: 160,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'アゲハチョウ',
        sell: 240,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'カラスアゲハ',
        sell: 2500,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'アオスジアゲハ',
        sell: 300,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'オオゴマダラ',
        sell: 1000,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [0, 0, 1, 1, 1, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'オオムラサキ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [0, 1, 1, 1, 1, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'オオカバマダラ',
        sell: 140,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [0, 1, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'モルフォチョウ',
        sell: 4000,
        months: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        times: [1, 1, 0, 0, 1, 1],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'ミイロタテハ',
        sell: 3000,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'アカエリトリバネアゲハ',
        sell: 2500,
        months: [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'アレキサンドラトリバネアゲハ',
        sell: 4000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [0, 0, 1, 0, 0, 0],
        location: '花',
        weather: [1, 0, 1]
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
        location: '160',
        weather: [1, 0, 1]
    }, {
        name: 'コオロギ',
        sell: 130,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '草地など',
        weather: [1, 0, 1]
    }, {
        name: 'スズムシ',
        sell: 430,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        times: [1, 1, 0, 0, 1, 1],
        location: '草地など',
        weather: [1, 0, 1]
    }, {
        name: 'カマキリ',
        sell: 430,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'ハナカマキリ',
        sell: 2400,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'ミツバチ',
        sell: 200,
        months: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
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
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'ギンヤンマ',
        sell: 230,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'オニヤンマ',
        sell: 4500,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'イトトンボ',
        sell: 500,
        months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '空中',
        weather: [1, 0, 1]
    }, {
        name: 'ホタル',
        sell: 300,
        months: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        times: [1, 0, 0, 0, 0, 1],
        location: '空中',
        weather: [1, 0, 1]
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
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'ジンメンカメムシ',
        sell: 1000,
        months: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 0, 0, 0, 1],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'テントウムシ',
        sell: 200,
        months: [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        times: [0, 0, 1, 1, 0, 0],
        location: '花',
        weather: [1, 0, 1]
    }, {
        name: 'ハンミョウ',
        sell: 1500,
        months: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '草地など',
        weather: [1, 0, 1]
    }, {
        name: 'タマムシ',
        sell: 2400,
        months: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株',
        weather: [1, 0, 1]
    }, {
        name: 'バイオリンムシ',
        sell: 450,
        months: [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株',
        weather: [1, 0, 1]
    }, {
        name: 'ゴマダラカミキリ',
        sell: 350,
        months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株',
        weather: [1, 0, 1]
    }, {
        name: 'ルリボシカミキリ',
        sell: 3000,
        months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        times: [1, 1, 1, 1, 1, 1],
        location: '切り株',
        weather: [1, 0, 1]
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
        location: '空中',
        weather: [1, 0, 1]
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
        location: '岩・低木',
        weather: [0, 1, 0]
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