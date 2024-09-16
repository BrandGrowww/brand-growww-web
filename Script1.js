const dynamicTexts = ["Advance Automation", "Data Analytics", "Performance Marketing", "Algorithmic Training", "Up-to-date Technology"];
const backgroundVideos = ["", "", "", "", ""];
const isGif = [false, false, false, false, false];  // Update this array to reflect if the item is a GIF or a video

let index = 0;

function changeDynamicText() {
    const dynamicTextElement = document.getElementById('dynamic-text-container');
    const backgroundVideo = document.getElementById('background-video');
    const backgroundGif = document.getElementById('background-gif');

    // Clear previous text
    dynamicTextElement.innerHTML = ''; // Use innerHTML to reset content

    // Get the new text from the dynamicTexts array
    const text = dynamicTexts[index];

    // Create spans for each letter and add animation delay
    text.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.className = 'dynamic-text-letter';
        span.style.setProperty('--animation-delay', `${i * 0.2}s`);
        span.textContent = letter;
        dynamicTextElement.appendChild(span);
    });

    // Update the background element based on the type (GIF or video)
    if (isGif[index]) {
        backgroundGif.src = backgroundVideos[index];
        backgroundGif.style.display = 'block';
        backgroundVideo.style.display = 'none';
    } else {
        backgroundVideo.src = backgroundVideos[index];
        backgroundVideo.style.display = 'block';
        backgroundGif.style.display = 'none';
        backgroundVideo.play();
    }

    // Update index for the next text
    index = (index + 1) % dynamicTexts.length;
}

// Change text every 5 seconds
setInterval(changeDynamicText, 5000);

// Call the function initially to display the first text right away
changeDynamicText();
