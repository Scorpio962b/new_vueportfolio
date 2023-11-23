<template>
  <div class="container">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="box"
      :class="'box-' + (index + 1)"
      :style="'--img: url(' + testimonial.image_url + ');'"
      :data-text="testimonial.desc"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["testimonials"],
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  sans-serif;
}
body {
  display: grid;
  place-content: center;
  min-height: 100vh;
  background: #000;
  align-items: center;
}
.container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
  width: 900px;
  height: 700px;
  transition: all 400ms;

}
.container:hover .box {
  filter: grayscale(100%) opacity(24%);
}
.box {
  position: relative;
  background: var(--img) center center;
  background-size: cover;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .box:hover {
  filter: grayscale(0%) opacity(100%);
}
.container:has(.box-1:hover) {
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
}
.container:has(.box-2:hover) {
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
}
.container:has(.box-3:hover) {
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr;
}
.container:has(.box-4:hover) {
  grid-template-columns: 1fr 1fr 1fr 3fr 1fr 1fr;
}
.container:has(.box-5:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 3fr 1fr;
}
.container:has(.box-6:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 3fr;
}
.box:nth-child(odd) {
  transform: translateY(-16px);
}
.box:nth-child(even) {
  transform: translateY(16px);
}
.box::after {
  content: attr(data-text);
  position: absolute;
  bottom: 20px;
  background: #000;
  color: #fff;
  padding: 10px 10px 10px 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: translateY(60px);
  opacity: 0;
  transition: all 400ms;
}
.box:hover::after {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 400ms;
}
</style>

<!-- <template>
    <div class="container">
        <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="card-body">
              <img :src="testimonial.image_url" :alt="testimonial.name">
              <h2>{{ testimonial.name }}</h2>
              <p>{{ testimonial.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props:["testimonials"]
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

body {
	display: grid;
	place-content: center;
	min-height: 100vh;
	background: #000;
}


 @media(max-width:992px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 20rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media(max-width:768px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 16rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media(max-width:536px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 14rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
} 
 } 
</style> -->
