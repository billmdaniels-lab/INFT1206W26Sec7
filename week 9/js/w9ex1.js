console.log("Test");

function showOutput(){
    let name = document.querySelector('#first_name').value;
    document.querySelector('#output').textContent = "Hello " +name +"!";
}

document.querySelector('#btn').addEventListener("click",showOutput);

