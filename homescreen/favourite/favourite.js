let currentUserInfo;
let favoriteSongs;

function onLoad() {
    const userId = localStorage.getItem('current-user-id');

    // Get user Info
    const userInfo = JSON.parse(localStorage.getItem('user-info') || "{}");

    currentUserInfo = userInfo[userId];

    getFavoriteSongs();

    // unmarkSongAsFavourite('S03');
}

function getFavoriteSongs() {
    const favouriteSongIds = currentUserInfo.favorites;

    const songList = JSON.parse(localStorage.getItem('song-list'))||"[]";

    favoriteSongs = songList.filter((song) => favouriteSongIds.indexOf(song.songId) != -1);

    if (favoriteSongs.length === 0) {
        document.getElementById('favorite-songs-container').innerHTML = `<p>No favorite songs found.</p>`;
        return;
    }

    // Create table with headers
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Duration</th>
                    <th>Audio</th>
                </tr>
            </thead>
            <tbody>`;

    // Loop through each favorite song and create a row
    favoriteSongs.forEach(song => {
        html += `
            <tr>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>${song.duration}</td>
                <td>
                    <audio  src="${song.path}"  controls> </audio>
                </td>
            </tr>`;
    });

    html += `</tbody></table>`;

    // Render the table
    const container = document.getElementById('favorite-songs-container');
    if (container) {
        container.innerHTML = html;
    } else {
        console.error("Container with ID 'favorite-songs-container' not found.");
    }
}

function markSongAsFavourite(songId) {
    currentUserInfo.favorites.push(songId);
    updateUserInfo();
}

function unmarkSongAsFavourite(songId) {
    currentUserInfo.favorites = currentUserInfo.favorites.filter(id => id != songId);
    updateUserInfo();
}

function updateUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('user-info') || "{}");

    // Update the current user info into the list
    userInfo[currentUserInfo.userId] = currentUserInfo;

    // Push the list back to the Local storage
    localStorage.setItem('user-info', JSON.stringify(userInfo));
}