let function1 = document.getElementById("function1").textContent;
let function2 = document.getElementById("function2").textContent;
let function3 = document.getElementById("function3").textContent;

let result = document.getElementById("result");

function testFunction(functionUrl) {
    result.textContent = "Please wait... Excuting now...";

    let request = new XMLHttpRequest();
    request.open('GET', functionUrl, true);

    request.onload = function () {
        let data = this.response;
        result.textContent = data
    }
    
    request.send();
}
