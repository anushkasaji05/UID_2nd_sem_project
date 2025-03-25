localStorage.setItem("song-info", JSON.stringify([
    {
        title: "aajkirat",
        artist: "Sachin-Jigar",
        duration: "03:48",
        songId: "S01",
        path:"../assests/aajkirat.mp3"
    }
]));


localStorage.setItem("user-info", JSON.stringify({
    "10001": {
        email: "anushkasaji5@gmail.com",
        firstName: "Anushka",
        lastName: "Saji",
        userId: "10001",
        favorites: ['S01','S02']
    }
}));

localStorage.setItem("user-list", JSON.stringify([
    {
        email: "anushkasaji5@gmail.com",
        password: "ravetune",
        userId: "10001"
    }
]));


const songs = [
    {
        songId: "S01",
        title: "Aaj Kirat",
        artist: "Sachin-Jigar",
        duration: "03:48",
        path: "../../assets/songs/aajkirat.mp3"
    },
    {
        songId: "S02",
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        duration: "04:22",
        path: "../../assets/songs/aajkirat.mp3"
    },
    {
        songId: "S03",
        title: "Kesariya",
        artist: "Arijit Singh",
        duration: "04:28",
        path: "../../assets/songs/aajkirat.mp3"
    }
];

// Store the song list in localStorage
localStorage.setItem('song-list', JSON.stringify(songs));
