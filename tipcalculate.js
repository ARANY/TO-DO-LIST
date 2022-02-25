

function chek(x){
    alert(`the ${x}`)
}
function calculateTip(){
   var billAMount = document.getElementById("billamount").value;
   var serviceqty = document.getElementById("serviceqty").value;
   var people = document.getElementById("people").value;

   if(billAMount === "" || serviceqty == 0){
       alert("You have to enter value")
   }
   else if(people === "" || people <= 1){
       people = 1
       document.getElementById("each").style.display = "none";
   } else {
       document.getElementById("each").style.display = "block";
    }
   //calculate the tip

   var totalTip = (billAMount * serviceqty) / people;

   //var totalTip = Math.round(totalTip);
   var totalTip = totalTip.toFixed(2);
   //var totalTip = Math.round(totalTip);

   //var totalTip = totalTip.toFixed(2);
  


   //display the totalTip
   document.getElementById("totalTip").style.display = "block";
   document.getElementById("tip").innerHTML = totalTip;
}
//prevent tipamount on reload
newFunction();


function newFunction() {
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
}

// click to call function 
document.getElementById("calculateButton").onclick = () => {
    calculateTip();
};

