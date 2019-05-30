let clickerData = {
    playerBalance = 0,
    playerClickWorth = 1,
    playerBitcoinPerSec = 0,
    torBrowserPrice = 15,
    adBlockerPrice = 100, 
    antiVirusPrice = 1100,
    counterHackPrice = 12000,
    motionSensorPrice = 130000,
    alarmSystemPrice = 1400000,
    policeScannerPrice = 20000000,
    playerTorBrowsers = 0,
    playerAdBlockers = 0,
    playerAntiViruses = 0,
    playerCounterHacks = 0,
    playerMotionSensors = 0,
    playerAlarmSystems = 0,
    playerPoliceScanners = 0
}

const currencyLoop = () => {
    let profit = 0;
    profit += (clickerData.playerTorBrowsers * 0.1);
}

let currencyInterval = setInterval(currencyLoop, 1000);