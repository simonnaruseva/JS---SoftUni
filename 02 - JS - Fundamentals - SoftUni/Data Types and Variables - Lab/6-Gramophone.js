function countRotateSong(bandName, albumName, songName) {

let songDuration = (albumName.length * bandName.length) * songName.length / 2;
let time = songDuration / 2.5;
console.log(`The plate was rotated ${Math.ceil(time)} times.`);

}

countRotateSong('Black Sabbath', 'Paranoid', 'War Pigs');