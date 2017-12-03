
class musicList {
  constructor(route) {
    this.route = route;
    this.audio = new Audio(this.route);

  }
//myaudio.play(); - This will play the music.
  play() {
    this.audio.play();
  }
//myaudio.pause(); - This will pause the music.
  pause() {
    this.audio.pause();
  }
  
 //myaudio.currentTime = 0; - This will rewind the audio to the beginning. 
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

};

class Jukebox {
  constructor() {
    this.songs = [];
    this.currentSongIndex = 0;
  }

  addMusic(music){
    this.songs.push(music);
   
  }

  play() {
    this.songs[this.currentSongIndex].play();
    
  }

  pause() {
    this.songs[this.currentSongIndex].pause();
  }

  
  stop() {
    this.songs[this.currentSongIndex].stop();
  }

  gotoSong() {
    this.songs[this.currentSongIndex].stop();
    this.currentSongIndex = document.getElementId("listMusic").selectedIndex;
    this.songs[this.currentSongIndex].play();
    }
  };

 // My music list are not work????
 let Jukebox1 = new Jukebox();
 Jukebox1.addMusic(new musicList("./Music/Panic At The Disco I Write Sins Not Tragedies.mp3"));
 JukeBox1.addMusic(new musicList("./Music/The Killers  MrBrightside.mp3"));
 Jukebox1.addMusic(new musicList("./Music/Camille Havana.mp3"));
 Jukebox1.addMusic(new musicList("./Music/I Walk Alone - Tarja Turunen.mp3"));


console.log(Jukebox1);


/*Jukebox.gotoSong(-1); // prev song
Jukebox.gotoSong(1); // next song

let Audio = document.createElement("audio");
let songs = new Audio("Music/Panic At The Disco I Write Sins Not Tragedies.mp3");
let songs2 = new Audio("Music/The Killers - Mr. Brightside,mp3");
mySong.play();
mysong.pause();

let playbtn = document.getElementId('playbtn');
playbtn.addEventListener("click", function (event) {
  Jukebox.play();
});

pausebtn.addEventListener("click", function (event) {
  event.preventDefalt();
  Jukebox.pause();
});*/
