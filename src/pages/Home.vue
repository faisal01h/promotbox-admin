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

    <div class="middle-card-wrapper">
      <h1>Daily visitor</h1>
      <div class="statistics">
        <div class="graph">a</div>
        <div class="visitor">
          <p>Today Visitor</p>
          <h1>12</h1>
        </div>
      </div>
    </div>

    <div class="bottom-card-wrapper">
      <div class="note">
        <h1>Note</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad
          corrupti, aut officiis distinctio assumenda neque corporis voluptate
          sit laudantium sapiente repudiandae voluptates sed expedita velit
          explicabo fugit vitae et. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur soluta aspernatur officiis ab. Aliquid
          adipisci autem rem reiciendis, nam sapiente aliquam nesciunt libero
          porro deserunt, cupiditate blanditiis dignissimos necessitatibus fuga.
        </p>
      </div>

      <a class="firebase-link" href="">
        <img src="../assets/icons8-firebase.svg" alt="" />
        firebase
      </a>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.home-wrap {
  @apply flex flex-col justify-between p-10 px-16 h-screen;
}

/* Top Card Styles */

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

/* Middle Card Styles */

.middle-card-wrapper {
  @apply bg-white rounded-xl p-5 w-full h-2/4;
}
.middle-card-wrapper h1 {
  @apply text-xl font-bold;
}
.statistics {
  @apply flex justify-between items-center h-52 w-full mt-1;
}
.graph {
  /* @apply h-full bg-slate-500; */
}
.visitor {
  @apply w-36 h-4/6 flex flex-col justify-center items-center border-l-2 border-gray-500;
}
.visitor h1 {
  @apply font-bold text-6xl;
}

/* Bottom Card Styles */

.bottom-card-wrapper {
  @apply flex justify-between h-1/4;
}
.note {
  @apply bg-white rounded-xl w-4/6 py-3 px-5;
}
.note h1 {
  @apply font-bold text-xl;
}
.note p {
  @apply h-5/6 overflow-y-scroll;
}
.firebase-link {
  @apply bg-white rounded-xl w-1/4 flex flex-col items-center justify-center;
}
</style>
