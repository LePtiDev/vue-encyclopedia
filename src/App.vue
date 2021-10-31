<template>
    <div class="container-body">
        <h1>Documentation</h1>
        <p class="explication">Tu trouvera ici toute la documentation pour vuecyclopedie</p>
        <h2>Buttons</h2>
        <h3>Regular</h3>
        <div class="row">
            <en-button class="margin-element" type="primary" title="Primary"/>
            <en-button class="margin-element" type="primary" title="Primary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="primary" title="Primary" iconsRight="ti ti-chevron-down"/>
            <en-button type="primary-icon" icon="ti ti-dots-vertical"/>
        </div>
        <div class="row">
            <en-button class="margin-element" type="secondary" title="Secondary"/>
            <en-button class="margin-element" type="secondary" title="Secondary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="secondary" title="Secondary" iconsRight="ti ti-chevron-down"/>
            <en-button type="secondary-icon" icon="ti ti-dots-vertical"/>
        </div>
        <div class="row">
            <en-button class="margin-element" type="terciary" title="Terciary"/>
            <en-button class="margin-element" type="terciary" title="Terciary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="terciary" title="Terciary" iconsRight="ti ti-chevron-down"/>
            <en-button type="terciary-icon" icon="ti ti-dots-vertical"/>
        </div>
        <h3>Small</h3>
        <div class="row">
            <en-button class="margin-element" type="primary" small title="Primary"/>
            <en-button class="margin-element" type="primary" small title="Primary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="primary" title="Primary" small iconsRight="ti ti-chevron-down"/>
            <en-button type="primary-icon" small icon="ti ti-dots-vertical"/>
        </div>
        <div class="row">
            <en-button class="margin-element" type="secondary" small title="Secondary"/>
            <en-button class="margin-element" type="secondary" small title="Secondary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="secondary" title="Secondary" small iconsRight="ti ti-chevron-down"/>
            <en-button type="secondary-icon" icon="ti ti-dots-vertical"/>
        </div>
        <div class="row">
            <en-button class="margin-element" type="terciary" small title="Terciary"/>
            <en-button class="margin-element" type="terciary" small title="Terciary" iconsLeft="ti ti-plus"/>
            <en-button class="margin-element" type="terciary" title="Terciary" small iconsRight="ti ti-chevron-down"/>
            <en-button type="terciary-icon" icon="ti ti-dots-vertical"/>
        </div>
    </div>
</template>

<script lang="ts">
import EnButton from './components/actions/EnButton.vue'
export default {
    components: {
        EnButton,
    },
}
</script>

<style lang="scss">
body{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.container-body{
    width: 80vw;
    margin-left: 10vw;
    padding-top: 100px;
    h2{
        margin-bottom: 20px;
    }
    h3{
        margin-bottom: 10px;
        color: #71717A;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
    }
    p{
        margin-bottom: 50px;
    }
    .row{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        .margin-element{
            margin-right: 15px;
        }
    }
}
</style>
