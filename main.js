

/** Bài 1
 * Tinh tien luong
 * - Đầu vào
 *      + luongNgay
 *      + soNgay
 *
 * - Xử lý
 *      + tienluong * soNgay
 *
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btntinhTienLuong").onclick = function () {
  //lấy thông tin từ user
  var soNgay = document.getElementById("soNgay").value * 1;
  var luongNgay = document.getElementById("luongNgay").value * 1;

  //xu ly
  var total = soNgay * luongNgay;
  soNgay = parseInt(soNgay)
  luongNgay = parseInt(luongNgay)

  var result = "Tổng Là " + total;


  //Show kết quả
  document.getElementById("infoluong").innerHTML = result;
};
  //style
  document.getElementById("infoluong").classList.add("alert-success");

  
/** Bài 2 
 * Tinh giá trị trung bình
 * - Đầu vào
 *      + Numb1
 *      + Numb2
 *      + Numb3
 *      + Numb4
 *      + Numb5
 * - Xử lý
 *      + (Numb1 + Numb2 + Numb3 + Numb4 + Numb5) / 5
 *
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btnTinhTrungBinh").onclick = function () {
  //lấy thông tin từ user
  var Numb1 = document.getElementById("Numb1").value * 1;
  var Numb2 = document.getElementById("Numb2").value * 1;
  var Numb3 = document.getElementById("Numb3").value * 1;
  var Numb4 = document.getElementById("Numb4").value * 1;
  var Numb5 = document.getElementById("Numb5").value * 1;
  
   //xu ly
   var Average = (Numb1 + Numb2 + Numb3 + Numb4 + Numb5 ) / 5

   Numb1 = parseInt (Numb1);
   Numb2 = parseInt (Numb2);
   Numb3 = parseInt (Numb3);
   Numb4 = parseInt (Numb4);
   Numb5 = parseInt (Numb5);

   var result = "Trung Bình Là " + Average
     //Show kết quả
  document.getElementById("infoTrungBinh").innerHTML = result;
};
  //style
  document.getElementById("infoTrungBinh").classList.add("alert-success");

/** Bài 3
 * Quy Đổi Tiền
 * - Đầu vào
 *      + Số USD
 *      + Giá USD
 * 
 * - Xử lý
 *      + Số USD * Giá USD
 * 
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btnDoiTienTe").onclick = function () {
  //lấy thông tin từ user
  var soUSD = document.getElementById("soUSD").value * 1;
  var giaUSD = document.getElementById("giaUSD").value * 1;

  //xu ly
  var Tich = soUSD * giaUSD;
  soUSD = parseInt(soUSD)
  giaUSD = parseInt(giaUSD)


  var result = "Tổng Là " + Tich + "$";


  //Show kết quả
  document.getElementById("infoTienTe").innerHTML = result;
};
  //style
  document.getElementById("infoTienTe").classList.add("alert-success");

/** Bài 4
 * Tính Diện Tích Chu Vi
 * - Đầu vào
 *      + Length
 *      + Width
 * 
 * - Xử lý
 *      + Area = Length * Width;
 *      + Perimeter = (Width + Length) *2;
 * - Đầu ra
 *      + Show kết quả
 */
  document.getElementById("btnDienTichChuVi").onclick = function () {
    //lấy thông tin từ user
    var Length = document.getElementById("Length").value * 1;
    var Width = document.getElementById("Width").value * 1;
   
     //xu ly
     var Area = Length * Width;
     var Perimeter = (Width + Length) *2;
  
     Length = parseInt (Length);
     Width = parseInt (Width);
  
     var result =""
     result = "Diện Tích Là " + Area
     result = "Chu Vi Là " + Perimeter
      //Show kết quả
    document.getElementById("infoDienTichChuvi").innerHTML = result;
  };
    //style
    document.getElementById("infoDienTichChuvi").classList.add("alert-success");


    /** Bài 5
 * Tổng 2 ký số
 * - Đầu vào
 *      + Number1
 * 
 * - Xử lý
 *      + donVi = Number1 % 10;
 *      + hangChuc = Number1 /10;
 *      + Sum = donVi + hangChuc;
 * - Đầu ra
 *      + Show kết quả
 */

    document.getElementById("btnSum").onclick = function () {
      //lấy thông tin từ user
      var Number1 = document.getElementById("Number1").value * 1;
     
       //xu ly
       var donVi = Number1 % 10;
       var hangChuc = Number1 /10;
       var Sum = donVi + hangChuc;
    
       Number1 = parseInt (Number1);
    
       var result =""
       result = "Tổng 2 ký số là " + Sum
        //Show kết quả
      document.getElementById("btnSum").innerHTML = result;
    };
      //style
      document.getElementById("infoSum").classList.add("alert-success");