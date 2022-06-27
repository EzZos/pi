const button = document.querySelector("button");
const showResult = document.querySelector("p");
const selector = document.querySelector("select");

const results = [6, 32, 10, 31, 21];

function clear() {
    showResult.textContent = "XX.XX%";
}

selector.addEventListener("focus", clear);

button.addEventListener("click", () => {
    let option = document.getElementById("risks").value;
    showResult.textContent = `${results[option]}.00%`;
    drawChart();
});
