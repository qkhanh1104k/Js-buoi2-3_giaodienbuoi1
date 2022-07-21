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