var show_something = true

function info() {
	if (show_something) { 
		document.getElementById("game-one-mental-info").style.display = "block"
		document.getElementById("game-one-mental-button").textContent = "Click para Esconder la información Extra ⬆️"
		document.getElementById("game-one-mental-button").style.background = "#8bc8e0"
		document.getElementById("game-one-mental-button").style.color = "#0040ff"
		document.getElementById("game-one-mental-button").style.width = "300px"
		document.getElementById("game-one-mental-button").style.padding = "15px 10px"
		

		show_something = false
		
	} else {
		document.getElementById("game-one-mental-info").style.display = "none"
		document.getElementById("game-one-mental-button").textContent = "Click para Mostrar la información Extra ⬇️ "
		document.getElementById("game-one-mental-button").style.background = "#8be0a1" 
		document.getElementById("game-one-mental-button").style.color = "#228635"
		document.getElementById("game-one-mental-button").style.width = "100%"
		document.getElementById("game-one-mental-button").style.padding = "10px 10px"

		show_something = true
	}
}
function close_donar() {
	document.getElementById("popup").style.display = "none"
}