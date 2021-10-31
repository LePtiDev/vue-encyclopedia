<template>
    <button :class="small ? 'button-' + type + '--small' : 'button-'+ type +'--regular'" @click="click()">
        <i v-if="iconsLeft" class="icon-left" :class="iconsLeft"></i>
        <span v-if="title">{{ title }}</span>
        <i v-if="iconsRight" class="icon-right" :class="iconsRight"></i>
        <i v-if="icon" class="icon" :class="icon"></i>
    </button>
</template>
<script lang="ts">
export default {
    name: "en-button",
    props: {
        title: String,
        small: Boolean,
        icon: String,
        iconsLeft: String,
        iconsRight: String,
        type: {
            default: "primary"
        }
    },
    methods: {
        click(){
            this.$emit("click")
        }
    }
}
</script>