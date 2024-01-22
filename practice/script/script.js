const user = {
  name: "Анатолий",
  lastName: "Joht",
  age: 31,
};

console.log(user["name"]);
console.log(user.name);

user.salary = 3200; // добавить ключи
console.log(user);

user.salary = 3500;
console.log(user);

const users = [
  {
    id: 1,
    name: "Anatoliy",
    age: 31,
  },
  {
    id: 2,
    name: "Masha",
    age: 29,
  },
  {
    id: 3,
    name: "Petr",
    age: 33,
  },
];
console.log(users);

for (const user of users) {
  if (user.age > 30) {
    console.log(user.name);
  }
}
console.log("======================================================");

users.filter((n) => n.age > 30).forEach((n) => console.log(n.name));

console.log("======================================================");

users.forEach((elem) => {
  if (elem.ege > 30) {
    console.log(elem.name);
  }
});
console.log("======================================================");

const obj = {
  a: 12,
  b: 15,
  c: 21,
};

const { a, b, c } = obj;
console.log(a, c);

function handler({a,b}){
    //const {a,b} = obj;
    console.log(a, b);
}
handler(obj);

console.log("======================================================");

users
.filter(({age}) => age > 30)
.forEach(({name, age}) => console.log(name, age));

console.log("======================================================");

const evenId = users
.filter(({id}) => id %2 === 0)
.map(({name}) => (name)); // map забивает новый массив
console.log(evenId);

console.log("======================================================");

const product = [
    {
        name: "Ноутбук",
        price: 1200,
        brand: "Acer",
        inStock: true
    },
    {
        name: "Смартфон",
        price: 500,
        brand: "Samsung",
        inStock: false
    },
    {
        name: "Планшет",
        price: 300,
        brand: "Apple",
        inStock: true
    },
    {
        name: "Клавиатура",
        price: 50,
        brand: "Samsung",
        inStock: true
    }
];

const result = product.filter(({inStock}) => inStock); // true
console.log(result);

console.log("======================================================");

const resultSamsung = product
.filter(({brand}) => brand === "Samsung")
.map(({name}) => name);
console.log(resultSamsung);

const numbers = [12, 5, 3, 36, 4, 8];

const sum = numbers.reduce((acc, elem) => acc + elem);
console.log(sum);

// (acc, elem) => acc + elem
// acc = 12 elem = 5 return = 17
// acc = 17 elem = 3 return = 20
// acc = 20 elem = 6 return = 26
// acc = 26 elem = 4 result = 30
// acc = 30 elem = 8 result = 38

console.log("======================================================");

const maximum = numbers.reduce((acc, elem) => (acc > elem ? acc : elem));
console.log(maximum);
console.log("======================================================");

const multi = numbers.reduce((acc, elem) => acc * elem);
console.log(multi);

console.log("======================================================");

const result2 = product.reduce((acc, item) => acc + item.price, 0);
console.log(result2);

console.log("======================================================");

const min = product.reduce((acc, elem) => (acc < elem ? acc.price : elem.price));
console.log(min);



const result3 =  product.reduce((acc, {price}) => acc > price? price : acc,
product[0].price
);
console.log(result3);
