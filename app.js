const form = document.getElementById('form');
const input = document.getElementById('newItem');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addItem(text);
  input.value = '';
});

function addItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => toggleDone(li));
  list.appendChild(li);
}


let doneCount = 0;
const title = document.getElementById('title');
function updateTitle() { title.textContent = `TaskBoard — Concluídas: ${doneCount}`; }

function toggleDone(li) {
  li.classList.toggle('done');

  // Lógica do emoji
  if (li.classList.contains('done')) {
    li.dataset.originalText = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
    li.textContent = `✅ ${li.dataset.originalText}`;
  } else {
    li.textContent = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
  }

  // Lógica do contador
  doneCount += li.classList.contains('done') ? 1 : -1;
  updateTitle();
}
