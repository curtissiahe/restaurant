document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  const foodElement = document.getElementById("food");

  const displayFood = (foods) => {
    foods.forEach(food => {
      const articleElement = document.createElement('article');

      const h3Element = document.createElement('h3');
      h3Element.textContent = food.name;

      const img = document.createElement('img');
      img.src = food.image;

      articleElement.appendChild(h3Element);
      articleElement.appendChild(img);

      foodElement.appendChild(articleElement); // Append article to foodElement
    });
  }

  const drinkElement = document.getElementById("drink");

  const displayDrink = (drinks) => {
    drinks.forEach(drink => {
      const articleElement = document.createElement('article');

      const h3Element = document.createElement('h3');
      h3Element.textContent = drink.strDrink;

      const img = document.createElement('img');
      img.src = drink.strDrinkThumb;

      articleElement.appendChild(h3Element);
      articleElement.appendChild(img);

      foodElement.appendChild(articleElement); // Append article to foodElement
    });
  }

  const getFood = async () => {
    try {
      const response1 = await fetch("https://gist.githubusercontent.com/ahmedeltaher/78e7f1b54d4b60af73b9802b38abf3cf/raw/931c5a3a1482a2536f18fedb7858cdc518337338/data.json");
      const response2= await fetch("https://gist.githubusercontent.com/JSpiner/412a532e9aea9a554ea4d13142aaa5dd/raw/bbede48f96fcfd71966df0e9d0c9aa78a10965fa/cocktail.json");
      if (response1.ok) {
        const foodList = await response1.json(); // Declare foodList here
        const drinkList = await response2.json(); // Declare foodList here
        displayFood(foodList);
        displayDrink(drinkList);
      } else {
        throw new Error('Failed to fetch food data');
      }
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
        

  }

  getFood().then(() => {
    console.log("Food list fetched successfully!");
  });
});