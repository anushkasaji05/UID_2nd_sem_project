var selectedNav = "home";

function onNavClick(name) {
    const iframe = document.getElementById("iframe");
    let partialSrc = "";
    switch (name) {
        case "home":
            partialSrc = "/home/home.html";
            selectedNav = "home";
            break;
        case "favourite":
            partialSrc = "/favourite/favourite.html";
            selectedNav = "favourite";
            break;
        case "history":
            partialSrc = "/home/history.html";
            selectedNav = "history";
            break;
        case "playlist":
            partialSrc = "/home/playlist.html";
            selectedNav = "playlist";
            break;
        case "comments":
            partialSrc = "/home/comments.html";
            selectedNav = "comments";
            break;
        case "info":
            partialSrc = "/home/info.html";
            selectedNav = "info";
            break;
        case "user":
            partialSrc = "/home/user.html";
            selectedNav = "user";
            break;
        default:
            partialSrc = "/home/home.html";
            selectedNav = "home";
            break;
    }

    iframe.src = "/homescreen" + partialSrc;
}

