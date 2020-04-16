window.onload = () => {
	const app = document.getElementById("app");

	const helloHeader = document.createElement("h1");
	helloHeader.innerText = "Hello World!";

	app.appendChild(helloHeader);
};
