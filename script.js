const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let total = 0;
	const tb = document.getElementsByTagName("table")[0];
	console.log("tb==",tb)
	const allItems = document.querySelectorAll(".price")
	console.log("allItems==",allItems)
	const lastRow = document.createElement("tr");
	const lastTd = document.createElement("td");
	lastRow.appendChild(lastTd);
	tb.appendChild(lastRow);
	for (let i = 0; i < allItems.length; i++) {
	 console.log("allItems[i]=="allItems[i])
		
	}
	// allItems.forEach((el)=>{
	// })
};

getSumBtn.addEventListener("click", getSum);

