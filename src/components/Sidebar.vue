<template>
    <div class="sidebar-wrapper">
        <div class="header">
            <h1>PromotBox</h1>
            <span>Admin Name</span>
        </div>

        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/posters">Posters</router-link>
            <router-link to="/users">Users</router-link>
            <router-link to="/reports">Reports</router-link>
        </div>
    </div>

</template>

<script lang="ts">
import { createApp } from "vue"

type TMenu = {
    route: string,
    text: string
}


createApp({
    name: 'menus',
    data(): Array<TMenu> {
        return (
            [
                {
                    route: '/',
                    text: 'Home'
                },
                {
                    route: '/poster',
                    text: 'Poster'
                }
            ]
        )
        
    }
}).mount("#sidebar");
</script>

<style scoped>
    .sidebar-wrapper {
        width: 25rem;
        @apply flex flex-col p-10;
    }
    .header {
        @apply flex flex-col gap-1;
    }

    .header h1 {
        @apply font-bold text-4xl;
    }

    .links {
        @apply flex flex-col gap-4 mt-[3.5rem];
    }
</style>