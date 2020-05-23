import Vue from 'vue';
import VueRouter from 'vue-router';

import GameMatcher from './GameMatcher'
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history', // history 모드에서 새로고침을 하면 서버는 주소를 모르기 때문에 서버에도 주소를 등록해줘야 한다.
    routes:[
        {path:'/game/:name', component:GameMatcher} //game/baseball
    ]
})