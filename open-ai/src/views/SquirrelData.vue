<template>
    <div>
<h1>test</h1>
    </div>
</template>

<script>
export default {
    data(){
    return{
        animal: {}
    }
    },
    mounted: async function(){
        await getSquirrel()
    },method:{
        getSquirrel:{
            async function() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  squirrel.value = data 
   console.log(squirrel.value )
}
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>