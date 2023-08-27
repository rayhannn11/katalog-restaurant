import "regenerator-runtime";

import "../styles/general.css";
import "../styles/layout.css";
import "../styles/hero.css";
import "../styles/main.css";
import "../styles/responsive.css";

import DATA from "../DATA.json";
console.log(DATA);

// toggle Drawer
document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("nav-list-block");
});

function getRestaurants(data) {
  let cardHTML = "";

  data.restaurants.forEach((item, i) => {
    cardHTML += `
          <div tabindex="0" class="card">
            <div class="img-container">
              <img tabindex="0" class="card-image" alt="${item.name}" src="${item.pictureId}"/>
              <span tabindex="0" class="card-location">
                <span>📌${item.city}</span>
              </span>
            </div>
    
            <div tabindex="0" class="card-content">
                <div class="card-content-info">
                    <p>${item.name}</p>
                    <div>
                       ⭐
                        <span>${item.rating}</span>
                    </div>
                <div>   
            </div>
          </div>  
              <p class="truncate">${item.description}</p>
            </div>
          </div>
          `;
  });

  // append to DOM
  document.getElementById("explore-restaurant").innerHTML = cardHTML;
}

getRestaurants(DATA);
