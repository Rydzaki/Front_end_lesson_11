const employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 6000 },
  { name: "Charlie", salary: 4500 },
];

console.log("1. Задача: Удвоение зарплаты У вас есть массив объектов, представляющих сотрудников с полями имя и зарплата. Используя метод map, удвойте зарплату каждого сотрудника.");

const employeesDoubleSalary = employees.map(({name, salary}, ) => ({name, salary: salary*2}));

console.log(employeesDoubleSalary);

console.log("=========2. Задача: Фильтрация сотрудников Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500==========");
const employeesSalary = employees.filter(({salary}) => (salary > 5500));
console.log(employeesSalary);

console.log('3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.');

const sumSalary = employees.reduce((acc, elem) => acc + elem.salary, 0)
console.log(sumSalary);

console.log('4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.');

const nameUpCase = employees.map(({name, salary}) => ({name: name.toUpperCase(), salary}));
console.log(nameUpCase);