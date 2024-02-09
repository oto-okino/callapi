let function1 = document.getElementById("function1").textContent;
let function2 = document.getElementById("function2").textContent;
let function3 = document.getElementById("function3").textContent;
let functionAny = document.getElementById("input-text").value;

let result = document.getElementById("result");

function testFunction(functionUrl) {
    result.textContent = "Please wait... Excuting now...";

    let request = new XMLHttpRequest();
    request.open('GET', functionUrl, true);

    request.onload = () => {
        let data = this.response;
        result.textContent = data
    }

    request.onerror = () => {
        result.textContent = "Error";
    }
    
    request.send();
}

function testFunctionAny(functionUrl) {

    functionAny = document.getElementById("input-text").value;

    functionUrl = functionAny

    let request = new XMLHttpRequest();
    result.textContent = "Please wait... Excuting now...";

    request.open('GET', functionUrl, true);

    request.onload = () => {
        let data = this.response;
        result.textContent = data;
    }

    request.onerror = () => {
        result.textContent = "Error";
    }
    
    request.send();
}
