let clickerData = {
    playerBalance: 0,
    playerClickWorth: 1,
    playerBitcoinPerSec: 0,
    torBrowserPrice: 15,
    adBlockerPrice: 100, 
    antiVirusPrice: 1100,
    counterHackPrice: 12000,
    motionSensorPrice: 130000,
    alarmSystemPrice: 1400000,
    policeScannerPrice: 20000000,
    playerTorBrowsers: 0,
    playerAdBlockers: 0,
    playerAntiViruses: 0,
    playerCounterHacks: 0,
    playerMotionSensors: 0,
    playerAlarmSystems: 0,
    playerPoliceScanners: 0,
    upgrades: [ {type:"speedBoost", name: "1.5x Click Speed", speedWorth: 1.5, price: 1000},
                {type:"speedBoost", name: "3.0x Click Speed", speedWorth: 3.0, price: 10000},
                {type:"speedBoost", name: "5.0x Click Speed", speedWorth: 5.0, price: 100000} 
              ],
    clickBoostValue: 0
}

let torBtn = document.getElementById('torBrowswer');
let adBtn = document.getElementById("adBlock");
let virusBtn = document.getElementById('antiVirus');
let hackBtn = document.getElementById('counterHack');
let sensorBtn = document.getElementById('motionSensor');
let alarmBtn = document.getElementById('alarmSystem');
let scannerBtn = document.getElementById('policeScanner');
let balance = document.getElementById('balance');

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

const addClickWorthToBalance = () => {
    clickerData.playerBalance += clickerData.playerClickWorth;
    balance.innerHTML = "Bitcoin: " + clickerData.playerBalance;    
};

const createUpgradeMenu = () => {
    let divElem = document.createElement('div');
    let ulElem = document.createElement('ul');
    ulElem.id = "upgradeMenuUL";
    let upgrades = clickerData.upgrades;
    for (let index = 0; index < upgrades.length; index++) {
        let upgradeElement = upgrades[index];
        let liElem = document.createElement('li');
        liElem.id = `upgrade${index}`;
        liElem.innerHTML = `${upgradeElement.name}: $${upgradeElement.price}`;

    }
    let liElem = document.createElement('li');

};

document.getElementById("clickBtn").addEventListener('click', addClickWorthToBalance);


let currencyInterval = setInterval(currencyLoop, 1000);