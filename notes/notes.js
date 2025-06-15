const roomSounds = {
  library: './assest/237359__klankbeeld__chopping-with-knife-140328_0144.wav',
  rain: './assest/light-rain-109591.mp3',
  cafe: './assest/cafe-noise-32940.mp3',
  forest: './assest/forest-ambience-296528.mp3',
  ocean: './assest/ocean-waves-112906.mp3',
  fireplace: './assest/aachen_burning-fireplace-crackling-fire-soundswav-14561.mp3'
};
       const audio = document.getElementById('audio');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        const roomButtons = document.querySelectorAll('[data-room]');
        const timerDisplay = document.getElementById('timerDisplay');
        
        // Initialize
        let currentRoom = 'library';
        let timer;
        let minutes = 25;
        let seconds = 0;
        let isRunning = false;
        
        // Set initial audio
        audio.src = roomSounds[currentRoom];
        audio.volume = 0.5;
        
        // Room selection
        roomButtons.forEach(button => {
            button.addEventListener('click', () => {
                roomButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentRoom = button.dataset.room;
                
                // Stop current audio and switch
                audio.pause();
                audio.currentTime = 0;
                audio.src = roomSounds[currentRoom];
                
                // Auto-play the new sound
                audio.play().catch(e => {
                    console.log('Audio autoplay blocked. Click Play button.');
                });
            });
        });
        
        // Audio controls
        document.getElementById('playBtn').onclick = () => {
            audio.play().catch(e => {
                console.log('Audio play failed:', e);
                alert('Audio failed to play. Check if files exist and browser allows audio.');
            });
        };
        
        document.getElementById('pauseBtn').onclick = () => {
            audio.pause();
        };
        
        // Volume control
        volumeSlider.oninput = () => {
            volumeValue.textContent = volumeSlider.value + '%';
            audio.volume = volumeSlider.value / 100;
        };
        
        // Timer functions
        function setTimer(min) {
            minutes = min;
            seconds = 0;
            updateDisplay();
        }
        
        function startTimer() {
            if (isRunning) return;
            isRunning = true;
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        isRunning = false;
                        alert("⏰ Time's up!");
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }, 1000);
        }
        
        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }
        
        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            setTimer(25);
        }
        
        function updateDisplay() {
            timerDisplay.textContent = 
                String(minutes).padStart(2, '0') + ':' + 
                String(seconds).padStart(2, '0');
        }
        
        // Initialize display
        updateDisplay();