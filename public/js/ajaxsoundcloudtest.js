// var song = {
//   query: $('input#search').val()
// }

SC.initialize({
  client_id: 'f4ddb16cc5099de27575f7bcb846636c'
});

//displays tracks with titles
//As a user, I would like to be able to search for songs
SC.get('/tracks', {
  // user: {username: "johnlegend"}
  q: $('input#search').val()
})
.then(function(tracks) {
  tracks.forEach(function(q) {
    // console.log(q.title);
    // console.log("title: ", q.title, "artist: ", q.user.username);
    // $(ul#searchResults).append(q.title, q.user.username);
    return q
  })
  $searchResults.append($renderResults);
});


// displays users name
// AAU I'd like to be able to search for an artist so that I can see the song that they've uploaded
// SC.get('/users', {
//   // user: {username: "johnlegend"}
//   q: 'justin bieber'
// })
// .then(function(tracks) {
//   tracks.forEach(function(q) {
//     // console.log(q.title);
//     console.log("fullname: ", q.full_name);
//   })
// });

