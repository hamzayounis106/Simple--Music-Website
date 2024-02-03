console.log("Muhammad Hamza Younis 1248");
// variable Declaration 
let songname = document.getElementById("SongName");
let forwad = document.getElementById("next");
let previous = document.getElementById("previous");
let masterPlay = document.getElementById("masterPlay");
let songcover = document.getElementById("SongImage");
let gif = document.getElementById("gif");
let songItem = document.getElementsByClassName("songItem");
let songplay = document.getElementsByClassName("songPlay");
let audioElement = new Audio("");
let indexnumber = 0;
let songNameDisplay = document.getElementById("songDisplay");
let myProgressBar = document.getElementById("myProgressBar")



let songs = [
    { name: "Main Roya", cover: "Music Covers/cover1.jpg", path: "Musics/song1.mp3" },
    { name: "Ertugrul Ost", cover: "Music Covers/cover2.jpg", path: "Musics/song2.mp3" },
    { name: "O re Piya", cover: "Music Covers/cover3.jpg", path: "Musics/song3.mp3" },
    { name: "Gull", cover: "Music Covers/cover4.jpg", path: "Musics/song4.mp3" },
    { name: "Mashup", cover: "Music Covers/cover5.jpg", path: "Musics/song5.mp3" },
    { name: "Waqt ki Baten", cover: "Music Covers/cover6.jpg", path: "Musics/song6.mp3" },
    { name: "Yeh Jism", cover: "Music Covers/cover7.jpg", path: "Musics/song7.mp3" }
];

Array.from(songItem).forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByClassName("song-name")[0].innerText = songs[i].name;
    element.getElementsByClassName("coverSong")[0].src = songs[i].cover;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.currentTime <= 0 || audioElement.paused) {
        audioElement.play();
        gif.style.opacity = "1";
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");

        document.getElementById(`${indexnumber}`).classList.remove("fa-play");
        document.getElementById(`${indexnumber}`).classList.add("fa-pause");
        songNameDisplay.innerText = songs[indexnumber - 1].name;
    } else {
        audioElement.pause();
        gif.style.opacity = "0";
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        songNameDisplay.innerText = '';

        document.getElementById(`${indexnumber}`).classList.remove("fa-pause");
        document.getElementById(`${indexnumber}`).classList.add("fa-play");
    }
})
const makeallstop = function makeallstop() {
    Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");

        audioElement.pause();
    })

}

Array.from(songplay).forEach((element) => {
    element.addEventListener('click', (e) => {
        indexnumber = parseInt(e.target.id);

        if (audioElement.currentTime <= 0 || audioElement.paused) {
            audioElement.src = `Musics/song${indexnumber}.mp3`;
            audioElement.play();
            gif.style.opacity = "1";
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            songNameDisplay.innerText = songs[indexnumber - 1].name;
        } else {
            makeallstop();
            audioElement.pause();
            gif.style.opacity = "0";
            e.target.classList.add("fa-play");
            e.target.classList.remove("fa-pause");
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            songNameDisplay.innerText = '';
            audioElement.currentTime = 0;
        }
    })
})
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100
    console.log(progress)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

})

previous.addEventListener('click', () => {
    if (indexnumber <= 0) {
        indexnumber = 7;
        audioElement.src = `Musics/song${indexnumber}.mp3`;
    } else {
        indexnumber -= 1;
        audioElement.src = `Musics/song${indexnumber}.mp3`;
    }
    makeallstop();
    audioElement.play();
    document.getElementById(`${indexnumber}`).classList.remove("fa-play");
    document.getElementById(`${indexnumber}`).classList.add("fa-pause");
    gif.style.opacity = "1";
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    songNameDisplay.innerText = songs[indexnumber - 1].name;
})
next.addEventListener('click', () => {
    if (indexnumber >= 7) {
        indexnumber = 1;
        audioElement.src = `Musics/song${indexnumber}.mp3`;
    } else {
        indexnumber += 1;
        audioElement.src = `Musics/song${indexnumber}.mp3`;
    }
    makeallstop();
    audioElement.play();
    document.getElementById(`${indexnumber}`).classList.remove("fa-play");
    document.getElementById(`${indexnumber}`).classList.add("fa-pause");
    gif.style.opacity = "1";
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    songNameDisplay.innerText = songs[indexnumber - 1].name;
})
document.getElementById("10back").addEventListener('click', () => {
    if (audioElement.currentTime <= 0) {
        audioElement.currentTime = 0  
    } else {
        audioElement.currentTime -= 10;
    }
   
})
document.getElementById("10next").addEventListener('click', () => {
    if (audioElement.currentTime >= audioElement.duration) {
        audioElement.currentTime = 0  
    
    } else {
        audioElement.currentTime += 10;
    }
   
})

