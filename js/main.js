const button = document.querySelector("button");
const showResult = document.querySelector("p");
const selector = document.querySelector("select");
const total_casos = 62;
const quantidade_acidentes = [4, 20, 6, 19, 13];
var results = [];
for(var i = 0; i <= 5; i++){
    results.push(Math.round((quantidade_acidentes[i]/total_casos) * 100));
}
//var results = [6, 32, 10, 31, 21];

function clear() {
    showResult.textContent = "XX.XX%";
}

selector.addEventListener("focus", clear);

button.addEventListener("click", () => {
    let option = document.getElementById("risks").value;
    showResult.textContent = `${results[option]}%`;
    drawChart();
});
