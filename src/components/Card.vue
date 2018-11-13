<template>
  <div class="card">
    <div @click="clickCard" class="scene">
      <div class="panel" :class="{ one: chapter === 'one', two: chapter === 'two', top: chapter === 'three' }">
        <div class="front">
          上面
        </div>
        <div class="back">
          上面的背面
        </div>
      </div>
      <div class="panel" :class="{ one: chapter === 'one', two: chapter === 'two', bottom: chapter === 'three' }">
        下面
      </div>
      <div class="paper" v-if="chapter === 'three'">
          <img ref="paper" :src="require('@/assets/images/d_paper.png')">
      </div>
      <div class="gift" v-if="chapter === 'three'">
        <img ref="gift" :src="require('@/assets/images/c_gift.png')">
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'card',
  data() {
    return {
      chapter: 'one',
    };
  },
  methods: {
    clickCard: function () {
      if (this.chapter === 'one') {
        this.chapter = 'two';
      } else if (this.chapter === 'two') {
        this.chapter = 'three';

        this.$nextTick(function () {
          anime({
            targets: this.$refs.gift,
            scale: 1.2,
            rotate: {
              value: 360,
              duration: 1800,
              easing: 'easeInOutSine',
            },
            delay: 250,
          });

          const animateButton = (scale, duration, elasticity) => {
            anime.remove(this.$refs.gift);
            anime({
              targets: this.$refs.gift,
              scale: scale,
              duration: duration,
              elasticity: elasticity,
            });
          };

          const enterButton = () => {
            animateButton(1.4, 800, 400);
          };

          const leaveButton = () => {
            animateButton(1.2, 600, 300);
          };

          setTimeout(() => {
            this.$refs.gift.addEventListener('mouseenter', enterButton, false);
            this.$refs.gift.addEventListener('mouseleave', leaveButton, false);

            this.$refs.gift.addEventListener('click', () => {
              anime({
                targets: this.$refs.paper,
                opacity: 0.9,
                scale: 0.8,
                delay: 50,
              });
            });
          }, 1800);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scene {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin: 80px auto 0 auto;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;

  >.panel {
    transition: height ease-in-out 1s, transform ease-in-out 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    &.one {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/images/starry-night-1149815_1280.jpg);
      background-size: 100% 100%;
      transform: perspective(350px) rotateX(0deg);
      transform-origin: 50% 100%;
    }

    &.two {
      position: absolute;
      width: 100%;
      height: 45%;
      background-image: url(../assets/images/starry-night-1149815_1280.jpg);
      background-size: 100% 100%;
      transform: perspective(350px) rotateX(45deg);
      transform-origin: 50% 0%;
    }

    &.top {
      position: absolute;
      width: 100%;
      height: 50%;
      background-image: url(../assets/images/starry-night-1149815_1280.jpg);
      background-size: 100% 100%;
      transform: perspective(350px) rotateX(155deg);
      transform-origin: 50% 0%;
      z-index: 1;

      >.front {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      >.back {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/greeting-card-965112_1280.jpg);
        background-size: 100% 100%;
        transform: perspective(350px) rotateX(180deg);
      }
    }

    &.bottom {
      width: 100%;
      height: 50%;
      background-image: url(../assets/images/greeting-card-965112_1280.jpg);
      background-size: 100% 100%;
      transform: perspective(350px) rotateX(45deg);
      transform-origin: 50% 0%;
    }
  }
  .paper {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    >img {
      opacity: 0;
      transform: scale(.1);
    }
  }
  .gift {
    position: absolute;
    >img {
      cursor: pointer;
    }
  }
}
</style>
