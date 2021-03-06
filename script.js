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
    policeScanner: 20000000
}

window.onbeforeunload = () => {
    localStorage.setItem('clickerData', JSON.stringify(clickerData));
}

window.onload = () => {
    if("clickerData" in localStorage){
        clickerData = JSON.parse(localStorage.getItem('clickerData'));
        console.log(clickerData);
    }else{
        alert('no');
    }
}