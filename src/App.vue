<template>
    <div id="app">
        <ul>
            <listItem v-for="img in imgData" v-bind:imgData="img"></listItem>
        </ul>
    </div>
</template>

<script>
    import listItem from './components/img-list-item/img-list-item.vue';
    export default {
      data () {
        return {
          name: 'Vue',
          imgData: [
            {
              src: 'https://s-media-cache-ak0.pinimg.com/236x/b0/1a/b0/b01ab0d72d6eee99b794ded1b1f7ee9e.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/d8/c7/da/d8c7dab885a2a049ee986d523ba8047d.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/d8/c7/da/d8c7dab885a2a049ee986d523ba8047d.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/d8/c7/da/d8c7dab885a2a049ee986d523ba8047d.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/b0/1a/b0/b01ab0d72d6eee99b794ded1b1f7ee9e.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/b0/1a/b0/b01ab0d72d6eee99b794ded1b1f7ee9e.jpg',
              alt: 'testPicture'
            },{
              src: 'https://s-media-cache-ak0.pinimg.com/236x/d8/c7/da/d8c7dab885a2a049ee986d523ba8047d.jpg',
              alt: 'testPicture'
            }, {
              src: 'https://s-media-cache-ak0.pinimg.com/236x/b0/1a/b0/b01ab0d72d6eee99b794ded1b1f7ee9e.jpg',
              alt: 'testPicture'
            }
          ]
        };
      },
      components: {
        'listItem': listItem,
      }
    };
</script>

<style lang="sass" src="./App.scss"></style>