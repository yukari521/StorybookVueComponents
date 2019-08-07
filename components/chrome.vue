<template>
  <div class="chrome-box">
      <!-- <div class="logo"></div> -->
    <div class="chrome-logo"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.chrome-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #eee;
}
.logo{
    width: 200px;
  height: 100px;
  background: -webkit-radial-gradient(left center,#eee 0%, #eee 100px, #4c8bf5 100px, #4c8bf5 calc(100% - 100px),#eee calc(100% - 100px),#eee 100%);
  /* radial-gradient(#4c8bf5 26%, white 0, white 30%, transparent 0); */
    /* linear-gradient(120deg, #18a05e 50%, transparent 0) 0 100% / 115% 44%,
    linear-gradient(60deg, #18a05e 50%, transparent 0) 0 0/ 35% 70%,
    linear-gradient(120deg, #dd5144 50%, transparent 0) 0 0 / 50% 197%,
    linear-gradient(#dd5144, #dd5144) 0 0 / 100% 29%, linear-gradient(#ffce43, #ffce43); */
  background-repeat: no-repeat;
}
.chrome-logo {
  width: 100px;
  height: 100px;
  background: radial-gradient(#4c8bf5 26%, white 0, white 30%, transparent 0),
    linear-gradient(120deg, #18a05e 50%, transparent 0) 0 100% / 115% 44%,
    linear-gradient(60deg, #18a05e 50%, transparent 0) 0 0/ 35% 70%,
    linear-gradient(120deg, #dd5144 50%, transparent 0) 0 0 / 50% 197%,
    linear-gradient(#dd5144, #dd5144) 0 0 / 100% 29%, linear-gradient(#ffce43, #ffce43);
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 4px solid white;
}
</style>
