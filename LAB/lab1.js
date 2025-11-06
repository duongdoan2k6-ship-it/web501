// bai 1

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let category = "";
  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }

  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}
console.log(calculateBMI(55, 1.70));



// bai 2
function createBook(title, author, year, price) {
  const discountKey = "calculateDiscount";
  return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `Sách: ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price.toLocaleString()} VNĐ`;
    },
    [discountKey](discountPercent) {
      const discountedPrice = this.price - (this.price * discountPercent) / 100;
      return `Giá sau giảm ${discountPercent}%: ${discountedPrice.toLocaleString()} VNĐ`;
    },
  };

}
const book = createBook("JavaScript", "ABC 123", 2024, 150000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); 
