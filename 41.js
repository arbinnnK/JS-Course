// object destructuring

const band ={
    bandname : "Nepathya",
    songs : "Resham"
};
// console.log(band.bandname);
// console.log(band.songs, band.bandname);


const {bandname, songs} = band;
console.log(bandname);
