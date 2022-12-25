"use strict";

const userForm = new UserForm();

//Вход для пользователей
userForm.loginFormCallback = (data) => {
	ApiConnector.login(data, resp => {

		if(resp.success) {
			location.reload();
		} else {
			userForm.setLoginErrorMessage(resp.error);
		}
	});
};


//Регистрация пользователей
userForm.registerFormCallback = (data) => {
	ApiConnector.register(data, resp => {
	
		if(resp.success) {
			location.reload();
		} else {
			userForm.setRegisterErrorMessage(resp.error);
		}
	});
};