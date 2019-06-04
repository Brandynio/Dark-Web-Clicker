//display the item menu
//highlight only the purchasable items
    //if player's balance is greater than or equal to the item's purchase price
        // then highlight it
        // else don't highlight it
let clickerData = {
    playerBalance: 100000000,
    playerClickWorth: 1,
    playerBitcoinPerSec: 0,
    menuItemPrices: {
        torBrowserPrice: 15,
        adBlockerPrice: 100, 
        antiVirusPrice: 1100,
        counterHackPrice: 12000,
        motionSensorPrice: 130000,
        alarmSystemPrice: 1400000,
        policeScannerPrice: 20000000,},
    playerTorBrowsers: 0,
    playerAdBlockers: 0,
    playerAntiViruses: 0,
    playerCounterHacks: 0,
    playerMotionSensors: 0,
    playerAlarmSystems: 0,
    playerPoliceScanners: 0
}
let testItemMenuPrices = [];
// let itemNames = ["BitCoin Clicker", "4Chan Crawler", "DeepWeb Lurker",
//  "HackerMan Hax", "SilkRoad Bots", "Chinese FireWall DOS"];
let itemNames = [];
let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');

let generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * max) + min);
};

let generateRandomFloatNumber = (min, max) => {
    return ((Math.random() * max) + min).toFixed(2);
};

let populateItemMenu = (menu, balance) => {
    let balanceDiv = document.createElement('div');
    balanceDiv.innerHTML = `Player Balance: $ ${balance}`;
    div.appendChild(balanceDiv);
    for(let prop in menu)
    {
        testItemMenuPrices[prop] = menu[prop];
        console.log('price: ', testItemMenuPrices[prop]);
        itemNames[prop] = prop;
        console.log('prop: ', itemNames[prop]);

    }

    for (let stuff in itemNames) {
       let divChild = document.createElement('div');
       console.log(`${itemNames[stuff]} $${testItemMenuPrices[stuff]}`);
       divChild.innerHTML = `${itemNames[stuff]} $ ${testItemMenuPrices[stuff]}`;
       divChild.style.border = 'solid black 2px';
       divChild.style.margin = '20px 15px';
       divChild.style.padding = '5px 10px';
       let red = generateRandomNumber(200, 55);
       let green = generateRandomNumber(130,125);
       let blue = generateRandomNumber(50, 205);
       let alpha = generateRandomNumber(100, 155);

       divChild.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
       //Deteremines visibility based on player balance
        if(balance >= testItemMenuPrices[stuff])
        {
            divChild.style.visibility = 'visible';
        }
        else
        {
            divChild.style.visibility = 'hidden';
        }
        div.appendChild(divChild);
    }


    body.appendChild(div);
};

let addButtonToBody = () => {
    let buttonElem = document.createElement('button');
    buttonElem.id = 'testButton';
    buttonElem.innerHTML = 'Test Button';
    buttonElem.style.margin = '25px 50px';
    buttonElem.style.backgroundColor = 'green';
    buttonElem.style.color = 'white';
    buttonElem.style.borderRadius = '15px';
    buttonElem.style.border = 'solid black 1px';
    buttonElem.style.fontSize = '1.2em';
    buttonElem.style.fontWeight = 'bolder';
    body.appendChild(buttonElem);
};

//Button is broke, so ignore it 
let listenForPurchaseEvt = evt => {
    let testButtonElem = body.lastChild;
    testButtonElem.addEventListener('click', populateItemMenu(clickerData.menuItemPrices, clickerData.playerBalance));
};

addButtonToBody();
listenForPurchaseEvt();
