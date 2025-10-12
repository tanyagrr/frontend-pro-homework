const rows = [];
for (let i = 1; i < 11; i++) {
    const row = document.querySelector(`.row.row-${i}`);
    rows.push(row);
}

for (let j = 0; j < rows.length; j++) {
    for (let i = 1; i < 11; i++) {
    const rowResult = document.createElement("div");
    rowResult.classList.add("number-vert");
    rowResult.textContent = `${(j + 1) * i}`;
    rows[j].appendChild(rowResult);
    };
}