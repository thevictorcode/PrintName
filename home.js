function yourName() {
    let chooseName = prompt ('What is your name?');
    let h2 = document.createElement('h2');
    let answer = document.createTextNode('Your name is ' + chooseName + '.');
    h2.setAttribute('id', 'yourName');
    h2.appendChild(answer);
    document.getElementById('answer-field').appendChild(h2);
}

function reset() {
    document.getElementById('yourName').remove();
}