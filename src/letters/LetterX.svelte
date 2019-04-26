<div class="letter">
	<div class="fill"></div>
	<div class="left"></div>
	<div class="right"></div>
	<div class="top"></div>
	<div class="bottom"></div>
	<div class="top-cut"></div>
	<div class="bottom-cut"></div>
	<div class="top-left-left box">
	  <div class="circle"></div>
	</div>
	<div class="top-left-right"></div>
	<div class="bottom-left-left box">
	  <div class="circle"></div>
	</div>
	<div class="top-right-left"></div>
	<div class="top-right-right box">
	  <div class="circle"></div>
	</div>
	<div class="bottom-left-right"></div>
	<div class="bottom-right-left"></div>
	<div class="bottom-right-right box">
	  <div class="circle"></div>
	</div>
</div>

<style>
.fill {
  top: 1.9%;
  left: -0.1%;
  width: 99%;
  height: 94.6%;
  background-color: var(--fg);
}

.left {
  top: 1.8%;
  left: -0.1%;
  width: 42.9%;
  height: 92.2%;
  clip-path: polygon(0% 0%, 3.8% 0%, 3.8% 3.1%, 35.3% 10%, 100% 52.3%, 28% 92.9%, 0% 100%);
}

.right {
  top: 1.8%;
  left: 55.6%;
  width: 43.4%;
  height: 92.2%;
  clip-path: polygon(0% 45.6%, 63% 10%, 97% 2.9%, 97% 0%, 100% 0, 100% 100%, 70% 92.9%);
}

.top {
  top: 1.8%;
  left: 33.8%;
  width: 40%;
  height: 37%;
  clip-path: polygon(2.5% 32%, 27% 7.6%, 74.9% 7.6%, 99% 27%, 45.1% 100%);
}


.bottom {
  top: 55.2%;
  left: 24.1%;
  width: 41%;
  height: 38.7%;
  clip-path: polygon(54.6% 0%, 100% 72%, 79.6% 100%, 22% 100%, 0% 74%);
}

.top-cut {
  top: 1.8%;
  left: 44.6%;
  width: 19.2%;
  height: 2.9%;
}

.bottom-cut {
  top: 93.8%;
  left: 33.2%;
  width: 23.5%;
  height: 2.9%;
}

.box {
  background: transparent;
  overflow: hidden;
}

.circle {
  border-radius: 50%;
}

.top-left-left {
  top: 4.5%;
  left: 1.6%;
  width: 13.8%;
  height: 6.7%;
}

.top-left-left .circle {
	width: 192%;
	height: 256%;
	top: 3%;
	left: -91.5%;
}

.top-left-right {
  top: 4.5%;
  left: 33.8%;
  width: 11%;
  height: 9.7%;
  border-top-left-radius: 88% 39%;
  border-bottom-left-radius: 18% 50%;
}

.bottom-left-left {
  top: 87.3%;
  left: -0.1%;
  width: 13.8%;
  height: 6.7%;
}

.bottom-left-left .circle {
	width: 181.9%;
	height: 257%;
	top: -160%;
	left: -91.5%;
}

.top-right-left {
  top: 4.5%;
  left: 62.8%;
  width: 11%;
  height: 9.7%;
  border-top-right-radius: 88% 39%;
  border-bottom-right-radius: 30% 60%;
}

.top-right-right {
  top: 4.5%;
  left: 83%;
  width: 14.5%;
  height: 6.7%;
}

.top-right-right .circle {
	width: 244%;
	height: 256%;
	top: 1.6%;
	left: -3.5%;
}

.bottom-left-right {
  top: 83.8%;
  left: 22.1%;
  width: 11%;
  height: 10%;
  border-bottom-left-radius: 100% 45%;
  border-top-left-radius: 24% 55%;
}

.bottom-right-left {
  top: 82%;
  left: 56.9%;
  width: 10.4%;
  height: 11.8%;
  border-bottom-right-radius: 100% 31%;
  border-top-right-radius: 44% 66%;
}

.bottom-right-right {
  top: 87.5%;
  left: 86%;
  width: 12.9%;
  height: 6.7%;
}

.bottom-right-right .circle {
	width: 244%;
	height: 256%;
	top: -161.4%;
	left: -3.5%;
}
</style>
