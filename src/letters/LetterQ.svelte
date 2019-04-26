<div class="letter">
	<div class="fill"></div>
	<div class="middle"></div>
	<div class="curve-box">
		<div class="curve-fill"></div>
		<div class="curve-cut"></div>
	</div>
</div>

<style>
.fill {
	top: 0%;
	left: 2.4%;
	width: 93.7%;
	height: 98.3%;
	background-color: var(--fg);
	border-radius: 50%;
}

.middle {
	top: 5%;
	left: 19%;
	width: 61%;
	height: 88.4%;
	border-radius: 50% / 42%;
}

.curve-box {
	top: 95.7%;
	left: 35%;
	width: 63.2%;
	height: 26.3%;
	overflow: hidden;
}

.curve-box .curve-fill {
	top: -128%;
	left: -1%;
	width: 286%;
	height: 228%;
	border-radius: 34% / 50%;
	background-color: var(--fg);
}

.curve-box .curve-cut {
	top: -128%;
	left: 37%;
	width: 286%;
	height: 228%;
	border-radius: 34% / 50%;
	clip-path: polygon(0% 59%, 4% 55.6%, 0% 0%, 69% 100%, 0% 100%);
}
</style>
