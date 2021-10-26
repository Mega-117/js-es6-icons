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

//per filtrare gli animali faccio una funz che filtra solo il type animali

/* let objAnimal = listaCard.filter(animalFilter);

function animalFilter(Oggetto) {
	if (Oggetto.type === "animal") {
		return true;
	}


}
console.log(objAnimal);
for (let i = 0; i < objAnimal; i++) {
	let element = objAnimal[i];
	let classAnimal = "class-animal";
	console.log(classAnimal);
}
 */


