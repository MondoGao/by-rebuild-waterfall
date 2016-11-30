<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h2>{{ msg + 'test' }}</h2>
        <h3 v-if="id">seen</h3>
        <h1 v-else>Big seen</h1>
        <ul>
            <li v-for="item in items">
                {{ item }}
            </li>
        </ul>
        <template v-if="!id">
            <div>tst</div>
            <p>{{ messageT }}</p>
        </template>
        <p v-on:click="change">Computed message: {{ reversedMessage }}</p>
        <input type="text" v-model="messageT">
        <br>
        <hello-o my-message="Hello!" v-model="myMessage">
        </hello-o>
        <div>{{ myMessage }}</div>
    </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
          msg: 'Welcome to Vue',
          id: false,
          messageT: '',
          items: [
            1,2,3,4,5
          ],
          myMessage: "test",
        };
      },
      computed: {
        reversedMessage: function () {
          return this.msg.split('').reverse().join('');
        }
      },
      methods: {
        change: function () {
          this.items.reverse();
        }
      },
      components: {
        'hello-o': {
          props: {
            'myMessage': {
              type: [String, Number],
              required: false,
            }
          },
          methods: {
            updateValue: function (value) {
//              this.$refs.input.value = value;
              this.$emit('input', value);
            }
          },
          template: '<input v-bind:value="value" v-on:input="updateValue($event.target.value)" ref="input" v-bind:name="value"><span>{{ myMessage }}</span>',
        }
      },
    };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
