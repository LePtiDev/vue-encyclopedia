<template>
    <div class="container-body">
        <h1>Documentation</h1>
        <p class="explication">Tu trouvera ici toute la documentation pour vuecyclopedie</p>

        <h2>Buttons</h2>
        <h3>Regular</h3>
        <div class="row">
            <en-button type="primary" title="primary"/>
        </div>
        <div class="row">
            <en-button type="secondary" title="secondary"/>
        </div>
        <div class="row">
            <en-button type="terciary" title="terciary"/>
        </div>
        <h3>Small</h3>
        <div class="row">
            <en-button type="primary" small title="primary"/>
        </div>
        <div class="row">
            <en-button type="secondary" small title="secondary"/>
        </div>
        <div class="row">
            <en-button type="terciary" small title="terciary"/>
        </div>
    </div>
</template>

<script lang="ts">
import EnButton from './components/actions/EnButton.vue'
export default {
    components: {
        EnButton
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
    }
}
</style>
