document.querySelector('#id1').addEventListener('mouseover', function(){this.style.color='green'});

document.querySelector('#id1').addEventListener('mouseout', function(){this.style.color='black'});

document.querySelector("#id1").onclick=function(){
    this.textContent="Hello"
};

document.querySelector("#id1").ondblclick=function(){
    this.textContent="Goodbye"
};

window.onresize = function(){
    document.body.style.backgroundColor='yellow'
};

window.onclick = function(){
    this.document.body.style.backgroundColor='white'
};

