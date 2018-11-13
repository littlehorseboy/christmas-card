<template>
  <div class="textArea">
    <h1>CHRISTMAS</h1>

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
