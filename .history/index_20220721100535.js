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