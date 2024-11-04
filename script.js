const mainNav=document.querySelector(mainNav)
const firstName=document.getElementById("FirstName")
const lastName=document.getElementById("LastName")
const email=document.getElementById("email")
const registers=[];

mainNav.addEventListener("click" , function(e){
    if(e.target.tagName==="IMG"){
    }
    else if(e.target.tagName==="SVG"){
}})

function submitRegister(){
    if(firstName.value==='' || lastName.value==="" || email.value===""){
        alert("You must fill in all fields.")
       } 
       else{
        registers.push({
            FirstName:firstName,
            LastName:lastName,
            Email:email
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