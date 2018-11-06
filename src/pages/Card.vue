<template>
  <div class="card">
    <!-- particles.js container -->
    <div id="particles-js">
      <TextArea></TextArea>
    </div>
  </div>
</template>

<script>
import 'particles.js'; /* global particlesJS */

export default {
  name: 'Card',
  mounted() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 8,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

    const update = () => {
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },
  components: {
    TextArea: () => import('@/components/TextArea'),
  },
};
</script>

<style lang="scss">
/* ---- particles.js container ---- */
  #particles-js {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    // background-image: url("../assets/christmas-3006743_1920.jpg");
    background-image: url("../assets/christmas-3006743_1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    @media (max-width: 800px) {
      background-position: unset;
    }
    >canvas {
      position: absolute;
      top: 0;
    }
  }
</style>
