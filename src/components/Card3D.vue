<template>
  <div class="card3d">
    <div @click="clickCard" class="scene">
      <div class="panel" :class="{ one: chapter === 'one', two: chapter === 'two', top: chapter === 'three' }">
        <div class="front">

        </div>
        <div class="back">

        </div>
      </div>
      <div class="panel" :class="{ one: chapter === 'one', two: chapter === 'two', bottom: chapter === 'three' }">

      </div>
      <div ref="paper" v-if="chapter === 'three'" class="paper">
        <div class="paper__container">
          要填什麼內容，之前說的我忘了
        </div>
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
  name: 'card3d',
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
            scale: 1.4,
            delay: 550,
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
                scale: {
                  value: 1.1,
                  duration: 800,
                },
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

    >.panel {
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

        >.front {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 5px solid #fff;
          box-sizing: border-box;
        }

        >.back {
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
    .paper {
      position: absolute;
      height: 360px;
      width: 400px;
      background-image: url(../assets/images/d_paper.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 1;
      pointer-events: none;
      opacity: 0;
      transform: scale(.1);
      &__container {
        padding: 6.5rem;
      }
    }
    .gift {
      position: absolute;
      >img {
        cursor: pointer;
        transform: scale(.1);
      }
    }
  }
}
</style>
