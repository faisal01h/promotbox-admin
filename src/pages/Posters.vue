<template>
  <div class="posters-wrapper">
    <h1>Poster</h1>
    <div class="search">
      <form action="">
        <input type="text" placeholder="search" />
        <button>cari</button>
      </form>
    </div>

    <div class="filter-wrapper">
      <select name="kategori" id="kategori" class="filter">
        <option value="" selected disabled hidden>kategori</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <select name="sortby" id="sortby" class="filter">
        <option value="" selected disabled hidden>sort by</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>

    <div class="poster-wrapper">
      <a href="">
        <div class="poster-item">
          <img src="../assets/poster-lomba-smp.png" alt="" />
          <div class="poster-detail">
            <h2>Judul</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
              vitae excepturi libero molestiae voluptate repellat magnam
              quisquam ex doloribus iure, quis aspernatur quos maiores eius
              totam asperiores unde esse! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium officiis error at voluptatum
              molestiae inventore iure libero optio, aut vitae iste! Culpa,
              voluptatibus laudantium distinctio vel totam expedita. Vel, eum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit reiciendis ratione ea! Ad incidunt voluptatum veniam
              dignissimos illo, et dolor! Dolor, non nobis. Facilis recusandae
              iusto nisi hic officia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est quaerat laboriosam voluptas provident fugiat
              ad quisquam modi tempore temporibus! Sapiente nesciunt officiis
              esse nemo recusandae eligendi vel optio ullam alias?
            </p>
          </div>
        </div>
      </a>

      <a href="">
        <div class="poster-item">
          <img src="../assets/postr-gel1revbaru-1-scaled.jpg" alt="" />
          <div class="poster-detail">
            <h2>Judul</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
              vitae excepturi libero molestiae voluptate repellat magnam
              quisquam ex doloribus iure, quis aspernatur quos maiores eius
              totam asperiores unde esse! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium officiis error at voluptatum
              molestiae inventore iure libero optio, aut vitae iste! Culpa,
              voluptatibus laudantium distinctio vel totam expedita. Vel, eum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit reiciendis ratione ea! Ad incidunt voluptatum veniam
              dignissimos illo, et dolor! Dolor, non nobis. Facilis recusandae
              iusto nisi hic officia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est quaerat laboriosam voluptas provident fugiat
              ad quisquam modi tempore temporibus! Sapiente nesciunt officiis
              esse nemo recusandae eligendi vel optio ullam alias?
            </p>
          </div>
        </div>
      </a>

      <a href="">
        <div class="poster-item">
          <img src="../assets/poster-lomba-smp.png" alt="" />
          <div class="poster-detail">
            <h2>Judul</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
              vitae excepturi libero molestiae voluptate repellat magnam
              quisquam ex doloribus iure, quis aspernatur quos maiores eius
              totam asperiores unde esse! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium officiis error at voluptatum
              molestiae inventore iure libero optio, aut vitae iste! Culpa,
              voluptatibus laudantium distinctio vel totam expedita. Vel, eum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit reiciendis ratione ea! Ad incidunt voluptatum veniam
              dignissimos illo, et dolor! Dolor, non nobis. Facilis recusandae
              iusto nisi hic officia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Est quaerat laboriosam voluptas provident fugiat
              ad quisquam modi tempore temporibus! Sapiente nesciunt officiis
              esse nemo recusandae eligendi vel optio ullam alias?
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.posters-wrapper {
  @apply py-5 px-10 rounded-xl flex flex-col gap-y-4 bg-white;
  height: 84%;
  margin: 5%;
}
.posters-wrapper h1 {
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

/* Filter */
.filter {
  @apply rounded-lg mr-4 p-1;
  border: 1px solid rgb(100, 116, 139);
}

/* Poster */
.poster-wrapper {
  @apply flex flex-col gap-y-4 overflow-y-scroll;
}
.poster-item {
  @apply bg-slate-100 rounded-xl flex;
}
.poster-item img {
  @apply h-40 w-28 rounded-l-xl object-cover;
}
.poster-detail {
  @apply p-4;
}
.poster-detail h2 {
  @apply font-bold;
}
.poster-detail p {
  @apply text-sm h-24 overflow-y-hidden;
}
</style>
