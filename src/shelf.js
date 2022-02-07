



function shelfBook (book, sciFiShelf) {
    if (sciFiShelf.length < 3) {
      sciFiShelf.unshift(book);
      return sciFiShelf;
    } return sciFiShelf;

};

function unshelfBook (book, sciFiShelf) {
    for (var i = 0; i < sciFiShelf.length; i++){
      if (book === sciFiShelf[i].title) {
        sciFiShelf.splice(i, 1);
      }
    }
}


function listTitles (fantasyShelf) {
var titles = [];
  for (var i = 0; i < fantasyShelf.length; i++){
        titles.push(fantasyShelf[i].title);
      } return titles.join(', ');
}


function searchShelf (sciFiShelf, book) {
 for (var i = 0; i < sciFiShelf.length; i++) {
   if (book === sciFiShelf[i].title ) {
     return true;
   }
 } return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
