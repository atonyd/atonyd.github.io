import autosize from 'autosize';

export default () => {
	
	const btnLoginSubmit = document.querySelector('#login-submit');

	btnLoginSubmit && btnLoginSubmit.addEventListener('click', function (e) {
		e.preventDefault();
		const actionsDiv = document.querySelector('.actions')
		actionsDiv && actionsDiv.classList.toggle('acted');
		setTimeout(function () {
			location.href = '/chat.html'
		}, 500);
	});

	const btnBackToLogin = document.getElementById('btn_back_to_login');
	btnBackToLogin && btnBackToLogin.addEventListener('click', function (e) {
		location.href = '/login.html'
	});

	const inputMsg = document.getElementById('message_input'),
				chatInputArea = document.querySelector('.chat__input'),
				msgArea = chatInputArea && chatInputArea.querySelector('.chat__input-msg');
	
	function adjustSizeInput() {
		if (!inputMsg
			&& !chatInputArea
			&& !msgArea)
			return;

		if (inputMsg.clientHeight > chatInputArea.clientHeight) {
			msgArea.style.height = `${chatInputArea.clientHeight}px`;
		} else {
			msgArea.style.height = `auto`;
		}
		inputMsg && autosize.update(inputMsg);
	}

	inputMsg && autosize(inputMsg);
	inputMsg && inputMsg.addEventListener('autosize:resized', adjustSizeInput);
	window.addEventListener('keyup', function (e) {
		switch(e.keyCode)
		{
				case 8: //backspace
				case 46: //delete
					adjustSizeInput();
					break;
				default:
					break;
		}
	})
}