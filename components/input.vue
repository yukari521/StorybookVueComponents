<template>
    <div class="input-box">
        <el-input type="text" placeholder="Name" v-model="newValue"></el-input>
    </div>
</template>

<script>
export default {
    props:['value'],
    model:{
        prop:'value',
        event:'input'
    },
    computed: {
        newValue: {
            get: function() {
                return this.value;
            },
            set: function(value) {
                this.$emit('input', value);
            }
        }
    }
}
</script>

<style>
.input-box{
    width: 300px;
}
</style>
