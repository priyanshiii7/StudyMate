let diaryEntry = {
  id: 1,
  text: '',
  image: null,
  date: new Date().toLocaleDateString()
};

function saveEntry() {
  localStorage.setItem('diaryEntry', JSON.stringify(diaryEntry));
}

function loadEntry() {
  const saved = localStorage.getItem('diaryEntry');
  if (saved) {
    diaryEntry = JSON.parse(saved);
  }
}

function createCard(entry) {
  const template = document.getElementById('cardTemplate');
  const clone = template.content.cloneNode(true);

  const card = clone.querySelector('.diary-card');
  card.dataset.id = entry.id;

  const img = clone.querySelector('.header-image');
  const placeholder = clone.querySelector('.image-placeholder');

  if (entry.image) {
    img.src = entry.image;
    img.classList.remove('hidden');
    placeholder.classList.add('hidden');
  }

  const textarea = clone.querySelector('.diary-textarea');
  textarea.value = entry.text;
  textarea.addEventListener('input', (e) => {
    diaryEntry.text = e.target.value;
    diaryEntry.date = new Date().toLocaleDateString();
    saveEntry();
  });

  const imageInput = clone.querySelector('.image-input');
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        diaryEntry.image = reader.result;
        img.src = reader.result;
        img.classList.remove('hidden');
        placeholder.classList.add('hidden');
        saveEntry();
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('cardsContainer').appendChild(clone);
}

document.addEventListener('DOMContentLoaded', () => {
  loadEntry();
  createCard(diaryEntry);
});
