<template>
  <div>
      <h1>TicTacToe</h1>
      <table-component :tableData="tableData"></table-component>
      <div>{{turn}}의 턴입니다.</div>
      <div v-if="winner">{{winner}} 승리</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent';
import EventBus from './EventBus';
export default {
    components:{
       TableComponent
    },
    data(){
        return {
           tableData:[
               ['','',''],
               ['','',''],
               ['','','']
           ],
           turn:'O',
           winner:'',
        }
    },
    computed:{ // computed는 캐싱이 된다.
       
    },
    methods:{
        onClickTd(rowIndex,cellIndex){            
            console.log(rowIndex,cellIndex);
            this.$set(this.tableData[rowIndex], cellIndex, this.turn);
            
            let win = false;
            if(this.tableData[0][0] === this.turn && this.tableData[0][1] === this.turn && this.tableData[0][2] === this.turn){
                win = true;
            }            
            if(this.tableData[1][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[1][2] === this.turn){
                win = true;
            }
            if(this.tableData[2][0] === this.turn && this.tableData[2][1] === this.turn && this.tableData[2][2] === this.turn){
                win = true;
            }
            if(this.tableData[0][0] === this.turn && this.tableData[1][0] === this.turn && this.tableData[2][0] === this.turn){
                win = true;
            }
            if(this.tableData[0][1] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][1] === this.turn){
                win = true;
            }
            if(this.tableData[0][2] === this.turn && this.tableData[1][2] === this.turn && this.tableData[2][2] === this.turn){
                win = true;
            }
            if(this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn){
                win = true;
            }
            if(this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn){
                win = true;
            }

            if(win){ //이긴 경우:3줄 달성
                this.winner = this.turn;
                this.turn = 'O';
                this.tableData = [['','',''],['','',''],['','','']];
            }else{ //무승부
                let all = true; // all 이 true 이면 무승부라는 뜻
                this.tableData.forEach((row) => {
                    row.forEach((cell) =>{
                        if(!cell){
                            all = false;
                        }
                    })
                })
                if(all){ //무승부
                    this.turn = 'O';
                    this.winner = '';
                    this.tableData = [['','',''],['','',''],['','','']];
                }else{
                    this.turn = this.turn === 'O' ? 'X' :'O';
                }                
            }            
        }
    },
    created(){
        EventBus.$on('clickTd', this.onClickTd);
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