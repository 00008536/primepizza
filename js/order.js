
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

	if(nameInput.Value == '' ||  addressInput.Value == '' ||  numberInput.Value == '' ||  messageInput.Value == '' ) {
		
		alert('Please enter fields');

	}	
	else {
		alert('Dear guest, your order is successfully accepted')
		//clear fields 

		nameInput.value =  '';
		addressInput.value =  '';
		emailInput.value =  '';
		numberInput.value =  '';
		messageInput.value =  '';
	}

}