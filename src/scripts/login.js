/**
 * login page
 */

const user = {
	username: "rabbanisan",
	password: "123",
};

// document
// 	.getElementById("loginForm")
// 	.addEventListener("submit", function (event) {
// 		event.preventDefault();
// 		const name = document.getElementById("username");
// 		const pass = document.getElementById("password");
// 		const validName = name.value == user.usrname;
// 		const validPass = pass.value == user.pass;

// 		if (name.trim() === "" || pass.trim() === "") {
// 			window.alert("Username dan Password harus diisi.");
// 		} else {
// 			console.log(validName);
// 			console.log(validPass);
// 			if (validName === false || validPass === false) {
// 				window.alert("Username dan Password salah!");
// 				name.value = "";
// 				pass.value = "";
// 			} else {
// 				location.href = "menu.html";
// 			}
// 		}
// 	});

function login() {
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	if (username.value === "" || password.value === "") {
		window.alert("Username dan Password harus di isi!.");
	} else if (
		username.value != user.username ||
		password.value != user.password
	) {
		window.alert("Username dan Password tidak sesuai!.");
	} else {
		location.href = "menu.html";
	}
	username.value = "";
	password.value = "";
}
