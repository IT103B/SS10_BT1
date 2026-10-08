const books = [
  {
    bookCode: "B01",
    title: "Dế Mèn Phiêu Lưu Ký",
    category: "Văn học",
    price: 50000,
    totalCopies: 3,
    availableCopies: 1,
    shelfLocation: "A1-01",
  },
  {
    bookCode: "B02",
    title: "Lập Trình JavaScript",
    category: "Công nghệ",
    price: 120000,
    totalCopies: 5,
    availableCopies: 4,
    shelfLocation: "B2-03",
  },
  {
    bookCode: "B03",
    title: "Tuổi Thơ Dữ Dội",
    category: "Văn học",
    price: 95000,
    totalCopies: 2,
    availableCopies: 0,
    shelfLocation: "A1-02",
  },
];

console.log("=== CREATE: NHẬP KHO ẤN BẢN MỚI ===");
books.push({
  bookCode: "B04",
  title: "Nhà Giả Kim",
  category: "Tiểu thuyết",
  price: 80000,
  totalCopies: 4,
  availableCopies: 4,
  shelfLocation: "C1-05",
});
console.log("Đã nhập sách B04 - Nhà Giả Kim.");

console.log("\n=== UPDATE: XUẤT MƯỢN SÁCH B01 ===");
let borrowedBook = null;
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B01") {
    borrowedBook = books[i];
    break;
  }
}

if (borrowedBook === null) {
  console.log("Không tìm thấy sách B01.");
} else if (borrowedBook.availableCopies <= 0) {
  console.log("Không thể cho mượn: B01 đã hết sách trên kệ.");
} else {
  borrowedBook.availableCopies--;
  console.log(
    `Đã cho mượn B01. Số sách còn trên kệ: ${borrowedBook.availableCopies}.`,
  );
  if (borrowedBook.availableCopies === 0) {
    console.log("Trạng thái: HẾT SÁCH TRÊN KỆ");
  }
}

console.log("\n=== UPDATE: CHUYỂN VỊ TRÍ KỆ ===");
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B02") {
    books[i].shelfLocation = "B3-01";
    console.log(`Đã chuyển B02 đến kệ ${books[i].shelfLocation}.`);
    break;
  }
}

console.log("\n=== DELETE: THANH LÝ SÁCH HỎNG ===");
let disposedIndex = -1;
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B03") {
    disposedIndex = i;
    break;
  }
}

if (disposedIndex === -1) {
  console.log("Không tìm thấy sách B03 để thanh lý.");
} else {
  const disposedBook = books.splice(disposedIndex, 1)[0];
  console.log(`Đã thanh lý ${disposedBook.bookCode} - ${disposedBook.title}.`);
}

let totalTitles = 0;
let totalCopies = 0;
let totalAvailableCopies = 0;
let totalAssetValue = 0;

for (let i = 0; i < books.length; i++) {
  totalTitles++;
  totalCopies += books[i].totalCopies;
  totalAvailableCopies += books[i].availableCopies;
  totalAssetValue += books[i].totalCopies * books[i].price;
}

const currency = new Intl.NumberFormat("vi-VN");
const line = "+----------+--------------------------+--------------+--------+-----------+-----------+------------+";
console.log("\n=== READ: BẢNG KIỂM KÊ KHO ẤN BẢN ===");
console.log(line);
console.log(
  `| ${"Mã sách".padEnd(8)} | ${"Tên sách".padEnd(24)} | ${"Danh mục".padEnd(12)} | ${"Giá".padEnd(6)} | ${"Tổng cuốn".padEnd(9)} | ${"Còn kệ".padEnd(9)} | ${"Vị trí".padEnd(10)} |`,
);
console.log(line);

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const shelfStatus =
    book.availableCopies === 0
      ? `${book.shelfLocation}*`
      : book.shelfLocation;
  console.log(
    `| ${book.bookCode.padEnd(8)} | ${book.title.padEnd(24)} | ${book.category.padEnd(12)} | ${currency.format(book.price).padEnd(6)} | ${String(book.totalCopies).padEnd(9)} | ${String(book.availableCopies).padEnd(9)} | ${shelfStatus.padEnd(10)} |`,
  );
}

console.log(line);
console.log(`Tổng đầu sách       : ${totalTitles}`);
console.log(`Tổng số lượng sách  : ${totalCopies} cuốn`);
console.log(`Số sách còn trên kệ : ${totalAvailableCopies} cuốn`);
console.log(`Tổng giá trị tài sản: ${currency.format(totalAssetValue)} VNĐ`);
console.log("* Vị trí có dấu *: HẾT SÁCH TRÊN KỆ");
