<template>
    <div class="couple-dancer__wrapper">
        <div class="couple-dancer__container">
            <div class="couple-dancer__block">
                <dancer-container />
            </div>
            <div class="couple-dancer__block-chosen">
                <h2 class="couple-dancer__title">Chosen couples</h2>
            </div>
            <div class="couple-dancer__border border">
                <ul class="couple-dancer__list">
                    <li v-for="(item, index) in getSelectedCouples" :key="item.id" class="couple-dancer__couples">
                        {{ index + 1 }}. {{ item.boy.name }} - {{ item.girl.name }}
                    </li>
                </ul>
                <div v-if="getSelectedCouples.length === 0">Chosen couples list is empty!</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DancerContainer from './DancerContainer.vue'
export default {
    name: 'CoupleDance',
    components: { DancerContainer },
    computed: {
        ...mapGetters(['getSelectedCouples']),
    },
    methods: {
        ...mapActions(['setList']),
    },
    created() {
        this.setList()
    },
}
</script>

<style lang="scss" scoped></style>
