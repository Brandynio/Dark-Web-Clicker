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
    playerPoliceScanners: 0
}

let torBtn = document.getElementById('torBrowswer');
let adBtn = document.getElementById("adBlock");
let virusBtn = document.getElementById('antiVirus');
let hackBtn = document.getElementById('counterHack');
let sensorBtn = document.getElementById('motionSensor');
let alarmBtn = document.getElementById('alarmSystem');
let scannerBtn = document.getElementById('policeScanner');

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
}

let currencyInterval = setInterval(currencyLoop, 1000);