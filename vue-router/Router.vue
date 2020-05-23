<template>
    <div>
        <h1>Router</h1>
        <div>
            <router-link to="/game/index">게임 매쳐</router-link>
            <router-link to="/game/baseball?pages=3&offset=10">숫자야구</router-link>
            <router-link to="/game/lottogenerator">로또 생성기</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import router from './routes';

export default {
    router,    
}
</script>

<style>

</style>