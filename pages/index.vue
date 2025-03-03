<template>
  <div class="container">
    <div class="logo-container">
      <img src="/static/image/weixin.png" alt="WeChat Logo" class="logo" />
    </div>
    <div class="button-container">
      <button class="wechat-button" @click="openWeChat">前往微信打开</button>
    </div>
    <div class="fallback-text">
      无法打开时，使用默认浏览器打开。
      <span @click="copylink">复制链接</span>
    </div>
  </div>
</template>

<script setup>
function openWeChat() {
  window.location.href = `weixin://biz/ww/profile/${encodeURIComponent(
    'https://work.weixin.qq.com/ca/cawcdee95e666d2584'
  )}`;
}
function fallbackCopyTextToClipboard(text) {
  // 创建一个临时的 input 元素
  var textArea = document.createElement('textarea');
  textArea.value = text;
  // 避免在移动设备上覆盖可视视图
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = '0';
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';

  document.body.appendChild(textArea);
  textArea.select();

  try {
    let successful = document.execCommand('copy');

    message.success('复制成功！到浏览器中粘贴');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  // 移除临时元素
  document.body.removeChild(textArea);
}

function copylink() {
  let currentURL = window.location.href;

  if (!navigator.clipboard) {
    // 检查是否支持 navigator.clipboard
    fallbackCopyTextToClipboard(currentURL);
    return;
  }

  navigator.clipboard.writeText(currentURL).then(
    function () {
      message.success('复制成功！到浏览器中粘贴');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    }
  );
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
