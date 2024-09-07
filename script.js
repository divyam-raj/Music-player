document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const nextBtn = document.getElementById('next-btn');
    const trackTitle = document.getElementById('track-title');

    // Set initial track title
    trackTitle.textContent = 'Track 1';

    // Play button event
    playBtn.addEventListener('click', () => {
        audio.play();
    });

    // Pause button event
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    // Stop button event
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Next button event (for demo purposes, simply change the track title)
    nextBtn.addEventListener('click', () => {
        trackTitle.textContent = 'Track 2'; // Change this to load a new track
        audio.src = 'track2.mp3'; // Update with your actual track path
        audio.play();
    });
});
