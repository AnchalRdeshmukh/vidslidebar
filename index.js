// Function to change the video source and play the video immediately
function videoUrl(url) {
    const video = document.getElementById('slider'); // Get the video element
    const source = document.getElementById('videoSource'); // Get the source element

    // Update the video source URL
    source.src = url;

    // Load the new video
    video.load();

    // Start playing the new video automatically
    video.play(); // Ensure the video starts playing immediately
}

// Function to play the video when hovering over the thumbnail
function playVideo(url) {
    const video = document.getElementById('slider'); // Get the video element
    const source = document.getElementById('videoSource'); // Get the source element

    // Update the video source URL
    source.src = url;

    // Load the new video
    video.load();

    // Play the video automatically
    video.play();
}

// Function to pause the video when not hovering over the thumbnail
//function pauseVideo() {
// const video = document.getElementById('slider'); // Get the video element
// video.pause(); // Pause the video