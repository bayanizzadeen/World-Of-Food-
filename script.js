// const logo=document.querySelector("#logo")
// const menu=document.querySelector("#menu")//كنت عاملتها اد افنت ليسنر بس مادي بعص مزاجي وخلاها  href في كل صفحة html
const firstName=document.getElementById("FirstName")
const lastName=document.getElementById("LastName")
const email=document.getElementById("email")
// logo.addEventListener("click" ,()=>{
//     window.open("http://127.0.0.1:5500/World-Of-Food-/pages/meals.html")
// })
// const registers=JSON.parse(localStorage.getItem('Registers')) || [] registers stored in local
const registers=[];
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
        // console.log(registers)
        window.open ("./pages/meals.html")
        
       }
}
function saveData(){
    const register= JSON.stringify(registers);
    localStorage.setItem("Registers",register)
}
// ------------------------------------------------------------------------------------------------------------
// script-MediaList.html
let wishList=JSON.parse(localStorage.getItem('wishlist')) || []
const mainArt=document.querySelector(".container")//contaner
const all=document.querySelector("#all")
let mealslist=[] //list of all meals
let mealsFilterdArray=[]
const Areas=document.querySelector(".nav2")
let childAreas=[];
fetch("../assets/meals.json")//...................................all meals
.then(response=>{
    return response.json()
})
.then(data=>{
    mealslist=data.meals;//add all meals in array
    makeArts(mealslist);
})
fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list") //names of areas
.then(response=>{
    return response.json()
    // console.log(response)
    
})
.then(data=>{
    // console.log(data.meals)
    childAreas=data.meals
    // console.log(childAreas)
    data.meals.map(element => {
        // console.log(element)
       const nameOfArea=document.createElement("a")
       nameOfArea.classList.add("link")
       nameOfArea.innerHTML=element.strArea
       Areas.appendChild(nameOfArea)
       nameOfArea.addEventListener("click",()=>{ 
       mealsFilterdArray=mealslist.filter(x => x.strArea==element.strArea)
    //    console.log(mealsFilterdArray)
       mainArt.innerHTML=""
       makeArts(mealsFilterdArray); //....................................make the child article
        all.classList.remove("background")
        
       //  .......................................................................remove background color
       Array.from(Areas.children).forEach(child => {
        // Process each child here, e.g., adding a class or logging
        child.classList.remove("background");
        // console.log(child); // Outputs each child's tag name
        
        });
        
        nameOfArea.classList.add("background")
       
     


    })
})
})
.catch(error => { 
    console.log('Something went wrong', error);
  });

all.addEventListener("click",()=>{
    fetch("../assets/meals.json")//...................................all meals
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        mealslist=data.meals;//add all meals in array
        makeArts(mealslist);
    })
    Array.from(Areas.children).forEach(child => {
        // Process each child here, e.g., adding a class or logging
        child.classList.remove("background");
        // console.log(child); // Outputs each child's tag name
        
        });
    all.classList.add("background")    
})

const makeArts=(array)=>{
    array.map(element=>{
         //................make the child article
         const childArt=document.createElement("article")
         childArt.classList.add("meal")
         const imgOfmeal=document.createElement("img")//do append
         imgOfmeal.setAttribute("src", element.strMealThumb)
         const Explane=document.createElement("figure")//do append
         Explane.classList.add("explane")
         const nameofmeal=document.createElement("h2")
         //.................................................//cuting the name
         let name =element.strMeal;
         const maxLengthName = 32;
         if (name.length > maxLengthName) {
             name = name.substring(0, maxLengthName) + "...";
           }
         nameofmeal.innerHTML=name;
         Explane.appendChild(nameofmeal)
         // ..............................................
         const divIcons=document.createElement("div")
 
         divIcons.classList.add("icons")
         
        
        const video=document.createElement("i")
        video.classList.add("fa", "fa-play","white");
        const href=element.strYoutube//add link for video icon
        const videoHref=document.createElement("a")
        videoHref.appendChild(video)
        videoHref.setAttribute("href", href)
        divIcons.appendChild(videoHref)
        const heart=document.createElement("i")
        heart.classList.add("fa", "fa-heart", "white");
        divIcons.appendChild(heart)
        Explane.appendChild(divIcons)
        let exists = wishList.some(item => item.idMeal === element.idMeal);//if meals in wishlist
        if(exists){
            heart.classList.add("red")
        }
        const firstPra=document.createElement("p")
         firstPra.classList.add("p1")
        let paragraph =element.strInstructions;//cuting the paragraph
         const maxLength = 140;

        //  console.log(paragraph)
         if (paragraph.length > maxLength) {
             paragraph = paragraph.substring(0, maxLength) + "...";
           }
        firstPra.innerHTML=paragraph;
        //  console.log(paragraph)
         Explane.appendChild(firstPra)
         const secPra=document.createElement("p")
         secPra.classList.add("p2")
         secPra.innerHTML=`Check More Information`
         secPra.addEventListener("click",()=>{//........................add meal in local for details
            window.open('./details.html')
            localStorage.setItem("detiles",JSON.stringify(element))
         })
         Explane.appendChild(secPra)
         //........................append all
         childArt.appendChild(imgOfmeal)
         childArt.appendChild(Explane)
         heart.addEventListener("click",()=>{//add eventlistener to heart icone
            
            let someThing = wishList.some(item => item.idMeal === element.idMeal);
            heart.classList.toggle("red")
            
            if(someThing ){
                
             wishList=wishList.filter((ele)=>ele.idMeal != element.idMeal)
             localStorage.setItem('wishlist',JSON.stringify(wishList))
            }
            else{
             
             wishList.push(element)
             localStorage.setItem('wishlist',JSON.stringify(wishList))  
            }
            
           
        })
         mainArt.appendChild(childArt)
        
    })
}

//----------------------------------------------------------------------