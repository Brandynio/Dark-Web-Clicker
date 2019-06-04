//display the item menu
//highlight only the purchasable items
    //if player's balance is greater than or equal to the item's purchase price
        // then highlight it
        // else don't highlight it
let testItemMenu = [];
let itemNums = 3;
let itemNames = ["BitCoin Clicker", "4Chan Crawler", "DeepWeb Lurker",
 "HackerMan Hax", "SilkRoad Bots", "Chinese FireWall DOS"];
let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');

let generateRandomNumber = (min, max) => {
    return Math.floor(Math.random(max) + min);
};

let generateRandomFloatNumber = (min, max) => {
    return (Math.random(max) + min).toFixed(2);
};

let generateRandomName = (names) =>
{
    let min = 0;
    let max = names.length;
    let randNum = generateRandomNumber(min,max);
    return names[randNum];
}

let populateItemMenu = (menu, numOfItems) => {
    for (let index = 0; index < numOfItems; index++) {
        let min = 10;
        let max = generateRandomNumber(min, 1000);
        menu[index] = {
            name: generateRandomName(itemNames),
            price: generateRandomFloatNumber(min, max),
            priceString: `Price: $${this.price}`
        };
    }
    let titleDiv = document.createElement('div');
    titleDiv.id = 'menuTitle';
    titleDiv.innerHTML = 'Shop Menu';
    div.appendChild(titleDiv);

    for (let j = 0; j < menu.length; j++) {
        let item = menu[j];
        let itemDiv = document.createElement('div');
        itemDiv.id = `item${j}`;
        itemDiv.innerHTML = `${item.name}: ${item.priceString}`;
        itemDiv.appendChild(document.createElement('br'));
        div.appendChild(itemDiv);
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

let listenForPurchaseEvt = evt => {
    let testButtonElem = body.lastChild;
    testButtonElem.addEventListener('click', populateItemMenu(testItemMenu, itemNums));
};

addButtonToBody();
listenForPurchaseEvt();
