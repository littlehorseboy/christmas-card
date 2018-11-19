<template>
  <div class="textArea">
    <!-- <h1>CHRISTMAS</h1> -->
    <div ref="paper" v-show="ContentVisible" class="paper">
      <div class="paper__container">
        <img ref="title_merry" class="paper__container__img"
          :src="require('@/assets/images/d_t_merry.png')">
        <img ref="tree01" class="paper__container__tree01"
          :src="require('@/assets/images/c_tree01.png')">
        <img ref="tree02" class="paper__container__tree02"
          :src="require('@/assets/images/c_tree02.png')">
        要填什麼內容，之前說的我忘了，直接用 url query 來改變名字吧 「{{ name }}」
        看你還需要哪些要動的內容
      </div>
    </div>
    <div v-show="ContentVisible" class="bird">
      <img ref="bird" class="bird__img" :src="require('@/assets/images/c_bird.png')">
    </div>
    <div v-show="ContentVisible" class="gift">
      <img ref="gift" class="gift__img" :src="require('@/assets/images/c_gift.png')">
    </div>
    <div v-show="ContentVisible" class="santa">
      <img ref="santa" class="santa__img" :src="require('@/assets/images/b_santa.png')">
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
    name() {
      return this.$route.query.name;
    },
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
              targets: this.$refs.bird,
              translateX: [
                { value: -40, duration: 1000, delay: 500, elasticity: 0 },
                { value: 0, duration: 1000, delay: 500, elasticity: 0 },
              ],
              translateY: [
                { value: 10, duration: 500, elasticity: 100 },
                { value: -10, duration: 500, delay: 1000, elasticity: 100 },
                { value: 0, duration: 500, delay: 1000, elasticity: 100 },
              ],
              rotateY: [
                { value: '0.5turn', duration: 500, delay: 1000, elasticity: 100 },
                { value: '0turn', duration: 500, delay: 1000, elasticity: 100 },
              ],
              loop: true,
            });

            anime({
              targets: this.$refs.gift,
              opacity: 1,
              scale: 1.2,
              delay: 250,
            });

            const santaAnime = anime({
              targets: this.$refs.santa,
              opacity: 1,
              translateX: 250,
              duration: 1000,
            });

            santaAnime.complete = () => {
              anime({
                targets: this.$refs.santa,
                translateX: 250,
                translateY: 10,
                direction: 'alternate',
                loop: true,
                delay: 50,
              });
            };

            const animateButton = (el, scale, duration, elasticity) => {
              anime.remove(el);
              anime({
                targets: el,
                scale,
                duration,
                elasticity,
              });
            };

            const enterButton = (evt) => {
              animateButton(evt.target, 1.4, 800, 400);
            };

            const leaveButton = (evt) => {
              animateButton(evt.target, 1.2, 600, 300);
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

                anime({
                  targets: this.$refs.title_merry,
                  rotate: '2turn',
                  duration: 2000,
                });

                anime({
                  targets: this.$refs.tree01,
                  scale: 1.2,
                  duration: 2000,
                  delay: 350,
                }).complete = () => {
                  anime({
                    targets: this.$refs.tree01,
                    scale: 1.2,
                    translateY: 2,
                    direction: 'alternate',
                    loop: true,
                    delay: 50,
                  });
                };

                anime({
                  targets: this.$refs.tree02,
                  scale: 1.1,
                  duration: 2200,
                  delay: 550,
                }).complete = () => {
                  anime({
                    targets: this.$refs.tree02,
                    scale: 1.1,
                    translateY: 2,
                    direction: 'alternate',
                    loop: true,
                    delay: 80,
                  });
                };
              });

              this.$refs.gift.click();
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
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.1);
      &__container {
        padding: 6.5rem;
        &__img {
          position: absolute;
          top: -2rem;
        }
        &__tree01 {
          position: absolute;
          left: -4rem;
          top: 7rem;
        }
        &__tree02 {
          position: absolute;
          left: 20rem;
          top: 6rem;
        }
      }
    }
    .bird {
      position: absolute;
      right: 0;
      z-index: 999;
    }
    .gift {
      z-index: 999;
      &__img {
        cursor: pointer;
        opacity: 0;
      }
    }
    .santa {
      position: absolute;
      top: -9rem;
      transform: translateX(-310px);
      z-index: 999;
      &__img {
        opacity: 0;
      }
    }
  }
</style>
