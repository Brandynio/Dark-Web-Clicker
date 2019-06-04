let clickerData = {
    playerBalance: 0,
    playerClickWorth: 1,
    playerBitcoinPerSec: 0,
    clickerItemPrices: {
        torBrowserPrice: 15,
        adBlockerPrice: 100, 
        antiVirusPrice: 1100,
        counterHackPrice: 12000,
        motionSensorPrice: 130000,
        alarmSystemPrice: 1400000,
        policeScannerPrice: 20000000
    },
    currentPrices: {
        curTorBrowserPrice: 15,
        curAdBlockerPrice: 100, 
        curAntiVirusPrice: 1100,
        curCounterHackPrice: 12000,
        curMotionSensorPrice: 130000,
        curAlarmSystemPrice: 1400000,
        curPoliceScannerPrice: 20000000
    },
    playerTorBrowsers: 0,
    playerAdBlockers: 0,
    playerAntiViruss: 0,
    playerCounterHacks: 0,
    playerMotionSensors: 0,
    playerAlarmSystems: 0,
    playerPoliceScanners: 0
}

let buy0 = document.getElementById('torBrowswer');
let buy1 = document.getElementById("adBlocker");
let buy2 = document.getElementById('antiVirus');
let buy3 = document.getElementById('counterHack');
let buy4 = document.getElementById('motionSensor');
let buy5 = document.getElementById('alarmSystem');
let buy6 = document.getElementById('policeScanner');
let balance = document.getElementById('balance');

const buyBtns = {
    buy0,
    buy1,
    buy2,
    buy3,
    buy4,
    buy5,
    buy6
}

const TOTAL_BTNS = 7;

const currencyLoop = () => {
    let profit = 0;
    profit += (clickerData.playerTorBrowsers * 0.1);
    profit += (clickerData.playerAdBlockers * 1);
    profit += (clickerData.playerAntiViruses * 8);
    profit += (clickerData.playerCounterHacks * 47);
    profit += (clickerData.playerMotionSensors * 260);
    profit += (clickerData.playerAlarmSystems * 1400);
    profit += (clickerData.playerPoliceScanners * 7800);
    clickerData.playerBalance += profit;
    console.log(clickerData.playerBalance);
    balance.innerHTML = "Bitcoin: " + clickerData.playerBalance;
}

const btnSetup = () => {
    for (let i = 0; i < TOTAL_BTNS; i++) {
        let 
        buyBtns
    }
}

const buyClick = item => {
    let clickedPrice = clickerData.clickerItemPrices[item+"Price"];
    let clickedItem = item.charAt(0).toUpperCase() + item.slice(1);
    if (clickerData.balance >= clickedPrice) {
        clickerData["player"+clickedItem+"s"] += 1;
        clickerData["cur"+clickedItem+"Price"] = (clickedPrice * (1.15 * clickerData["player"+clickedItem+"s"]));
        document.getElementById(item+"Price").innerHTML = clickerData["cur"+clickedItem+"Price"];
    }
}

const addClickWorthToBalance = () => {
    clickerData.playerBalance += clickerData.playerClickWorth;
    balance.innerHTML = "Bitcoin: " + clickerData.playerBalance;    
};

window.onbeforeunload = () => {
    localStorage.setItem('clickerData', JSON.stringify(clickerData));
}

window.onload = () => {
    clickerData = JSON.parse(localStorage.getItem('clickerData'));
    console.log(clickerData);
}

document.getElementById("clickBtn").addEventListener('click', addClickWorthToBalance);


let currencyInterval = setInterval(currencyLoop, 1000);