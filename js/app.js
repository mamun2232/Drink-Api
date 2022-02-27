

const dataLoad =() =>{
          const searchFled = document.getElementById('search-fled')
          const searchText = searchFled.value
          
          searchFled.value = ''
          
          if(isNaN(searchText) == false){
            const p = document.getElementById('arrow-massage').innerText = `Sorry Please Type someting.`

          }
          else{
            const url =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            fetch(url)
            .then(res => res.json())
            .then(data => displayShow(data.drinks))

          }

           
          

         
}


const displayShow = (drinks) => { 
   
          const displayCard = document.getElementById('card')
          displayCard.textContent = ''
          if(!drinks){
              const p = document.getElementById('arrow-massage').innerText = `Sorry not find.Please Valid Item Search....`
          }
          drinks.forEach(drink => {
                    const div = document.createElement('div')
                    div.innerHTML = `
                    <div class="row g-0 mb-3">
                       <div class="col-md-4">
                       <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start mt-3 ms-1" alt="...">
                    </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${drink.strCategory}</h5>
                            <p class=" text-muted">${drink.strGlass}</p>
                            <p class="card-text">${drink.strInstructions}</p>
                            <a onclick="detalsDrink('${drink.idDrink}')" class="card-text text-danger"><small class="">Laren More</small></a>
                    </div>
                    </div>
                    </div>

                    ` 
                    displayCard.appendChild(div)
                        
          })
          
          
}

const detalsDrink = (drinkId) =>{
    
          
          const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}
          `)
          fetch(url)
          .then(res => res.json())
          .then(data => showDetalsDisplayDeink(data.drinks[0]))
          
}

const showDetalsDisplayDeink = (detals) =>{
         
          const drinkDetils = document.getElementById('drink-detils')
          drinkDetils.textContent = ''
          document.getElementById('hide-image').style.display = 'none'
          const div = document.createElement('div')
          div.innerHTML = `

          <div class="images1 ">
          <img class="img-fluid rounded-circle w-25 d-block mx-auto mb-3" src="${detals.strDrinkThumb}" alt="">

          </div>
          <h5>Name              : ${detals.strCategory}</h5>
          <p>Category           : ${detals.strCategory}</p>
          <p>Glass              : ${detals.strGlass}</p>
          <p>Item               : ${detals.strIngredient1}</p>
        
          <p>Deccription        :${detals.strInstructions}</p>
          <p>Date               : ${detals.dateModified}</p>

          <button onclick="delect()" class="btn btn-danger mb-4">Delect</button>
          
          
          
          `

          drinkDetils.appendChild(div)
          

}         

const delect  = () =>{
    
    document.getElementById('hide-image').style.display = 'block'
    document.getElementById('drink-detils').style.display = 'none'
}
