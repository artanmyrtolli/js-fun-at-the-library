

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    // this.greetPatron = function (patron, isMorning) {
    //   if (isMorning == true) {
    //
    //   return `Good morning, ${patron}!`;
    // } else {
    //   return `Hello, ${patron}!`;
    }
    greetPatron (patron, isMorning) {
      if (isMorning == true) {
        //truthy not absolute true will make it work if isMorning parameter is missing
        return `Good morning, ${patron}!`;
      } return `Hello, ${patron}!`;
    }
            //string
    findBook (book) {

        for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
          if (book === this.library.shelves.fantasy[i].title) {
            this.library.shelves.fantasy.splice(i, 1);
            return `Yes, we have ${book}`;
          } return `Sorry, we do not have ${book}`;
        }

//failed attempts at making it dynamic by searching all shelves
// var allShelves = [].concat(this.library.shelves.fantasy, this.library.shelves.fiction, this.library.shelves.nonFiction);
//
//         for (var i = 0; i < allShelves.length; i++) {
//           if (book === allShelves[i].title) {
//             var foundIt = allShelves[i].genre
//           //   console.log(this.library.shelves.shelves[foundIt]);
//           // this.library.shelves.shelves[allShelves[i].genre].splice(i , 1);
//              console.log(this.library.shelves[0]);
//               this.library.shelves.fantasy.splice(i, 1);
//             return `Yes, we have ${book}`;
//           } return `Sorry, we do not have ${book}`;
//         } return `Sorry, we do not have ${book}`;
    };
    calculateLateFee (daysLate) {
      return Math.ceil(daysLate * .25);
    }

}





module.exports = Librarian;
