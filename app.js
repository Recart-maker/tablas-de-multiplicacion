const multiplicationGrid = document.getElementById('multiplicationGrid');
const tableRange = document.getElementById('tableRange');
const currentTable = document.getElementById('currentTable');

function generateTable() {
    multiplicationGrid.innerHTML = '';
    const tableNumber = parseInt(tableRange.value);
    currentTable.textContent = tableNumber;
    
    for(let i = 1; i <= 10; i++) {
        const result = tableNumber * i;
        const card = document.createElement('div');
        card.className = `multiplication-card ${result % 2 === 0 ? 'even' : 'odd'}`;
        card.innerHTML = `
            <div class="card-content">
                <h3>${tableNumber} × ${i}</h3>
                <p class="result">${result}</p>
            </div>
        `;
        multiplicationGrid.appendChild(card);
    }
    
    animateCards();
}

function animateCards() {
    const cards = document.querySelectorAll('.multiplication-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'rotateY(0) rotateX(0)';
        }, index * 50);
    });
}

tableRange.addEventListener('input', generateTable);

// Generar tabla inicial al cargar la página
generateTable();