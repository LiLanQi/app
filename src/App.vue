<template>
  <div >
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<script>
//引入
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted() {
        this.$store.dispatch('getCategoryList');
    },
}
</script>

<style scoped>

</style>
