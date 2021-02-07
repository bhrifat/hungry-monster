// Search meal by name
function findMeal(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => {
            const mealArray = data.meals;
            mealArray.forEach(meal => {
                displayMeal(meal);
            });
        })
        .catch(error => alert("We don't have this item! Kindly choose between what we have!"))
}
// Meal container
const displayMeal = mealContainer => {
        const mealArea = document.getElementById('mealArea');
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo =
            `<img onclick="displayIngredient('${mealContainer.idMeal}')" class="mealPhoto" src="${mealContainer.strMealThumb}" alt="">
              <h3 onclick="displayIngredient('${mealContainer.idMeal}')" class="mealName">${mealContainer.strMeal}</h3>`
        mealDiv.innerHTML = mealInfo;
        mealArea.appendChild(mealDiv);
    }
    // search button handler
document.getElementById('search').addEventListener('click', function() {
    const meal = document.getElementById('meal').value;
    // checking empty search box
    if (meal == "") {
        alert("You haven't search with proper meal name!");
    } else {
        findMeal(meal);
    }

})

// Lookup full meal details by id
const displayIngredient = name => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
            .then(res => res.json())
            .then(data => {
                const Array = data.meals;
                Array.forEach(id => {
                    ingredient(id)
                });
            })
    }
    // Display ingredients
const ingredient = ingredientID => {
    const ingredientsArea = document.getElementById('ingredientsArea');
    ingredientsArea.innerHTML = `<div class="ingredient">
          <img class="ingredient-img" src="${ingredientID.strMealThumb}" alt="">
          <h2 class="ingredientName">${ingredientID.strMeal}</h2>
          <h4 class="ingredientID-title">Ingredients: </h4>
          <ol>
              <li> ${ingredientID.strIngredient1}</li>
              <li> ${ingredientID.strIngredient2}</li>
              <li> ${ingredientID.strIngredient3}</li>
              <li> ${ingredientID.strIngredient4}</li>
              <li> ${ingredientID.strIngredient5}</li>
              <li> ${ingredientID.strIngredient6}</li>
              <li> ${ingredientID.strIngredient7}</li>
              
          </ol>
      </div>`
}

// End