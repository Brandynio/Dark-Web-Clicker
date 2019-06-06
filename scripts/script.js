let clickerData = {
    playerBalance: 0,
    playerClickWorth: 1,
    playerBitcoinPerSec: 0,
    clickerItemPrices: {
        TorBrowserPrice: 15,
        AdBlockerPrice: 100, 
        AntiVirusPrice: 1100,
        CounterHackPrice: 12000,
        MotionSensorPrice: 130000,
        AlarmSystemPrice: 1400000,
        PoliceScannerPrice: 20000000
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

let buy0 = document.getElementById('TorBrowser');
let buy1 = document.getElementById("AdBlocker");
let buy2 = document.getElementById('AntiVirus');
let buy3 = document.getElementById('CounterHack');
let buy4 = document.getElementById('MotionSensor');
let buy5 = document.getElementById('AlarmSystem');
let buy6 = document.getElementById('PoliceScanner');
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
    profit = profit + (clickerData.playerTorBrowsers * 0.1);
    // console.log(profit);
    profit = profit + (clickerData.playerAdBlockers * 1);
    profit = profit + (clickerData.playerAntiViruss * 8);
    profit = profit + (clickerData.playerCounterHacks * 47);
    profit = profit + (clickerData.playerMotionSensors * 260);
    profit = profit + (clickerData.playerAlarmSystems * 1400);
    profit = profit + (clickerData.playerPoliceScanners * 7800);
    // console.log(profit);
    profit = Math.round(profit * 10) / 10;
    clickerData.playerBalance += profit;
    document.getElementById("perSec").innerHTML = profit.toFixed(1);
    // console.log(clickerData.playerBalance);
    balance.innerHTML = "Bitcoin: " + clickerData["playerBalance"].toFixed(1);
}

const btnSetup = () => {
    for (let i = 0; i < TOTAL_BTNS; i++) {
        console.log(buyBtns["buy" + i].id)
        let thing = buyBtns["buy" + i].id;
        // let capThing = thing.charAt(0).toUpperCase() + thing.slice(1);
        document.getElementById("player" + thing).innerHTML = clickerData["player"+thing+"s"];
        document.getElementById(thing + "Price").innerHTML = clickerData.currentPrices["cur" + thing + "Price"];
        buyBtns["buy" + i].addEventListener("click", () => {
            buyClick(thing)
        });
    }
}

const buyClick = item => {
    // console.log("hewwo??? buyClick???");
    let clickedPrice = clickerData.currentPrices["cur" +item+"Price"];
    console.log(clickedPrice);
    let clickedItem = item.charAt(0).toUpperCase() + item.slice(1);
    // console.log(cli)
    if (clickerData.playerBalance >= clickedPrice) {
        // console.log("if statement?? hewwo???");
        clickerData.playerBalance -= clickedPrice;
        clickerData["player"+item+"s"] += 1;
        clickerData.currentPrices["cur" +item+"Price"] = parseFloat((clickerData.clickerItemPrices[item+"Price"] * (Math.pow(1.15, clickerData["player"+item+"s"]))).toFixed(2));
        document.getElementById(item+"Price").innerHTML = clickerData.currentPrices["cur" +item+"Price"];
        document.getElementById("player" + item).innerHTML = clickerData["player" + item + "s"];
    }
}

const addClickWorthToBalance = () => {
    clickerData.playerBalance += clickerData.playerClickWorth;
    balance.innerHTML = "Bitcoin: " + clickerData["playerBalance"].toFixed(1);   
};

window.onbeforeunload = () => {
    localStorage.setItem('clickerData', JSON.stringify(clickerData));
}

window.onload = () => {
    if(localStorage.getItem('clickerData') == null){
        console.log("owo");
        clickerData = {
            playerBalance: 0,
            playerClickWorth: 1,
            playerBitcoinPerSec: 0,
            clickerItemPrices: {
                TorBrowserPrice: 15,
                AdBlockerPrice: 100, 
                AntiVirusPrice: 1100,
                CounterHackPrice: 12000,
                MotionSensorPrice: 130000,
                AlarmSystemPrice: 1400000,
                PoliceScannerPrice: 20000000
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
    }else{
        clickerData = JSON.parse(localStorage.getItem('clickerData'));
        console.log("clickerData: " + clickerData);
    }
}

btnSetup();
document.getElementById("clickBtn").addEventListener('click', addClickWorthToBalance);


let currencyInterval = setInterval(currencyLoop, 1000);