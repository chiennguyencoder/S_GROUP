<script setup>
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
  import SideBarLeft from './components/SideBarLeft.vue';
  import SideBarRight from './components/SideBarRight.vue';
</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
    <div class="banner-wrapper">
        <div class="container">
          <img src="https://images.viblo.asia/full/d91ca3fc-e7bb-43ae-8899-7c64d920d73f.png" alt="pic" class="banner">
        </div>
    </div>

    <div class="pad-x24 pad-y15 container flex">
      <div class="sidebar-left">
        <SideBarLeft/>
      </div>

      <div class="content">
        <Content/>
      </div>

      <div class="sidebar-right">
        <SideBarRight/>
      </div>
    </div>  
  </main>
</template>

<style scoped>
  header {
    position: fixed;
    padding : 10px 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1);
    width: 100%;
    background-color: #fff;
    z-index: 1024;
  }

  .container {
    margin: 0 auto;
  }

  .banner-wrapper {
    padding-top: 62px;
    background: black;
  }


  .banner {
    width: 100%;
  }
  .flex {
    display: flex;
  }
  .pad-x24 {
    padding-left: 24px;
    padding-right: 24px;
  }

  .pad-y15 {
    padding-top: 75px;
    padding-bottom: 15px;
  }
  .sidebar-right {
    max-width: 300px;
    /* width: 100%; */
  }
  .content {
    max-width: 760px;
  }
</style>   