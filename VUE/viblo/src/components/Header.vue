<script setup>
</script>

<template>
     <div class="container">
          <nav class="navbar">
               <div class="navbar-item">
                    <img src="https://viblo.asia/logo_full.svg" alt="logo" class="logo">
                    <ul class="menu-list">
                         <li class="menu-item"><a href="#">Bài Viết</a></li>
                         <li class="menu-item"><a href="#">Hỏi Đáp</a></li>
                         <li class="menu-item"><a href="#">Thảo Luận</a></li>
                    </ul>
               </div>
               <div class="navbar-item">
                    <div class="search-bar">
                         <input type="text" name="search" id="" placeholder="Tìm kiếm trên Viblo">
                         <button class="Search-Btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div class="navbar__info"><i class="fa-solid fa-info"></i></div>
                    <div class="navbar__language">
                         <img slot="prefix" src="https://viblo.asia/images/vi-flag-32x48.png" width="20" height="20" class="imageLocale">
                         <span href="#">VI</span>
                    </div>
                    <div class="navbar__services"><i class="fa-solid fa-table-cells"></i></div>
                    <div class="navbar__auth"><i class="fa-solid fa-right-to-bracket"></i> Đăng nhập / Đăng ký</div>
               </div>
          </nav>
     </div>
</template>

<style scoped>

     .logo {
          margin-right: 64px;
          height: 1.3rem;
     }
     .navbar {
          display: flex;
          height: 42px;
     }

     .navbar-item {
          display: flex;
          align-items: center;
     }

     .navbar-item:nth-child(1){
          width: 45%;
     }

     .navbar-item:nth-child(2){
          width: 55%;
     }

     .menu-list {
          display: flex;
          align-items: center;
     }
     .menu-item {
          font-family: Roboto, sans-serif;
          margin-right: 40px;
          font-size: 0.8rem;
          font-weight: 700;
     }
     .menu-item a  {
          color : #1b1b1b;
          opacity: 0.5;
     }

     span {
          font-family: Roboto, sans-serif;
          margin-right: 40px;
          font-size: 0.8rem;
          font-weight: 700;
          color : #1b1b1b;
          opacity: 0.5;
     }
     .search-bar {
          height: 100%;
          position: relative;
          flex: 1 1 auto;
          max-width: 342px;
          margin-right: 15px;
     }

     .search-bar input {
          height: 100%;
          padding: 10px 24px;
          margin: 0;
          max-width: 342px;
          width: 100%;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 2px solid #d6d6d7;
     }
     .Search-Btn {
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          padding: 6px 12px;
          background: #5488c7;
          border: 1px solid #5488c7;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          color : white;
     }
     .navbar__info{
          font-weight: 900;
          font-size: 18px;
          color : #000;
          opacity: 0.6;
          margin-right: 15px;
     }

     .navbar__language {
          display: flex;
          align-items: center;
     }
     .navbar__language img {
          border-radius: 50%;
     }

     .navbar__language span {
          margin-right: 20px;
     }

     .navbar__services{
          opacity: 0.6;
          font-size: 23px;
          font-weight: lighter;
          margin-right: 10px;
     }

     .navbar__auth {
          color : #5488c7;
          font-size: 15px;
     }
</style>