let clock = document.getElementById("clock")

function myTime(){
  d = new Date();
  let hoursNow = d.getHours();
  let minutesNow = d.getMinutes();
  let secondsNow = d.getSeconds();
  if (secondsNow <10){
    secondsNow = "0"+secondsNow;
  }
  if (minutesNow <10){
    minutesNow = "0"+minutesNow};
  clock.innerHTML = `${hoursNow}:${minutesNow}:${secondsNow}`
}

setInterval(myTime,1000);

let ourForm = document.getElementById("ourForm");
let ourInput = document.getElementById("ourInput");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourInput.value);
})
 
 function createItem(x){
   ourHTML = `<li>${x}  <button onclick = "deleteItem(this)">delete</button></li>`
   ourList.insertAdjacentHTML("beforeend",ourHTML)
   ourInput.value = "";
   ourInput.focus();
   
 }

function deleteItem(elementToDelete){
  elementToDelete.parentElement.remove()
}