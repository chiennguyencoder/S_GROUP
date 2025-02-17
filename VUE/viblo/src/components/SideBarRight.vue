<script setup>
</script>

<template>
    <div class="sidebar">
        <div class="title">
            <h4>MỤC LỤC</h4>
            <hr>
        </div>
        <div class="sidebar-list">
            <div class="sidebar-item"><a href="#content1">Mở đầu</a></div>
            <div class="sidebar-item"><a href="#content2">Hoạt động của v-model</a></div>
            <div class="sidebar-item"><a href="#content3">Những lỗi thường gặp</a></div>
            <div class="sidebar-item"><a href="#content4">Tổng quan</a></div>
        </div>
    </div>
</template>

<style scoped>
    .sidebar {
        position : sticky;
        top: 80px;

    }
    .title {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .sidebar-item {
        font-size: 14px;
        line-height: 1.2;
        padding: 3px 0 9px 20px;
    }
</style>