let userEmail = prompt('Please, input your mail:');
const numberOfSymbols1 = 5;
let password; 
let userChangePassword;
let oldPassword;
let newPassword;
const numberOfSymbols2 = 6;
let validPassword;

if (!userEmail) {
	alert('Canceled')
} else if (userEmail.length<numberOfSymbols1){
	alert('I don\'t know any emails having name length less than 5 symbols')
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
	password=prompt('Please, input your password:')
	if (!password) {
		alert('Canceled')
	} else if (userEmail === 'user@gmail.com' && password !=='UserPass' || 
		userEmail === 'admin@gmail.com' && password !== 'AdminPass') {
		alert('Wrong password');
	} else {
		userChangePassword = confirm('Do you want to change your password?')
		if (!userChangePassword) {
			alert('You have failed the change.')
		} else if (userChangePassword){
			oldPassword = prompt('Please, write the old password:');
			if (!oldPassword){
				alert('Canceled')
			}else if(oldPassword !== password) {
				alert('Wrong password');
			}else if (oldPassword === password) {
				newPassword = prompt('Please, enter new password:');
				if (!newPassword) {
					alert('Canceled');
				} else if (newPassword.length<numberOfSymbols2){
					alert('It’s too short password. Sorry.');
				} else {
					validPassword = prompt('Please, enter new password again:');
					if (validPassword!==newPassword){
						alert('You wrote the wrong password!');
					} else {
						alert('You have successfully changed your password.”');
					}
				} 
			}
		}
	} 
} else {
	alert('I don\'t know you')
}
