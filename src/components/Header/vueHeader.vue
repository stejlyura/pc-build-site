<template>
    <header>
        <h1>DriveOn</h1>
        <div class="menu-list">
            <div class="burger-menu" data-js-burger-menu>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="ul-list" data-js-ul-list>
                <li><a href="#">Models</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li><button>Build your own</button></li>
            </ul>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '_vue_header.scss';
</style>

<script>
    import './header.ts'
    import { showMenu } from './header.ts'
</script>