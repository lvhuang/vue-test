<template>
  <div class = 'pageA'>
    <div>
    A{{ info }}
  </div>
  </div>
</template>


<script>
import {getUserApi} from '../apis/apitest'
import {getUserService} from '../services/servicetest'

export default {
  name: "pageA",
  data () {
    return {
      info:null
    }
  },
  methods:{
    getUser(){
      getUserApi()
      .then(response => {
        this.info = getUserService(response)
      })
      .catch(function (error) { // 请求失败处理
        console.error(error);
      });
    }
  },
  mounted(){
    this.getUser();
  }
};
</script>>

<style scoped>

.pageA{

}
</style>