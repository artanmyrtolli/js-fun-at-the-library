

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function (patron, isMorning) {
      if (isMorning == true) {
        //truthy not absolute true will make it work for Scott
      return `Good morning, ${patron}!`;
    } else {
      return `Hello, ${patron}!`;
    }
    }
  }
    findBook (book) {
      console.log(checkoutBook (library, book, 'fantasy'));


  }
};



module.exports = Librarian;
