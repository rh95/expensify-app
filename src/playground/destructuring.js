// const person =  {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const {name, age} = person;

// console.log(name + " ist: " + age + " alt!");

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Publish' } = book.publisher
//  console.log(publisherName);

//console.log(publisherName);

// const address = ['1299 S Junper Street', 'Phil','pennsy','44569'];
// const [ street,d, state, zip ] = address;
// console.log(address[1] + "   " + address[2]);


const item = ['Coffee (hot)', '$2.00', "$2.50", '$2.75'];

const [coffee,,mprice] = item; 
console.log(`A medium ${coffee} costs ${mprice}`);
