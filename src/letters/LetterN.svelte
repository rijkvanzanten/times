<div class="letter">
	<div class="fill"></div>
	<div class="left-triangle"></div>
	<div class="right-triangle"></div>
	<div class="bottom"></div>
	<div class="left"></div>
	<div class="top-left"></div>
	<div class="bottom-left"></div>
	<div class="right"></div>
	<div class="top-right"></div>
</div>

<style>
.fill {
	top: 1.9%;
	left: 0%;
	width: 99.6%;
	height: 96.2%;
	background-color: var(--fg);
}

.left-triangle {
	clip-path: polygon(0% 0%, 100% 100%, 21% 97.7%, 21% 94.5%, 0% 77%);
	top: 20.1%;
	left: 20.3%;
	width: 63.4%;
	height: 78.1%;
}

.right-triangle {
	clip-path: polygon(0% 0%, 76.2% 0%, 76.2% 6.4%, 100% 28.5%, 100% 97.4%);
	top: 0%;
	left: 22.8%;
	width: 56.5%;
	height: 72.2%;
}

.bottom {
	top: 96.3%;
	left: 0%;
	width: 81.9%;
	height: 5%;
}

.left {
	clip-path: polygon(0% 0%, 64% 0%, 100% 6.7%, 100% 100%, 0% 100%);
	top: 6.9%;
	left: 0%;
	width: 13.9%;
	height: 87%;
	border-bottom-right-radius: 84% 13%;
}

.top-left {
	top: 4.4%;
	left: 0%;
	width: 9%;
	height: 5%;
	border-top-right-radius: 100% 60.8%;
}

.bottom-left {
	top: 80.1%;
	left: 20.3%;
	width: 13.3%;
	height: 13.9%;
	border-bottom-left-radius: 90% 84%;
}

.right {
	top: 4.7%;
	left: 86%;
	width: 13.7%;
	height: 93.9%;
	border-top-left-radius: 89% 12%;
}

.top-right {
	top: 4.7%;
	left: 65.9%;
	width: 13.7%;
	height: 66%;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 74%);
	border-top-right-radius: 82% 18%;
}
</style>
