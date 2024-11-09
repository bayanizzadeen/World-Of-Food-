let wishList=JSON.parse(localStorage.getItem('wishlist')) || []
const mainArt=document.querySelector(".container")//contaner
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
         Explane.appendChild(secPra)
         //........................append all
         childArt.appendChild(imgOfmeal)
         childArt.appendChild(Explane)
         heart.addEventListener("click",()=>{//add eventlistener to heart icone
            mainArt.removeChild(childArt);
            wishList.pop(element)
            localStorage.setItem('wishlist',JSON.stringify(wishList))
        })
         mainArt.appendChild(childArt)
        
    })
}
makeArts(wishList)