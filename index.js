// bai tap 1
 /* input:lương 1 ngày, số ngày làm
    process:
    1.lấy input
    2.tính lương= số ngày *lương 1 ngày
    3.log ra màn hình
    output:tiền lương
  */
function demoWhile(){
    var value = +document.getElementById("txtNum").value;
    var salaryPerDay = 200000;
    var salary = value*salaryPerDay;
    document.getElementById("resultBT1").innerHTML= salary;
}

 //  bai tap 2
   /* input: 5 số thực
       process
       1.lấy 5 số thực
       2.tính trung bình 5 số
       3,log ra màn hình 
       ouput: trung bình 5 số
   */
function calcAvarage5(){
    var num1 = +document.getElementById("txtNum1Bt2").value;
    var num2 = +document.getElementById("txtNum2Bt2").value;
    var num3 = +document.getElementById("txtNum3Bt2").value;
    var num4 = +document.getElementById("txtNum4Bt2").value;
    var num5 = +document.getElementById("txtNum5Bt2").value;
    var ave = (num1+num2+num3+num4+num5) / 5;
    document.getElementById("resBt2").innerHTML = ave;
}

 // bai tap 3
   /* 
   input:giá usd, tiền usd
   process:
       1.lấy input số tiền đô
       2.lấy tiền đô*tiền việt
       3.log ra số tiền việt
   output:đổi ra tiền việt
   */
  function changeMoney(){
    var vnd = 23500;
    var usd = +document.getElementById("txtNumBt3").value;
    var moneyChange = vnd*usd;
    document.getElementById("resBt3").innerHTML = moneyChange;
  }
   // bài tập 4
   /* 
   input:chiều dài, chiều rộng HCN
   process:
       1. láy input chiều dài, chiều rộng Hcn
       2.tính chu vi hcn:(dài+rộng)/2
       3. tính diện tích hcn:dài*rộng
       4. log ra màn hình chu vi và diện tích
   output:diện tích, chu vi
   */
  function calcPerimeter(){
    var width = +document.getElementById("txtNumBt4Width").value;
    var height = +document.getElementById("txtNumBt4Height").value;
    var perimeter = (width + height)/2;
    document.getElementById("resBt41").innerHTML = perimeter;
  }
  function calcSquare(){
    var width = +document.getElementById("txtNumBt4Width").value;
    var height = +document.getElementById("txtNumBt4Height").value;
    var square = width * height;
    document.getElementById("resBt42").innerHTML = square;
  }

  // bài tập 5
   /* 
   input:nhập số 2 chữ số
   procese:
       1.lấy input chữ số có 2 số
       2.lấy số hàng chục:so /1 0
       3.lấy số hàng đơn vị: so % 10
       4.tính tổng 2 số 
   output:tổng 2 ký số 
   */
function calcSum(){
    var inputNum = +document.getElementById("txtNumBt5").value;
    var num1 = inputNum%10
    var num2 = Math.floor(inputNum/10)
    var sum = num1 + num2;
    document.getElementById("resBt5").innerHTML = sum;
}