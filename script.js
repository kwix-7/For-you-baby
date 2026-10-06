let musicPlaying = false;

function toggleMusic() {

    const music = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-button");
    const decorations = document.querySelector(".moving-decorations");

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        button.textContent = "🎵 A little surprise";

        decorations.classList.remove("decorations-playing");

    } else {

        music.play()
            .then(function() {

                musicPlaying = true;

                button.textContent = "⏸️ Pause";

                decorations.classList.add("decorations-playing");

            })
            .catch(function(error) {

                console.log("Music could not be played:", error);

                button.textContent = "🎵 Try again";

            });

    }
}