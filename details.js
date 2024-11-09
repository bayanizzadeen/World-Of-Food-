let meal=JSON.parse(localStorage.getItem('detiles'))
const mainArticle=document.querySelector(".detailesOf")
const imgOfmeal=document.createElement("img")
imgOfmeal.setAttribute("src", meal.strMealThumb)
imgOfmeal.classList.add("picOfmeail")
mainArticle.appendChild(imgOfmeal)
const header=document.createElement("header")
mainArticle.appendChild(header)
const h1=document.createElement("h1")
h1.innerHTML=meal.strMeal
header.appendChild(h1)
const p=document.createElement("p")
p.innerHTML=`Ingridents`
header.appendChild(p)
const childArt=document.createElement("article")
childArt.classList.add("Contener-ingridents")
mainArticle.appendChild(childArt)
const searchString="strIngredient"
for(const key in meal){
    if(key.includes(searchString) && meal[key] !=="" && meal[key] !== null){
        console.log(key)
        const figure=document.createElement("figure")
        figure.classList.add("ingridents")
        const imgOfIngrident=document.createElement("img")
        // const linkingrident=.split(" ").join("%20");
        const srcForIndrident=`https://www.themealdb.com/images/ingredients/${meal[key]}.png`
        console.log(srcForIndrident)
        imgOfIngrident.setAttribute("src",srcForIndrident)
        imgOfIngrident.classList.add("img-of-int")
        figure.appendChild(imgOfIngrident)
        const label=document.createElement("label")
        label.classList.add("label")
        label.innerHTML=meal[key]
        figure.appendChild(label)
        childArt.appendChild(figure)
    }
}
const childArt2=document.createElement("article")
const paragraph1=document.createElement("p")
paragraph1.classList.add("howToPrepare")
paragraph1.innerHTML=`How to Praper`
childArt2.appendChild(paragraph1)
const paragraph2=document.createElement("p")
paragraph2.classList.add("disHowToPrepare")
paragraph2.innerHTML=meal.strInstructions
childArt2.appendChild(paragraph2)
mainArticle.appendChild(childArt2)
// .................................................
const figureVideo=document.createElement("figure")
figureVideo.classList.add("videoFeg")
const WatchTheVideo =document.createElement("p")
WatchTheVideo.classList.add("fig-p")
WatchTheVideo.innerHTML=`Watch The Video`
figureVideo.appendChild(WatchTheVideo)
const iframe=document.createElement("iframe")
iframe.classList.add("iframe")
iframe.setAttribute("src", meal.strYoutube)
iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture")
iframe.setAttribute("title","YouTube video player")
figureVideo.appendChild(iframe)
mainArticle.appendChild(figureVideo)