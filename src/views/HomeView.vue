<template>
  <div class="home">
    <div class="content">
      <div class="container">
        <div>
          <img
            class="myHomeImage"
            :src="'https://i.postimg.cc/4N6sJMBc/c12-abdoelmaaliek-samaai-1-720.jpg'"
            :alt="myphoto"
          />
          <div class="words">
            <h1>Welcome to my portfolio. I am AbdoelMaaliek Samaai.</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>
<style scoped>
.container{
  margin-top: 4rem;
  display: flex;
  justify-content: start;
  align-items: center;

}
.myHomeImage {
width:30%;
} 
.words{
  display: flex;
  justify-content: end;
}
</style>
