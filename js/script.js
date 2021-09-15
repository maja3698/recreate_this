const url = "https://keammd20-e79e.restdb.io/rest/punchfork?max=50";

const options = {
    headers: {
        "x-apikey": "61409c6d43cedb6d1f97f0e0",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })

    .then((data) => {
        // console.log(data);
        handleData(data);
    })
    .catch((e) => {
        console.error("error");
    });

    function handleData(recipes) {
        recipes.forEach((recipe) => {
    const template = document.querySelector("#foodtemplate").content;
    const cloneRecipe = template.cloneNode(true);

    cloneRecipe.querySelector(".dishname").textContent = recipe.dishname;
    cloneRecipe.querySelector(".site").textContent = recipe.site;
    cloneRecipe.querySelector(".uploaded").textContent = `${recipe.uploaded} yr ago`;
    cloneRecipe.querySelector(".rating-nr").textContent = recipe.ratingnr;




    const foodEl = document.querySelector(".foodlist");
    foodEl.appendChild(cloneRecipe);


            
        });
    }

    // <template id="foodtemplate">
    //     <section class="foodbox">
    //         <img src="https://baconmockup.com/200/200/" alt="food">
            
    //     <div>
    //         <h4 class="dishname">Dishname</h4>
    //         <p class="uploaded">yr ago</p>
    //     </div>

    //     <div>
    //         <span class="Rating-nr">63</span>
    //         <p>Rating</p>
    //     </div>
    //     </section>
    // </template>

