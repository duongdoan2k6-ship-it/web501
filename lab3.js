// bai 1

// Function 1
// function multiply(a, b) {
//   return a * b;
// }

const  multiplyArrow = (a, b) => a * b;

// Function 2
// function isPositive(number) {
//   return number >= 0;
// }

const isPositiveArrow = (number) => number >= 0;


// Function 3
// function getRandomNumber() {
//   return Math.random();
// }

const getRandomNumberArrow = () => Math.random();

// Function 4
document.addEventListener("click", function () {
  console.log("Clicked!");
});

//Chuyển hàm sau thành arrow functions:
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });

                         
document.addEventListener("click", () => {
  console.log("Clicked!");
});


// bai 2
// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
  name,
  age,
  isAdmin,
});


// bai 3


const mergeArrays = (...arrays) => [].concat(...arrays);

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));



const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);

console.log(sumAll(1, 2, 3, 4, 5));


const createProduct = (info = {}) => {
  const defaultProduct = {
    name: "Sản phẩm chưa đặt tên",
    price: 0,
    quantity: 1,
    category: "Chưa phân loại",
  };
  return { ...defaultProduct, ...info };
};


console.log(createProduct({ name: "Laptop", price: 1500 }));



// bai 4
const shoppingCart = (customerName, ...products) => {
  return {
    customer: customerName,
    products: products,
    totalItems: products.length,
    createdAt: new Date().toLocaleString(),
  };
};


const order1 = shoppingCart(
  "Nguyễn Văn A",
  "Laptop",
  "Chuột không dây",
  "Bàn phím cơ"
);

console.log(order1);
