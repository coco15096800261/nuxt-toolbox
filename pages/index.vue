<template>
    <div class="container">
      <div class="logo-container">
        <img src="/static/image/weixin.png" alt="WeChat Logo" class="logo" />
      </div>
      <div class="button-container">
        <button class="wechat-button" @click="openWeChat">前往微信打开</button>
      </div>
      <div class="fallback-text">无法打开时，使用默认浏览器打开。复制链接</div>
    </div>
  </template>
  
  <script setup>
  function openWeChat() {
    window.location.href = `weixin://biz/ww/profile/${encodeURIComponent(
      "https://work.weixin.qq.com/ca/cawcdee95e666d2584"
    )}`;
  }
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
  
  .logo-container {
    margin-bottom: 2rem;
  }
  
  .logo {
    width: 65px;
    height: 65px;
  }
  
  .wechat-button {
    background-color: #07c160;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .wechat-button:hover {
    background-color: #06ad56;
  }
  
  .fallback-text {
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
  }
  </style>
  