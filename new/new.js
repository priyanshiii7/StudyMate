let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph)
    })
})


const display = document.getElementById('display');
let working = false;

function start() {
    if (!working) {
        startTime = Date.now();
        timer = setInterval(update, 10);
        working = true;
    }
}

function stop() {
    clearInterval(timer);
    working = false;
}

function update() {

    const currentTime = Date.now();
    pausedTime = currentTime - startTime;

    let hours = Math.floor(pausedTime / (1000 * 60 * 60));
    let minutes = Math.floor(pausedTime / (1000 * 60) % 60);
    let seconds = Math.floor(pausedTime / 1000 % 60);
    let milliseconds = Math.floor(pausedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


document.addEventListener('DOMContentLoaded', () => {
  const homePageProfileImages = document.querySelectorAll('.user-profile-img');
  const homePageUsernameElements = document.querySelectorAll('.user-username');

  const savedProfileImg = localStorage.getItem('profileImg');
  if (savedProfileImg) {
    homePageProfileImages.forEach(img => {
      img.src = savedProfileImg;
    });
  }
  
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    homePageUsernameElements.forEach(element => {
      element.textContent = savedUsername;
    });
  }
});


const profileImg = document.getElementById('profile-img');
const uploadInput = document.getElementById('upload-input');
const saveBtn = document.getElementById('save-btn');


document.addEventListener('DOMContentLoaded', () => {
  const savedProfileImg = localStorage.getItem('profileImg');

  if (savedProfileImg) {
    profileImg.src = savedProfileImg;
  }
});

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const profileSrc = e.target.result;
      profileImg.src = profileSrc; 
      localStorage.setItem('profileImg', profileSrc);
    };
    reader.readAsDataURL(file);
  }
});

let popup = document.getElementById('popup');

function openPopup() {
  popup.classList.add("open-popup")
}
function closePopup() {
  popup.classList.remove("open-popup")
}




