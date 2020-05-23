<template>
    <table>
        <tr-component v-for="(rowData,i) in tableData" :key="i" :rowData="rowData" :rowIndex="i"></tr-component>
    </table>  
</template>

<script>
import TrComponent from './TrComponent';
export default {
    props:{
        tableData:Array,
    },
    components:{
        TrComponent
    }
}
</script>

<style>

</style>