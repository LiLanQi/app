<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Floor></Floor>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>


<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
    export default {
        name:'',
        components:{
            ListContainer,
            Recommend,
            Rank,
            Floor,
            Brand
        },

    }
</script>

<style lang="scss" scoped>

</style>