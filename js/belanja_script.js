let shoppingList = [];

function renderList() {
    const ul = document.getElementById('itemsBelanja');
    const countEl = document.getElementById('jumlahItem');
    if (!ul) return;
    ul.innerHTML = '';
    for (let i = 0; i < shoppingList.length; i++) {
        const li = document.createElement('li');
        li.textContent = shoppingList[i];
        ul.appendChild(li);
    }
    if (countEl) countEl.textContent = 'Jumlah item: ' + shoppingList.length;
}

function tambahItem() {
    const input = document.getElementById('newItem');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    shoppingList.push(val);
    input.value = '';
    renderList();
}

function hapusItemTerakhir() {
    if (shoppingList.length === 0) return;
    shoppingList.pop();
    renderList();
}
renderList();
