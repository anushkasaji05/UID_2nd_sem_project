function setSongList() {
    const songs = [
        {
            songId: "S01",
            title: "Peelings",
            artist: "Sachin-Jigar",
            duration: "03:48",
            path: "../../assets/songs/peelings.mp3"
        },
        {
            songId: "S02",
            title: "Ishq Mein",
            artist: "Neeti Mohan",
            duration: "04:12",
            path: "../../assets/songs/ishqmein.mp3"
        },
        {
            songId: "S03",
            title: "Aaj Ki Raat",
            artist: "Alisha Chinai, Mahalakshmi Iyer, Sonu Nigam",
            duration: "05:33",
            path: "../../assets/songs/aajkirat.mp3"
        }
    ];

    // ✅ Store the song list in localStorage
    localStorage.setItem("song-list", JSON.stringify(songs));

    console.log("Song list saved to localStorage.");
}


function updateIframe(songId) {
    const iframe = parent.document.getElementById("iframe");  // Access iframe in parent window
    if (!iframe) {
        console.error("Iframe not found.");
        return;
    }

    // ✅ Retrieve the song list from localStorage
    const songList = JSON.parse(localStorage.getItem("song-list") || "[]");

    // ✅ Find the song by songId
    const song = songList.find(s => s.songId === songId);

    if (!song) {
        console.error(`Song not found for ID: ${songId}`);
        return;
    }

    // ✅ Store the current song info in localStorage
    localStorage.setItem("current-song", JSON.stringify(song));

    // ✅ Navigate to the song.html page
    iframe.src = "/homescreen/song/song.html";
}
