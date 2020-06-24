const orm = require( './orm' );
// const { getArtistMatch, closeORM } = require( './orm' );

async function mainApp(){
    /*
        node topsongs.js artist "crosby"
        node topsongs ranking
        .... show the top 10 with highest total ranking (first column)

        node topsongs ranking-usa
        .... show the top with highest second ranking column 

        node topsongs year 1999
        .... show all the songs released on this year
    */
    const action = process.argv[2]
    const info = process.argv[3]

    let result
    switch( action ){
        case 'artist':
            // search by ${info}
            result = await orm.getArtistMatch( info )
            break;
        case 'ranking':
            // sort by ranking column 1 for top 10
            result = await orm.getRankingsGlobal()
            break;
        case 'ranking-usa':
            // sort by ranking column 2 for top 10
            result = await orm.getRankingsUSA()
            break;
        case 'year':
            // show all songs from this release year
            result = await orm.getReleaseYear( info )
            break;
        default:
            console.log( `Please give us what you'd like to search by:
ex. artist "crosby", ranking, year 1999, etc...` )
            result = ''
            break;
    }
    console.table( result )

    await orm.closeORM()
}

mainApp()