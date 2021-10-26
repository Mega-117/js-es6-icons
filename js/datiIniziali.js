let listaCard = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//inserite tutte le card nella pagina
//prendele una a una e inserirle
// per farlo uso un ciclo for e innerHTML per agg alla pagina
let allCardContainer = document.querySelector(".container");
//console.log(allCardContainer);
let singolaCard = singleCardGeneretor(listaCard);
function singleCardGeneretor(array) {
	allCardContainer.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		let { name, prefix, type, family } = array[i];

		let tagCard = `<div class="card-container">
		<div class="card">
		<i class="${family} ${type} ${prefix}${name}"></i>
		<p>${name}</p>
		</div>
		</div>`;

		//console.log(tagCard);
		allCardContainer.innerHTML += tagCard;
	};

}

//************************* ANIMAL *******************************/ 

//per filtrare gli animali faccio una funz che filtra solo il type animali
// uso il filter + la funz che filtra solo gli animal per creare un arr di solo animali
let arrAnimal = listaCard.filter(animalFilter);
//funz che filtra gli animali
function animalFilter(Oggetto) {
	if (Oggetto.type === "animal") {
		return true;
	}
}

console.log(arrAnimal);



//************************* VEGETABLE *******************************/ 

let arrVegetable = listaCard.filter(vegetableFilter);
//funz che filtra gli vegetablei
function vegetableFilter(Oggetto) {
	if (Oggetto.type === "vegetable") {
		return true;
	}
}

console.log(arrVegetable);



//*********************** USER *******************************/			
let arrUser = listaCard.filter(userFilter);
//funz che filtra gli user
function userFilter(Oggetto) {
	if (Oggetto.type === "user") {
		return true;
	}
}

console.log(arrUser);



//seleziono il valore del select metto in ascolto e visualizzo sono gli oggeti con type = al valore del select


let filterIcons = document.getElementById("filter-icons");
//console.log(filterIcons);

filterIcons.addEventListener("change", function () {
	let valoreSelect = filterIcons.value;
	console.log(valoreSelect);
	if (valoreSelect === "animal") {
		let animalCard = singleCardGeneretor(arrAnimal);
	}
	if (valoreSelect === "vegetable") {
		let vegetableCard = singleCardGeneretor(arrVegetable);
	}
	if (valoreSelect === "user") {
		let userCard = singleCardGeneretor(arrUser);
	}
	if (valoreSelect === "tutti") {
		let tuttiCard = singleCardGeneretor(listaCard);
	}
});


