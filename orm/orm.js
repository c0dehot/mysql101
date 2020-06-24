const mysql = require( 'mysql' );

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
  }

// at top INIT DB connection
const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "r00tr00t",
    database: "top_songsDB"
  });

function getArtistMatch( artistName ){
    return db.query( "SELECT artist,song,release_year FROM top5000 WHERE artist LIKE ?", `%${artistName}%` )
}

function getRankingsGlobal(){
    return db.query( "SELECT artist,song,release_year,charts1 AS ranking_global FROM top5000 ORDER BY charts1 DESC LIMIT 10" )
}

function getRankingsUSA(){
    return db.query( "SELECT artist,song,release_year,charts2 AS ranking_usa FROM top5000 ORDER BY charts2 DESC LIMIT 10" )
}

function getReleaseYear( releaseYear ){
    return db.query( "SELECT artist,song,release_year FROM top5000 WHERE release_year = ?", releaseYear )
}
function closeORM(){
    return db.close()
}

module.exports = {
    getArtistMatch, getRankingsGlobal, getRankingsUSA, getReleaseYear, closeORM
} 