function pringSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

let numSongs = input.shift();
let songs = [];
let typeListName = input.pop();

for(i = 0; i< input.length; i++) {
    let [typeList, name, time] = input[i].split("_");
    if(typeListName === typeList || typeListName === 'all') {
        songs.push(new Song(typeList, name, time));
    }

}

for (const i of songs) {
    console.log(i.name)
    }
}

pringSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']    
    )