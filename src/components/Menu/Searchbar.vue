<template lang="html">
  <div>
  	<div style="display: flex; width: 50%; justify-content: center; margin: 0 auto 10px auto;">
        <div class="input-group stylish-input-group">
            <input type="text" class="form-control" :placeholder="placeholder" v-model="searchText">
            <span class="input-group-addon">
                <button type="submit">
                    <span class="fa fa-search"></span>
                </button>
            </span>
        </div>
  	</div>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value'],
  data(){
    return {
      searchText: this.value,
    }
  },
  // methods: {
  //   update(event){
  //     this.$emit('updateInput', event.target.value)
  //   }
  // },
  watch: {
    searchText(){
      this.$emit('input', this.searchText)
    }
  }
}
</script>

<style lang="css">
  .stylish-input-group .input-group-addon{
      background: white !important;

  }
  .stylish-input-group .form-control{
  	border-right:0;
  	box-shadow:0 0 0;
  	border-color:#ccc;
    /*width: 50%;*/
  }
  .stylish-input-group button{
      border:0;
      background:transparent;
  }
</style>
