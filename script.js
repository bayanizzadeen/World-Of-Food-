const logo=document.querySelector("#logo")
const menu=document.querySelector("#menu")
const firstName=document.getElementById("FirstName")
const lastName=document.getElementById("LastName")
const email=document.getElementById("email")
// const registers=JSON.parse(localStorage.getItem('Registers')) || []
const registers=[];
logo.addEventListener("click" ,()=>{
    window.open("http://127.0.0.1:5500/World-Of-Food-/pages/meals.html")
})
menu.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/World-Of-Food-/pages/wishList.html")
})

   


function submitRegister(){
    if(firstName.value==='' || lastName.value==="" || email.value===""){
        alert("You must fill in all fields.")
       } 
       else{
        registers.push({
            FirstName:firstName.value,
            LastName:lastName.value,
            Email:email.value
        })
        saveData();
        console.log(registers)
        window.open ("http://127.0.0.1:5500/World-Of-Food-/pages/meals.html")
        
       }
}
function saveData(){
    const register= JSON.stringify(registers);
    localStorage.setItem("Registers",register)
}