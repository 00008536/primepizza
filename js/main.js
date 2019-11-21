const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


const orderForm = document.querySelector('#order-form');
const nameInput = document.querySelector('#name');
const addressInput = document.querySelector('#address');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('.msg');
const orderList = document.querySelector('#users');


orderForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(nameInput.Value === '' ||  addressInput.Value === '' ||  numberInput.Value === '' ||  messageInput.Value === '' ) {
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		setTimeout(() => msg.remove(), 3000);
	}	
	else {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode('{nameInput.value} : {messageInput.value}'));

		orderList.appendChild(li);

		//clear fields 

		nameInput.value =  '';
		addressInput.value =  '';
		emailInput.value =  '';
		numberInput.value =  '';
		messageInput.value =  '';
	}

}