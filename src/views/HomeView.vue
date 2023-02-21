<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/plugins/axios'
export default defineComponent({
  name: 'HomeView',
  components: {
  },
  methods:{
    async testConnection(){
      axios.get('api/v1')
        .then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        })
      // await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
      //   .then((res) => {
      //     console.log(res)
      //   }).catch((error) => {
      //     console.log('Error', error);
      //   })
    }
  },
  created(){
    this.testConnection();
  },
});
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>