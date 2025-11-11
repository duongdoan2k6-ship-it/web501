// bai 1

function getFirstLast(array) {
  const [first, ...rest] = array;
  const last = rest[rest.length - 1];
  return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]


function swapElements(arr) {
  const newArr = [...arr];
  [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
  return newArr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

// bai 2

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo({ personalInfo: { name, contact: { email } } }) {

  return { name, email };
}

console.log(getUserInfo(user));


function createProduct({ name, price, category = "general", inStock = true }) {
  return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });

console.log(product);


// bài 3
function delay(ms) {

  return new Promise((resolve) => {

    setTimeout(resolve, ms);

  });

}



console.log("Bắt đầu...");

delay(2000).then(() => {

  console.log("2 giây đã trôi qua");

}); function fetchMultipleData(urls) {

  const fetchPromises = urls.map(url =>

    fetch(url).then(response => {

      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);

      }

      return response.json();

    })

  );



  return Promise.all(fetchPromises);

}



const urls = [

  "https://jsonplaceholder.typicode.com/users/1",

  "https://jsonplaceholder.typicode.com/users/2",

  "https://jsonplaceholder.typicode.com/users/3"

];



console.log("Đang tải dữ liệu...");

fetchMultipleData(urls)

  .then(users => {

    console.log("Tải thành công!");

    console.log(users.map(user => user.name));

  })

  .catch(error => {

    console.error("Đã xảy ra lỗi:", error);

  });