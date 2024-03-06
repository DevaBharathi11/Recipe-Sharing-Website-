// Sample data for demonstration
var recipes = [
    { name: "Pasta Carbonara", instructions: "1. Cook pasta in boiling water. 2. Fry bacon until crisp. 3. Mix pasta with beaten eggs and grated cheese. 4. Combine with bacon and serve." },
    { name: "Chocolate Cake", instructions: "1. Mix flour, sugar, cocoa powder, and baking powder. 2. Add eggs, milk, and oil. 3. Bake in preheated oven. 4. Frost with chocolate icing." }
];

document.addEventListener("DOMContentLoaded", function() {
    displayRecipes();
});

function displayRecipes() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";

    recipes.forEach(function(recipe) {
        var recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.instructions}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

function openModal() {
    document.getElementById("recipeModal").style.display = "block";
}

function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
}

document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var recipeName = document.getElementById("recipeName").value;
    var recipeInstructions = document.getElementById("recipeInstructions").value;

    // Add the new recipe to the recipes array
    recipes.push({ name: recipeName, instructions: recipeInstructions });

    // Close the modal and display updated recipes
    closeModal();
    displayRecipes();
});
