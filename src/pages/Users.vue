<template>
  <div class="users-wrapper">
    <h1>Users</h1>
    <div class="search">
      <form action="">
        <input type="text" placeholder="search" />
        <button>cari</button>
      </form>
    </div>
    <div class="users">
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
      <div class="user-item">
        <img src="../assets/man-300x300.png" alt="" />
        <div class="user-detail">
          <h2>Sebuah nama</h2>
          <p>email@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.users-wrapper {
  @apply py-5 px-10 rounded-xl flex flex-col gap-y-4 bg-white;
  height: 84%;
  margin: 5%;
}
.users-wrapper h1 {
  @apply font-bold text-2xl;
}
.search form {
  @apply flex justify-between gap-x-4;
}
.search input {
  @apply bg-slate-100 h-9 w-full px-3 rounded-2xl;
}
.search button {
  @apply bg-sky-300 px-4 py-1 rounded-2xl;
}

/* Users */
.users {
  @apply flex flex-col gap-y-4 h-full overflow-y-scroll;
}
.user-item {
  @apply flex gap-x-4 items-center;
}
.user-item img {
  @apply h-14 w-14;
}
.user-item h2 {
  @apply font-semibold text-lg;
}
.user-item p {
  @apply text-xs;
}
</style>
