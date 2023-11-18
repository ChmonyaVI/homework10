<template>
    <div class="home">
        <couple-dance />
    </div>
</template>

<script>
import CoupleDance from '@/components/CoupleDance.vue/index.vue'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: { CoupleDance },
}
</script>
