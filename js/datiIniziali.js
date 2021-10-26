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

for (let i = 0; i < listaCard.length; i++) {
	let { name, prefix, type, family } = listaCard[i];

	let tagCard = `<div class="card-container">
		<div class="card">
			<i class="${family} ${type} ${prefix}${name}"></i>
			<p>${name}</p>
		</div>
	</div>`;

	//console.log(tagCard);
	allCardContainer.innerHTML += tagCard;
};


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
for (let i = 0; i < arrAnimal; i++) {
	let element = arrAnimal[i];
	let classAnimal = "class-animal";
	console.log(classAnimal);
}


//************************* VEGETABLE *******************************/ 

let arrVegetable = listaCard.filter(vegetableFilter);
//funz che filtra gli vegetablei
function vegetableFilter(Oggetto) {
	if (Oggetto.type === "vegetable") {
		return true;
	}
}

console.log(arrVegetable);
for (let i = 0; i < arrVegetable; i++) {
	let element = arrVegetable[i];
	let classvegetable = "class-vegetable";
	console.log(classvegetable);
}


//*********************** USER *******************************/			
function vegetableFilter(Oggetto) {
	if (Oggetto.type === "vegetable") {
		return true;
	}
}

console.log(arrVegetable);
for (let i = 0; i < arrVegetable; i++) {
	let element = arrVegetable[i];
	let classvegetable = "class-vegetable";
	console.log(classvegetable);
}



