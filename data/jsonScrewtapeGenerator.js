const fs = require('fs');

const sortData = (
  tracksArray,
  albumTitle,
  chapter,
  year,
  image,
  price,
  link,
) => {
  const songs = [];
  let onesCount = 0;
  let disc = 1;

  for (let i = 0; i < tracksArray.length; i++) {
    const artistStr = tracksArray[i].substring(
      tracksArray[i].indexOf('(') + 1,
      tracksArray[i].length - 1,
    );
    const songTitle = tracksArray[i].substring(
      tracksArray[i].indexOf(' ') + 1,
      tracksArray[i].indexOf('-'),
    );

    const cappedSongTitle = capSongTitle(songTitle);

    const artists = capArtists(artistStr);
    const track = getTrack(tracksArray[i]);

    if (track === 1) {
      onesCount++;
      if (onesCount === 2) {
        disc = 2;
      }
    }

    songs.push({
      disc,
      track,
      title: cappedSongTitle,
      artists,
    });
  }

  const completeAlbum = {
    title: albumTitle,
    chapter: chapter,
    songs,
    year,
    image,
    price,
    link,
  };

  return JSON.stringify(completeAlbum);
};

const getTrack = (track) => {
  track = track.substring(0, track.indexOf(' '));

  return parseInt(track);
};

const capSongTitle = (songTitle) => {
  const songTitleArr = songTitle.toLowerCase().split(' ');

  for (let i = 0; i < songTitleArr.length; i++) {
    songTitleArr[i] =
      songTitleArr[i].charAt(0).toUpperCase() + songTitleArr[i].substring(1);
  }
  return songTitleArr.join(' ');
};

const capArtists = (artists) => {
  const artistsArr = artists.split(',');
  for (let i = 0; i < artistsArr.length; i++) {
    artistsArr[i] = artistsArr[i].split(' ');
    for (let j = 0; j < artistsArr[i].length; j++) {
      artistsArr[i][j] =
        artistsArr[i][j].charAt(0).toUpperCase() +
        artistsArr[i][j].substring(1).toLowerCase();
    }
    artistsArr[i] = artistsArr[i].join(' ');
  }
  return artistsArr;
};

data = sortData(
  [
    '1 INTRO-(SOUTHSIDE)',

    '2 DO YOU LIKE WHAT YOU SEE-(DOUBLE D,PIMP TYTE,FAT PAT,BIG POKEY)',

    '3 SOUTHSIDE REMIX-(LIL KEKE)',

    '4 I’M A HOE-(ICE CUBE,MASTER P)',

    '5 THESE DAYS-(NATE DOGG)',

    '6 WHY YOU PEEIN ME-(LIL KEKE,FAT PAT)',

    '7 FREESTYLE-(BIG MOE)',

    '1 FREESTYLE-(ESG,MAFIO,LIL 3RD,BIG BABY,HAWK,WILL LEAN)',

    '2 RIDE FOR YOUR HOMIE INTERLUDE-(UNKNOWN)',

    '3 IF HAVEN GOT A GHETTO-(2PAC)',

    '4 STAY IN LINE HOE-(BIG TYMERS,BG)',

    '5 THINKIN ABOUT U-(MIA X,MASTER P)',

    '6 I’M COMING-(PUFF DADDY,NOTORIOUS BIG)',

    '7 FREESTYLE-(BG)',
  ],
  'Feel My Pain',
  110,
  1994,
  'something',
  16.99,
  'linkgoeshere',
);

fs.appendFile('screwTapeInfo.json', data, (err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('succeful');
  }
});
