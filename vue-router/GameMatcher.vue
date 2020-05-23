<template>
    <div>
        <div v-if="currentGame === 'baseball'">
            <Baseball></Baseball>
        </div>
        <div v-else-if="currentGame === 'lottogenerator'">
            <Lottogenerator></Lottogenerator>        
        </div>
        <div v-else>일치하는 게임이 없음</div>    
    </div>    
</template>

<script>
import Baseball from '../baseball/NumberBaseball';
import Lottogenerator from '../lottogenerator/LottoGenerator';
export default {
    components:{
        Baseball,
        Lottogenerator,
    },
    mounted(){
        console.log(this.$router);
        console.log(this.$route);
    },
    computed:{
        currentGame(){
            return this.$route.params.name;
        }
    }
}
</script>

<style>

</style>