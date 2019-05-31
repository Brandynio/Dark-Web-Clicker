
exports.pageButton = [];

exports.populateButtons = () => {
    let button = document.createElement('button');
    button.name = 'test button';
    button.innerHTML = 'This is Test';
    pageButton[0] = button;
};

exports.listenForClick = (data) => {
    pageButton[0].addEventListener('click', addClickWorthToBalance(data));
};

exports.addClickWorthToBalance = (data) => {
    data.playerBalance += data.playerClickworth;
};

