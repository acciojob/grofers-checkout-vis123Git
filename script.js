const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let total = 0;
	const allItems = Array.from(document.querySelectorAll(".price"))
    allItems.forEach((element) => {
        total += parseFloat(element.textContent);
	})
	    const table = document.querySelector("table");
    const lastRow = document.createElement("tr");
    const lastCell = document.createElement("td");
    lastCell.colSpan = 2;
	lastCell.id = 'ans'
    lastCell.textContent = total;
    lastRow.appendChild(lastCell);
    table.appendChild(lastRow);
};

getSumBtn.addEventListener("click", getSum);

