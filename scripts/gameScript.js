
exports.pageButton = [];
exports.clickWorth = 0;
exports.balance = 0;

exports.populateButtons = () => {
    let button = document.createElement('button');
    button.name = 'test button';
    button.innerHTML = 'This is Test';
    pageButton[0] = button;
};

exports.listenForClick = evt => {
    pageButton[0].addEventListener('click', doSomethingAfterClick(clickWorth, balance));
};

exports.addClickWorthToBalance = (clickWorth, balance) => {
    balance += clickWorth;
};

