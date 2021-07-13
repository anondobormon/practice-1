// var result = 56
// var names = 'Joseph'
// var school = 'Kurigram'
// var village = 'Anontopur'

// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }

const callback = (name, func) => {
  setTimeout(() => {
    console.log("work is ongoing111");
    func(name);
  }, 3000);
};

const callback2 = (name, func) => {
  setTimeout(() => {
    console.log("work is ongoing222");
    func(name);
  }, 3000);
};

console.log("Akash");
console.log("Batash");

callback("mary", function () {
  callback2("John", function (name) {
    setTimeout(() => {
      console.log(`Finished work ${name}`);
    }, 3000);
  });
});

console.log("nill");
