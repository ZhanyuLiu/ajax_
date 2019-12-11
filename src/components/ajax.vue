<template>
  <div>
    <button @click="btn">发送请求</button>
  </div>
</template>

<script>
  export default {
    name: "ajax",
    methods: {
      btn(){
        // eslint-disable-next-line no-undef
        ajax("https://www.12306.cn/index/",function (xhr) {
          alert(xhr.responseText);
          // eslint-disable-next-line no-unused-vars
        },function (xhr) {
          alert("请求失败");

        })
      }
  }

  }
</script>

<style scoped>

</style>