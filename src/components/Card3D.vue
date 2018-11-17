<template>
  <div class="card3d">
    <div @click="clickCard" class="scene">
      <div class="panel"
        :class="{ one: chapter === 'one', two: chapter === 'two', top: chapter === 'three' }">
        <div class="front"></div>
        <div class="back"></div>
      </div>
      <div class="panel"
        :class="{ one: chapter === 'one', two: chapter === 'two', bottom: chapter === 'three' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card3d',
  computed: {
    chapter() {
      return this.$store.getters.getChapter;
    },
  },
  methods: {
    clickCard() {
      if (this.chapter === 'one') {
        this.$store.dispatch('updateCardChapter');
      } else if (this.chapter === 'two') {
        this.$store.dispatch('updateCardChapter');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card3d {
  z-index: 1;
  .scene {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 380px;
    border: 1px solid #ccc;
    z-index: -111;
    // @media (max-width: 500px) {
    //   width: 280px;
    //   height: 280px;
    // }

    > .panel {
      transition: height ease-in-out 1s, transform ease-in-out 1s;
      transform-style: preserve-3d;
      backface-visibility: hidden;

      &.one {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/christmas-3805623_1280.jpg);
        background-size: cover;
        background-position: center;
        transform: perspective(350px) rotateX(0deg);
        transform-origin: 50% 100%;
        border: 5px solid #fff;
        box-sizing: border-box;
      }

      &.two {
        position: absolute;
        width: 100%;
        height: 45%;
        background-image: url(../assets/images/christmas-3805623_1280.jpg);
        background-size: cover;
        background-position: center;
        transform: perspective(350px) rotateX(45deg);
        transform-origin: 50% 0%;
        border: 5px solid #fff;
        box-sizing: border-box;
      }

      &.top {
        position: absolute;
        width: 100%;
        height: 50%;
        background-image: url(../assets/images/christmas-3805623_1280.jpg);
        background-size: cover;
        background-position: center;
        transform: perspective(350px) rotateX(155deg);
        transform-origin: 50% 0%;
        z-index: 1;

        > .front {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 5px solid #fff;
          box-sizing: border-box;
        }

        > .back {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url(../assets/images/christmas-baubles-1078996_1280.jpg);
          background-size: 100% 100%;
          transform: perspective(350px) rotateX(180deg);
          border: 5px solid #fff;
          border-bottom: none;
          box-sizing: border-box;
        }
      }

      &.bottom {
        width: 100%;
        height: 50%;
        background-image: url(../assets/images/christmas-baubles-1078996_1280.jpg);
        background-size: cover;
        transform: perspective(350px) rotateX(45deg);
        transform-origin: 50% 0%;
        border: 5px solid #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
