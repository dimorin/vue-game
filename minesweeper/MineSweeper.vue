<template>
  <div>
        <h1>MineSweeper</h1>
        <mine-form></mine-form>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import store, { INCREMENT_TIMER } from './store';
import MineForm from './MineForm';
import TableComponent from './TableComponent';

let interval;

export default {
    store,
    components:{
        MineForm,
        TableComponent,
    },
    computed:{ // computed는 캐싱이 된다.
        ...mapState(['timer','result','halted']),
    },
    data(){
        return {
           
        }
    },    
    methods:{

    },
    created(){
        
    },
    mounted(){
        console.log('mounted');
    },    
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    watch:{
        halted(value, oldValue){
            if(value === false){    // 게임 시작
                interval = setInterval(() => {
                    this.$store.commit(INCREMENT_TIMER);
                }, 1000)
            }else{ // 게임 중단
                clearInterval(interval);
            }
        }
    }
}
</script>

<style>
    table{border-collapse: collapse;}
    td{border:1px solid black;width:40px;height:40px;text-align:center;}
</style>