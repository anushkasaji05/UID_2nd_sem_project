
function onLoad() {
    const userId = localStorage.getItem('current-user-id');

    // Get user Info
    const userInfo = JSON.parse(localStorage.getItem('user-info') || "{}");

    currentUserInfo = userInfo[userId];

    getFavoriteSongs();

    // unmarkSongAsFavourite('S03');
}

document.addEventListener("DOMContentLoaded", () => {
    const songContainer = document.getElementById("song-container");
    const confirmation = document.getElementById("confirmation");

    const songInfo = JSON.parse(localStorage.getItem("current-song"));

    // ✅ Retrieve current user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem('user-info') || "{}");
    const userId = "10001";  // Assuming current user ID
    window.currentUserInfo = userInfo[userId] || {
        userId: userId,
        email: "unknown",
        favorites: []
    };

    if (songInfo) {
        // ✅ Display song info
        songContainer.innerHTML = `
            <h1>${songInfo.title}</h1>
            <p>Artist: ${songInfo.artist}</p>
            <p>Duration: ${songInfo.duration}</p>
            <audio src="${songInfo.path}" controls></audio>
            <button id="favorite-btn" class="favorite-btn"></button>
        `;

        // ✅ Update button based on favorite status
        updateFavoriteButton(songInfo.songId);

        // ✅ Add event listener for the button
        const favButton = document.getElementById("favorite-btn");
        favButton.addEventListener("click", () => toggleFavorite(songInfo.songId));
    } else {
        songContainer.innerHTML = `<p>No song details found.</p>`;
    }

    // ✅ Function to toggle favorite status
    function toggleFavorite(songId) {
        if (currentUserInfo.favorites.includes(songId)) {
            unmarkSongAsFavourite(songId);
        } else {
            markSongAsFavourite(songId);
        }

        // ✅ Update the button text and status
        updateFavoriteButton(songId);

        // ✅ Confirmation message
        confirmation.textContent = currentUserInfo.favorites.includes(songId)
            ? "❤️ Added to favorites!"
            : "❌ Removed from favorites!";
        confirmation.style.color = currentUserInfo.favorites.includes(songId) ? "#00ff00" : "#ff0000";

        setTimeout(() => {
            confirmation.textContent = "";
        }, 3000);
    }

    // ✅ Function to update the button text
    function updateFavoriteButton(songId) {
        const favButton = document.getElementById("favorite-btn");
        if (currentUserInfo.favorites.includes(songId)) {
            favButton.textContent = "Unlike ❤️";
            favButton.style.background = "#ff3333";
        } else {
            favButton.textContent = "Like 💙";
            favButton.style.background = "#3333ff";
        }
    }

    // ✅ Functions to mark/unmark favorite
    window.markSongAsFavourite = (songId) => {
        currentUserInfo.favorites.push(songId);
        updateUserInfo();
    };

    window.unmarkSongAsFavourite = (songId) => {
        currentUserInfo.favorites = currentUserInfo.favorites.filter(id => id != songId);
        updateUserInfo();
    };

    // ✅ Function to update localStorage with the current user info
    window.updateUserInfo = () => {
        const userInfo = JSON.parse(localStorage.getItem('user-info') || "{}");
        userInfo[currentUserInfo.userId] = currentUserInfo;
        localStorage.setItem('user-info', JSON.stringify(userInfo));
    };
});
