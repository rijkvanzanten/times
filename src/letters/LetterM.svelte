<div class="letter">
	<div class="fill"></div>
	<div class="outer-left"></div>
	<div class="outer-right"></div>
	<div class="mid-triangle"></div>
	<div class="left-triangle"></div>
	<div class="right-triangle"></div>
	<div class="curve-left"></div>
	<div class="curve-right"></div>
</div>

<style>
.fill {
	background-color: var(--fg);
	top: 1.9%;
	left: 2%;
	width: 94.6%;
	height: 94.6%;
}

.outer-left {
	top: 4.8%;
	left: -12.5%;
	width: 25%;
	height: 89.1%;
	border-top-right-radius: 38% 9%;
	border-bottom-right-radius: 49% 9%;
}

.outer-right {
	top: 4.8%;
	left: 86.7%;
	width: 25%;
	height: 89.1%;
	border-top-left-radius: 38% 9%;
	border-bottom-left-radius: 49% 9%;
}

.mid-triangle {
	clip-path: polygon(0 0, 51.3% 100%, 100% 0);
	top: 1.8%;
	left: 23.8%;
	width: 50.8%;
	height: 72.1%;
}

.left-triangle {
	clip-path: polygon(0% 0%, 100% 100%, 37.2% 100%, 37.2% 96.4%, 0% 77%);
	top: 18.5%;
	left: 17.5%;
	width: 28.1%;
	height: 78.1%;
}

.right-triangle {
	clip-path: polygon(100% 0%, 100% 79%, 64.3% 96.4%, 64.3% 100%, 0% 100%);
	top: 15.5%;
	left: 46.9%;
	width: 28.6%;
	height: 81.1%;
}

.curve-left, .curve-right {
	top: 4.8%;
	left: 17.5%;
	width: 25%;
	height: 89.1%;
	border-top-left-radius: 38% 9%;
	border-bottom-left-radius: 49% 9%;
	clip-path: polygon(0 82%, 0% 100%, 50% 100%);
}

.curve-right {
	transform: scaleX(-1);
	left: 50.5%;
}
</style>
