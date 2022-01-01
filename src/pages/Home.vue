<template>
    <div class="home-wrap">
        <div class="top-card-group">
            <div class="top-card">
                <div class="icon"></div>
                <div class="top-card-data">
                    <b>2</b>
                    <span>Posters</span>
                </div>
            </div>

            <div class="top-card">
                <div class="icon"></div>
                <div class="top-card-data">
                    <b>3</b>
                    <span>Users</span>
                </div>
            </div>

            <div class="top-card">
                <div class="icon"></div>
                <div class="top-card-data">
                    <b>0</b>
                    <span>Reported</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">


</script>

<style scoped>
    .home-wrap {
        @apply p-10;
    }
    .top-card {
        @apply bg-white rounded-xl flex py-3 px-5 w-fit gap-5 basis-1/3;
    }

    .top-card-group {
        @apply flex flex-row overflow-x-auto gap-10 flex-nowrap;
    }

    .top-card-data {
        @apply flex flex-col;
    }

    .top-card .icon {
        @apply w-12 h-12 rounded-full bg-gray-600;
    }
</style>
