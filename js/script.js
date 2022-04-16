const wrapper = document.querySelector('.wrapper');
const delButton = '<a class="del-button" href="#">Удалить</a>';

wrapper.addEventListener('click', (event) => {
	if (event.target.classList.contains('del-button')){
		event.target.closest('li').remove();
	}
	if (event.target.classList.contains('list-item')){
		event.target.closest('li').classList.toggle('done');
	}
});

function validValue(value) {
	return /^([a-zA-Z0-9_\s]){2,15}$/gi.test(value);
}

const addButton = document.querySelector('.add-button');
const ul = document.querySelector('#list');
const input = document.querySelector('#input');
const error = document.querySelector('.error');

addButton.addEventListener('click', (e) => {
	e.preventDefault()
	if(validValue(input.value)){
		ul.innerHTML += `<li class='list-item'>${input.value} ${delButton}</li>`;
		input.value = '';
	} else{
		input.classList.add("invalid");
		error.innerText = 'Ошибка ввода';
	}
})

input.addEventListener('input', () => {
	if(validValue(input.value) || input.value === ''){
		input.classList.remove("invalid");
		error.innerText = '';
	}
})
