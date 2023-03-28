const menu = document.getElementById("#ramen-menu")
const menuDetails = document.getElementById("#ramen-detail")
const ratingDisplay = document.getElementById("#rating-display")
const commentDisplay = document.getElementById("#comment-display")
const form = document.getElementById("#new-ramen")

fetch("http://localhost:3000/ramens") 
.then((response) => response.json())
.then((data) => {
    console.log(data) 
loadRamen(data); 
});

function loadRamen(ramens) {
    ramens.forEach(function(ramens){  
        let img = document.createNewElement("img")
        img.src = ramens.img
        menu.append(img);
        img.addEventListener('click', () => {
            
            
        });
        }    
    )};
        menuDetails.h2.append(ramens.name); 
        menuDetails.h3.append(ramens.restaurant); 
        ratingDisplay.append(ramens.rating);
        commentDisplay.append(ramens.comment);

form.addEventListener("submit", (e) => {
    let newRamen = {}
    e.preventDefault();
        newRamen = {
            name: e.target["ramen-name"].value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value,
        };
        postRamen(newRamen)
});
function postRamen(ramens) {
    fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
        "content-type": "Application/json",
    },
    body: JSON.stringify(ramens),
})
    .then((res) => res.json())
    .then((data) => renderRamen([data]))
}