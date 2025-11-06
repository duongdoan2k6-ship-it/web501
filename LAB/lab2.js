// bai 1
for (let  i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); 
  }, 100);
}

// bai 2

const student = {
  name: "ThuyTien",
  age: 20,
};

student.grade = "A";
student.age = 21;

console.log(student);

// bai 3 
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại hệ thống của chúng tôi! 🎉
Dưới đây là thông tin đơn hàng của bạn:

 Sản phẩm: ${user.product}
 Giá: ${user.price.toLocaleString()} VNĐ
 Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ sớm để xác nhận và giao hàng.
Xin cảm ơn quý khách đã tin tưởng mua sắm cùng chúng tôi!

Trân trọng,
Đội ngũ Hỗ trợ Khách hàng
`;

console.log(emailTemplate);


// bai 4

const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};


const finalPrice = product.price * (1 - product.discount / 100);


const productCard = `
<div>
  <h3>${product.name}</h3>
  <p>Giá gốc: ${product.price.toLocaleString()} VNĐ</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p>Giá sau giảm: ${finalPrice.toLocaleString()} VNĐ</p>
  <p>Tình trạng: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>
`;

console.log(productCard);

// bai 5


const width = 100;
const height = 200;
const color = "red";


const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

console.log(rectangle.calculateArea()); 
console.log(rectangle.describe()); 

// bai 6
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
  [`api_${env}_${version}`]: "https://api.example.com",
  [`feature_${features[0]}`]: true,
  [`feature_${features[1]}`]: true,
  [`feature_${features[2]}`]: false,
  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return `API: ${this[`api_${env}_${version}`]} - Features: ${features.join(", ")}`;
  },
};

console.log(config.api_production_v2);
console.log(config.feature_auth);
console.log(config.getProductionConfig());

