let friends = [];

function add() {
    let friend = document.getElementById('friend-name');

    if (friend.value == '') {
        alert('Give your friends name!');
        return;        
    }

    if (friends.includes(friend.value)) {
        alert('Name already added');
        return;
    }

    let list = document.getElementById('friend-list');
    friends.push(friend.value);

    if (list.textContent == '') {
        list.textContent = friend.value;
    } else {
    list.textContent = list.textContent + ', ' + friend.value;
    }
    friend.value = '';
}

function draw() {
    if (friends.length < 4) {
        alert('Add at least 4 friends');
        return;
    }
    shuffle(friends);
    let draw = document.getElementById('draw-list');

    for (let i = 0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            draw.innerHTML = draw.innerHTML + friends[i] + ' --> ' + friends[0] + '<br>';        
        } else {
            draw.innerHTML = draw.innerHTML + friends[i] + ' --> ' + friends[i+1] + '<br>';        
        }        
    }
}

function shuffle(list) {

    for (let indication = list.length; indication; indication--) {

        const randomIndication = Math.floor(Math.random() * indication);

      
        [list[indication - 1], list[randomIndication]] = 
            [list[randomIndication], list[indication - 1]];
    }
}

function restart() {
    friends = [];
    document.getElementById('friend-list').innerHTML = '';
    document.getElementById('draw-list').innerHTML = '';
}
