<template>
    <div id="main">
        <Hero/>
    </div> 
</template>

<script>
import Hero from "@/components/Hero"

export default {
    name: 'Main',
    components: {
        Hero
    }
}
</script>

<style scoped>
    #main {
        height: 100%;
    }
</style>