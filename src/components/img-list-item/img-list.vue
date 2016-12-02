<template>
    <ul>
        <li v-for="(listItem, index) in listData" :key="index">
            <div class="item-container">
                <div class="img-wrap">
                    <img :src=" listItem.images['236x'].url" alt="#" :height="listItem.images['236x'].height" :width="listItem.images['236x'].width">
                </div>
                <div class="meta-wrap">
                    <h4>{{ listItem.source_interest.url_name }}</h4>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
  export default {
    props: {
      listData: {
        type: [Array, Object]
      }
    }
  };
</script>

<style lang="sass">
    ul {
        display: inline-block;
        width: 256px;
        vertical-align: top;
        list-style: none;
    }
    li {
        position: relative;
        padding: 10px;
        margin-bottom: 3px;
        &::before {
             content: "";
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background-color: rgba(0, 0, 0, 0.25);
             transform: scale(0.95);
             opacity: 0;
             border-radius: 10px;
             transition: all .25s;
             z-index: -1;
         }
        &:hover {
            &::before {
                 opacity: 1;
                 transform: scale(1);
             }
        }
    }

    .img-wrap {
        display: inline-block;
        border-radius: 5px;
        overflow: hidden;
        img {
            display: block;
            width: 236px;
        }
    }
    .meta-wrap {
        height: 20px;
    }
    .list-enter-active, .list-leave-active {
        transition: all .5s;
    }
    .list-enter, .list-leave-active {
        opacity: 0;
    }
</style>