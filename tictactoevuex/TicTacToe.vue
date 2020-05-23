<template>
  <div>
      <h1>TicTacToe</h1>
      <div>{{turn}}의 턴입니다.</div>
      <table-component :tableData="tableData"></table-component>      
      <div v-if="winner">{{winner}} 승리</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import store from './store';
import TableComponent from './TableComponent';

export default {
    store,
    components:{
       TableComponent
    },
    computed:{ // computed는 캐싱이 된다.
        ...mapState(['winner','turn','tableData']),
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
        
    }
}
</script>

<style>
    table{border-collapse: collapse;}
    td{border:1px solid black;width:40px;height:40px;text-align:center;}
</style>