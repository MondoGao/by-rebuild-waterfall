<template>
    <div id="app">
        <fallList v-for="(list, index) in listData" :listData="list"></fallList>
    </div>
</template>

<script>
    import imgData from './assets/data.json';
    import fallList from './components/img-list-item/img-list.vue';
    export default {
      data () {
        return {
          imgData: imgData.concat(),
          finImg: [],
          listData: [],
        };
      },
      components: {
        "fallList": fallList,
      },
      methods: {
        'waterFall': function (cb) {
          let screenWidth = document.documentElement.offsetWidth;
          let listWidth = 256; // 后期写到data里
          let listNum = Math.floor(screenWidth / listWidth);
          // 初始化每列的数组
          for (let i = 0; i < listNum && this.imgData.length > 0; i++) {
            this.finImg.push(this.imgData.pop());
            this.listData.push([this.finImg[this.finImg.length - 1]]);
          }
          this.$nextTick(function () {
            this.renderListItem(cb);
          });
        },
        'findMinList': function () {
          let minHeight = this.$children[0].$el.scrollHeight,
            index = 0;
          for (let i = 1; i < this.$children.length; i++) {
            if (this.$children[i].$el.scrollHeight < minHeight) {
              minHeight = this.$children[i].$el.scrollHeight;
              index = i;
            }
          }
          return index;
        },
        'renderListItem': function (cb) {
            // 渲染剩下的图片
            let index = this.findMinList();
            this.finImg.push(this.imgData.pop());
            this.listData[index].push(this.finImg[this.finImg.length - 1]);
            console.log(this.finImg.length);
            if (this.imgData.length > 0) {
              this.$nextTick(function () {
                this.renderListItem(cb);
              });
            } else if (cb) {
              cb();
            }
        },
        'recaculate': (function () {
          let time;
          return function () {
            clearTimeout(time);
            time = setTimeout(this.resetData, 500);
          }
        })(),
        'resetData': (function () {
          let lastScroll = 0;
          return function () {
            lastScroll = document.body.scrollTop;
            this.imgData = this.finImg.reverse();
            this.listData = [];
            this.finImg = [];
            document.body.style.paddingTop = lastScroll;
            this.waterFall(function () {
              console.log("CB！")
              document.body.scrollTop = lastScroll;
              document.body.style.paddingTop = 0;
            });
          }
        })(),
        'loadMore': function () {
          let index = this.findMinList();
          if (this.$children[index].$el.getBoundingClientRect().bottom < window.innerHeight + 200) {
            this.imgData = imgData.concat();
            this.renderListItem();
          }
        }
      },
      mounted: function () {
        this.waterFall();
        window.addEventListener('resize', this.recaculate);
        window.addEventListener('scroll', this.loadMore);
      }
    };
</script>

<style lang="sass">
    html, body, ul, li, div, h4, p, span {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    #app {
        text-align: center;
    }

</style>