<script setup>
</script>

<template>
    <div class="sidebar">
        <i class="fa-solid fa-sort-up color arrow margin-b10"></i>
        <h4 class="color margin-b10 number">+2</h4>
        <i class="fa-solid fa-sort-down arrow color margin-b25"></i>
        <i class="fa-solid fa-bookmark bookmark margin-b25 color size-b border-r"></i>
        <h4 class="color size-b border-r margin-b25 ">A</h4>
        <i class="fa-brands fa-facebook-f color border-r size-a margin-b15"></i>
        <i class="fa-brands fa-twitter color border-r size-a"></i>
    </div>
</template>

<style scoped>

    .number {
        font-size: 30px;
    }
    .arrow {
        font-size: 35px;
        line-height: 15px;
    }
    
    .size-a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    .size-b {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .border-r{
        border-radius: 50%;
        border: 1px solid #9b9b9b;
    }
    .color {
        color : #9b9b9b;
    }
    .margin-b15 {
        margin-bottom: 15px;
    }

    .bookmark {
        border: 2px solid #9b9b9b;
        box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);
    }

    .margin-b25 {
        margin-bottom: 25px;
    }

    .margin-b10 {
        margin-bottom: 10px;
    }
    .sidebar {
        padding: 80px 10px 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>