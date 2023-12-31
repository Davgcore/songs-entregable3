const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

Genre.belongsToMany(Artist, { through: "GenresArtists" })
Artist.belongsToMany(Genre, { through: "GenresArtists" })

Artist.hasMany(Album) //artistId -> Album
Album.belongsTo(Artist)

Album.hasMany(Song) //albumId -> Song
Song.belongsTo(Album)

Song.belongsToMany(Artist, { through: "SongsArtists" })
Artist.belongsToMany(Song, { through: "SongsArtists" })

Song.belongsToMany(Genre, { through: "SongsGenres" })
Genre.belongsToMany(Song, { through: "SongsGenres" })