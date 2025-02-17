<script setup>
    import { reactive, ref } from 'vue';
    import {users, posts } from '../assets/data.js'

    const textFollow = ref('Theo dõi')

    const user = reactive(users)
    const post = reactive(posts)

    // console.log(user, post);
    

    function handleFollow(){
        user.followed = !user.followed
        if (user.followed){
            textFollow.value = 'Đang theo dõi'
            user.follower++
        }
        else {
            textFollow.value = 'Theo dõi'
            user.follower--
        }

    }
</script>

<template>
    <div class="row s-between">
        <div class="author row">
            <img :src="user.avatar" alt="" class="avatar">
            <div class="info col">
                <div class="row">
                    <div class="author-name">{{ user.name }}</div>
                    <div class="author-id">@{{ user.id }}</div>
                    <button class="follow-btn" @click = "handleFollow">{{  textFollow }}</button>
                </div>
                <div class="row">
                    <div class="author-rep stat"><i class="fa-solid fa-star"></i> {{ user.reputation }}</div>
                    <div class="author-follower stat"><i class="fa-solid fa-user-plus"></i>{{ user.follower }}</div>
                    <div class="author-post stat"><i class="fa-solid fa-pen"></i>{{ user.post }}</div>
                </div>
            </div>
        </div>
        <div class="post">
            <div class="row">
                <span>Published {{ post.timePublish }}</span>
                <span>- {{ post.timeRead }} min read</span>
            </div>
            <div class="row">
                <div class="post-viewer stat text"><i class="fa-regular fa-eye"></i> {{ post.viewer }}</div>
                <div class="post-comments stat text"><i class="fa-solid fa-comments"></i> {{ post.comments }}</div>
                <div class="post-bookmark stat text"><i class="fa-solid fa-bookmark"></i> {{ post.bookmark }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .s-between {
        justify-content: space-between;
    }
    .avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 5px;
    }

    div {
        font-size: Roboto, san-serif;
        font-size: 14px;
        color : #9b9b9b ;
    }

    .author-name {
        font-weight: 700;
        margin-right: 5px;
        color : #5488c7;
    }
    .row {
        display: flex;
        align-items: center;
    }

    .col {
        display: flex;
        flex-direction: column;
    }

    .stat {
        margin-right: 10px;
    }

    .stat i{
        margin-right: 10px;
    }

    .text {
        font-size: 20px;
    }

    .follow-btn {
        background: none;
        border : 1px solid #9b9b9b;
        color : #464545;
        padding: 3px 8px;
        border-radius: 2px;
        margin-left: 10px;
        cursor: pointer;
    }
    span {
        line-height: 25px;
    }
</style>