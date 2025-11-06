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
