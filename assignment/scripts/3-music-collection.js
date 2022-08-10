console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

// function addToCollection (title, artist, yearPublished){
//     let album = {
//         title ,
//         artist ,
//         yearPublished ,
//     }
//     collection.push(album);
//     return album;
// }


// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

// console.log(addToCollection('Tailor Made', 'Rascal Miles', 2021));
// console.log(addToCollection('Space Cadet', 'Rascal Miles', 2020));
// console.log(addToCollection('Songs from the Greenhouse', 'Skyler Day', 2021));
// console.log(addToCollection('Starting Over', 'Chris Stapleton', 2020));
// console.log(addToCollection('Almost Naked', 'Ruby Waters', 2019));
// console.log(addToCollection('My Woman', 'Angel Olsen', 2016));
// console.log(collection);


// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection (array){
    console.log(array.length);
    for (album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist (artist){
    let artistResults = [];
    for (let oneAlbum of collection){
        if(oneAlbum.artist === artist ){
            artistResults.push(oneAlbum)
        }
    }
        return artistResults;
 }


console.log(findByArtist('Rascal Miles'));
console.log(findByArtist('Eminem'));
console.log(findByArtist('Skyler Day'));

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// function search (album){
//     let searchMatches = [];
//     if (album === undefined || album.artist === undefined){
//         return collection;
//     }
//     for (oneAlbum of collection){
//         if(oneAlbum.artist === album.artist && oneAlbum.yearPublished === album.yearPublished){
//             searchMatches.push(oneAlbum);
//         }
//     }
//     return searchMatches;
// } 

// console.log(search({artist: 'Rascal Miles', yearPublished: 2021}));
// console.log(search({artist: 'Skyler Day', yearPublished: 2021}));
// console.log(search({artist: 'Eminem', yearPublished: 2016}));
// console.log(search());
// console.log(search({}));

//Have not finished the above!!!



// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!


// function addToCollection (title, artist, yearPublished, [trackName, duration]){
//     let album = {
//         title ,
//         artist ,
//         yearPublished ,
//         tracks : [trackName, duration],
//         }
//         collection.push(album);
//         return album;
//     }

// function addToCollection (title, artist, yearPublished, [tracks]){
//     let album = {
//         title ,
//         artist ,
//         yearPublished ,
//         let tracks = [],
//         for (let track of tracks){
//             tracks.push(trackName, duration);
//         },
//         }
//         collection.push(album);
//         return album;
//     }

//immediately above is entirely broken

console.log(addToCollection('Tailor Made', 'Rascal Miles', 2021, [{trackName: 'Rotten Roots', duration: '3:11'}, {trackName: 'Water Balloons', duration: '3:09'}]));
console.log(addToCollection('Space Cadet', 'Rascal Miles', 2020, [{trackName: 'Dead Legs', duration: '4:19'}, {trackName: 'Smokin on the Porch', duration: '3:54'}, {trackName: 'Summer Solstice', duration: '3:13'}]));

//not adding third track?  Why?


// function search (album){
//         let searchMatches = [];
//         if (album === undefined || album.artist === undefined){
//             return collection;
//         }
//         for (oneAlbum of collection){
//             if(oneAlbum.artist === album.artist && oneAlbum.yearPublished === album.yearPublished){
//                 searchMatches.push(oneAlbum);
//             }
//         }
//         return searchMatches;
//     } 

// function showCollection (array){
//     console.log(array.length);
//     for (album of array){
//         console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
//     }
// }

// showCollection(collection);

// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
