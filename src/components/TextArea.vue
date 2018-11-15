<template>
  <div class="textArea">
    <!-- <h1>CHRISTMAS</h1> -->
    <div ref="paper" v-if="ContentVisible" class="paper">
      <div class="paper__container">
        要填什麼內容，之前說的我忘了
      </div>
    </div>
    <div v-if="ContentVisible" class="gift">
      <img ref="gift" :src="require('@/assets/images/c_gift.png')">
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'textArea',
  data() {
    return {
      ContentVisible: false,
    };
  },
  computed: {
    chapter() {
      return this.$store.getters.getChapter;
    },
  },
  watch: {
    chapter(value) {
      if (value === 'three') {
        const showContent = () => {
          this.$nextTick(() => {
            this.ContentVisible = true;

            anime({
              targets: this.$refs.gift,
              opacity: 0.9,
              scale: 1.4,
              delay: 550,
            });

            const animateButton = (scale, duration, elasticity) => {
              anime.remove(this.$refs.gift);
              anime({
                targets: this.$refs.gift,
                scale,
                duration,
                elasticity,
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
            }, 800);
          });
        };

        setTimeout(() => {
          showContent();
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .textArea {
    position: absolute;
    text-align: center;
    z-index: 1;
    >p {
      font-size: 1.15rem;
    }
    .paper {
      height: 360px;
      width: 400px;
      background-image: url(../assets/images/d_paper.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 999;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.1);
      &__container {
        padding: 6.5rem;
      }
    }
    .gift {
      // opacity: 0;
      z-index: 999;
      > img {
        cursor: pointer;
      }
    }
  }
</style>
