<template>
    <div class="dancer__container">
        <div class="dancer__blocks">
            <div class="boys-block__block border">
                <div class="dancer__block-boys boys-block">
                    <h2 class="boys-block__title">Boys</h2>
                </div>
                <ul class="boys-block__list">
                    <li
                        v-for="boy in getBoysList"
                        :key="boy.id"
                        :class="{ 'boys-block__list-item--selected': getSelectedBoys(boy.id) }"
                        class="boys-block__list-item"
                        @click="selectedBoy(boy.id)"
                    >
                        {{ boy.name }}
                    </li>
                </ul>
                <div v-if="getBoysList.length === 0" class="boys-block__empty">Boys list is empty</div>
            </div>
            <div class="dancer__block-button">
                <button class="dancer__button" :disabled="isLackOfDancer" @click="addCouple">Add</button>
            </div>

            <div class="boys-block__block border">
                <div class="dancer__block-boys boys-block">
                    <h2 class="boys-block__title">Girls</h2>
                </div>
                <ul class="boys-block__list">
                    <li
                        v-for="girl in getGirlsList"
                        :key="girl.id"
                        :class="{ 'boys-block__list-item--selected': getSelectedGirls(girl.id) }"
                        class="boys-block__list-item"
                        @click="selectedGirl(girl.id)"
                    >
                        {{ girl.name }}
                    </li>
                </ul>
                <div v-if="getGirlsList.length === 0" class="boys-block__empty">Girls list is empty</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DancerContainer',

    computed: {
        ...mapGetters(['getSelectedBoys', 'getSelectedGirls', 'getBoysList', 'getGirlsList', 'isLackOfDancer']),
    },

    methods: {
        ...mapActions(['addCouple', 'selectedBoy', 'selectedGirl']),
    },
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>
