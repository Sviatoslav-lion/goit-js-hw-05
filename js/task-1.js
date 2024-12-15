function getUserNames(users) {
    
    let userArray = [];           // створюємо порожній масив

    /* Спосб номер раз :)
    for (const usr of users) {      // перебираємо об'єкт
	    userArray.push(usr.name);   // записуємо в порожній масив імена користувачів з об'єкту
    }
    return userArray;       // повертаємо масив імен
    */

    return userArray = users.map(usr => usr.name); // формуємо иа повертаємо масив імен з об'єкту 
}

console.log(
    getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
  ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]