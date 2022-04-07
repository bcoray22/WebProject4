const gamesDao = require('../model/gamesDAO');

test('Number of Games',function() {
    let numberOfGames = gamesDAO.read.length();    
    expect(numberOfGames).toBe(8); // when games.json is occupied by the original list of games
});

test('Deleting Game decreases length of games', function() {
    let numberOfGamesBeforeDel = gamesDAO.read.length;
    gamesDao.del(1);
    let numberOfGamesAfterDel = games.read.length;
    expect(numberOfGamesAfterDel - numberOfGamesBeforeDel).toBe(1);
});

test('Correct game deleted', function() {

});


test('Edit Game Keeps length of games the same', function() {
    let numberOfGamesBeforeEdit = gamesDao.read.length;
    // edit here
    let numberOfGamesAfterDel = gamesDao.read.length;
    expect(numberOfGamesAfterDel - numberOfGamesBeforeEdit).toBe(1);
});

test('Correct game edited', function() {

});
