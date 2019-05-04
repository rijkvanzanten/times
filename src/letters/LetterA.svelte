<div class="letter">
	<div class="background"></div>
	<div class="left"></div>
	<div class="bottom-left-radius"></div>
	<div class="right"></div>
	<div class="bottom-right-radius"></div>
	<div class="triangle"></div>
	<div class="bottom-fill"></div>
	<div class="bottom-between"></div>
	<div class="bottom-curve"></div>
</div>

<style>
.background {
	background-color: var(--fg);
	width: 98.7%;
	height: 96.3%;
	top: 0.1%;
	left: 0.5%;
}

.left {
	clip-path: polygon(0 0, 100% 0, 22.2% 100%, 0% 100%);
	width: 48.2%;
	height: 86.9%;
}

.bottom-left-radius {
	height: 17%;
	width: 22.9%;
	bottom: 6%;
	left: -11%;
	border-bottom-right-radius: 50% 76%;
}

.right {
	clip-path: polygon(0 0, 100% 0, 100% 100%, 76.7% 100%);
	width: 48.8%;
	height: 85%;
	right: 0;
}

.bottom-right-radius {
	height: 17%;
	width: 22.9%;
	bottom: 6%;
	right: -11%;
	border-bottom-left-radius: 50% 76%;
}

.triangle {
	width: 32.6%;
	height: 39.3%;
	left: 29.4%;
	top: 20.5%;
	clip-path: polygon(49.7% 0, 0% 100%, 100% 100%);
}

.bottom-fill {
	height: 17.8%;
	width: 51.8%;
	top: 65.6%;
	left: 19.8%;
	clip-path: polygon(13.2% 0%, 85.5% 0%, 100% 100%, 0% 100%);
}

.bottom-between {
	width: 34%;
	height: 2.7%;
	left: 28.8%;
	bottom: 3.5%;
}

.bottom-curve {
	width: 53.3%;
	top: 83%;
	height: 10.9%;
	left: 19%;
	border-bottom-left-radius: 16% 49%;
	border-bottom-right-radius: 17% 36%;
	border-top-left-radius: 2.2% 55.5%;
	border-top-right-radius: 1.8% 54%;
}
</style>
