<template>
    <header>
        <router-link to="/">
            <h1>DriveOn</h1>
        </router-link>

        <router-link to='/configurator'>
            <button>PC confugurator</button>
        </router-link>

    </header>
</template>

<style scoped lang="scss">
    @use '_vue_header.scss';
</style>

<script>
import router from '@/router';

</script>   