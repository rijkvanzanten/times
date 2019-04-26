<div class="letter">
	<div class="fill"></div>
	<div class="cut"></div>
	<div class="inner-curve-left"></div>
	<div class="inner-curve-right"></div>
	<div class="outer-curve-left"></div>
	<div class="outer-curve-right"></div>
	<div class="top-cut"></div>
</div>

<style>
.fill {
	top: 1.9%;
	left: 0.7%;
	width: 97.2%;
	height: 96.3%;
	background-color: var(--fg);
	clip-path: polygon(0% 0%, 100% 0%, 100% 2.5%, 89% 10.6%, 53.9% 100%, 51.6% 100%, 11.3% 10%, 0% 2.5%);
}

.cut {
	top: 4.5%;
	left: 24.2%;
	width: 58.4%;
	height: 70.5%;
	clip-path: polygon(21% 0%, 80% 0%, 94.5% 9.2%, 54.5% 100%, 6.6% 9.1%);
}

.inner-curve-left {
	top: 4.5%;
	left: 27.9%;
	width: 10.9%;
	height: 6.5%;
	border-top-left-radius: 75% 70%;
}

.inner-curve-right {
	top: 4.5%;
	left: 68.4%;
	width: 10.9%;
	height: 6.5%;
	border-top-right-radius: 75% 95%;
}

.outer-curve-left {
	top: 4.5%;
	left: 1.1%;
	width: 10.9%;
	height: 9.5%;
	border-top-right-radius: 100% 100%;
}

.outer-curve-right {
	top: 4.5%;
	left: 87.1%;
	width: 10.9%;
	height: 9.5%;
	border-top-left-radius: 100% 100%;
}

.top-cut {
	top: 1.8%;
	left: 38.7%;
	width: 29.8%;
	height: 2.9%;
}
</style>
