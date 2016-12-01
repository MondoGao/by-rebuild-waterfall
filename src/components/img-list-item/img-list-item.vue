<template>
    <li>
        <div v-bind:class="imgClass">
            <img v-bind:src="imgData.src" :alt="imgData.alt">
        </div>
        <div class="meta-wrap">
            <h4>{{ imgData.alt }}</h4>
        </div>
    </li>
</template>

<script>
  import imgLogo from '../../assets/logo.png';
  export default {
    props: {
      imgClass: {
        type: String,
        default: 'img-wrap'
      },
      imgData: {
        type: Object,
        default: {
          src: imgLogo,
          alt: "vue"
        }
      }
    }
  };
</script>

<style lang="sass" src="./img-list-item.scss"></style>