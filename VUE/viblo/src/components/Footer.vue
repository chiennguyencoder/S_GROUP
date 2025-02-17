<script setup>
  
</script>

<template>
    <div class="flex">
        <img src="https://viblo.asia/favicon-128.png" alt="logo">
        <div class="col margin-l20">
            <p class="title">Hãy đăng ký một tài khoản Viblo để nhận được nhiều bài viết thú vị hơn.</p>
            <div class="row around">
                <button class="login">Đăng nhập</button>
                <button class="signup">Đăng kí</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        align-items: center;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .around {
        justify-content: space-around;
    }

    img {
        margin-left: 100px;
    }

    .login, .signup {
        width: 100px;
        padding: 15px 10px;
        border-radius: 5px;
        color : white;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }

    .title {
        font-size: 20px;
        text-align: center;
    }
    .login {
        background-color: #1877f2;
    }

    .signup {
        background-color: #42b72a;
    }

    .margin-l20 {
        margin-left: 50px;
    }
</style>   
