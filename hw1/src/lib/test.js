const say = function (name) {
    var div = document.createElement('p');
    div.className = 'block';
    div.innerHTML = 'Hello, ' + name;
    document.body.appendChild(div);
}

export default say;
