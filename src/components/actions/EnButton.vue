<template>
    <button :class="small ? 'button-' + type + '--small' : 'button-'+ type +'--regular'">
        <v-icon name="beer"/>
        <span>{{title}}</span>
    </button>
</template>
<script lang="ts">
export default {
    name: "en-button",
    props: {
        title: String,
        small: Boolean,
        type: {
            default: "primary"
        }
    },
}
</script>