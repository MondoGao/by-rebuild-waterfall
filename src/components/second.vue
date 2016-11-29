<template>
    <div>
        <h1>I am HugoGao</h1>
        <a href="#">written by {{author}}</a>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "Mondo",
        articles: [],
      };
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        this.articles = response.data.subjects;
      }, function (response) {
        console.log(response);
      });
    }
  };
</script>

<style>
</style>