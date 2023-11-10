<template>
  <div>
    <div class="hamburger" @click="toggleSidebar">&#9776;</div>
    
    <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <nav id="nav">
        <div class="name">Abdoelmaaliek samaai</div>
        <div class="menu-items">
          <router-link
          to="/"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">Home</div>
        </router-link>
        <router-link
          to="/about"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">About</div>
        </router-link>
        <router-link
          to="/contact"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">Contact</div>
        </router-link>
        <router-link
          to="/resume"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">Resume</div>
        </router-link>
       
        <router-link
          to="/testimonials"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">Testimonials</div>
        </router-link>
        <router-link
          to="/Project"
          active-class="active"
          tag="button"
          class="button-side"
        >
          <div class="link-container">Projects</div>
        </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
}


.sidebar {
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}

.sidebar-open {
  width: 250px; 
}
.name {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.menu-items > * {
  margin-top: 15px;
}

.button-side:focus {
  outline: none;
}
.button-side.active {
  background-color: #354e56;
}
.button-side {
  border: none;
  padding: 10px 0px;
  cursor: pointer;
  font-size: 16px;
  color: white;
}
.sidebar {
  background-color: #ffd700;
}

</style>
