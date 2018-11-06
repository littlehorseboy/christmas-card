<template>
  <div class="textArea">
    <h1>CHRISTMAS</h1>
    <h1>邀請你一起度過一個屌炸天的聖誕晚會</h1>
    <p>聖誕老達人, 聖誕大餐, 交換禮物</p>
    <p>時間: 12/15 【週六】 17:30 ~ 24:00</p>
    <p>地點: 台南晶英酒店 (鄰近新光三越新天地百貨公司)</p>
    <br>
    <p>聖誕晚會我們預備有</p>
    <p>↓ ↓ ↓ ↓ ↓</p>
    <p>精彩達人秀</p>
    <p>達人落水</p>
    <p>達人獨家提供 PS4 10台</p>
    <p>達人獨家提供 PS4 10台</p>
    <p>達人獨家提供 PS4 10台</p>
    <p>達人獨家提供 PS4 10台</p>
    <p>達人獨家提供 PS4 10台</p>
  </div>
</template>

<script>
export default {
  name: 'textArea',
};
</script>

<style lang="scss" scoped>
  .textArea {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    overflow-y: auto;
    max-height: 550px;
    z-index: 100;
    >p {
      font-size: 1.15rem;
    }
  }
</style>
