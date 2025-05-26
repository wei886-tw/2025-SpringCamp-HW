<template >
  <div class="container-fluid px-0 position-relative">
    <!-- Hero -->
    <div class="container-fluid px-0 d-flex">
      <div
        class="container-fluid"
        style="
          background-position: center;
          height: 834px;
          background-repeat: no-repeat;
          background-image: url('../../../public/Alyse-Wang.jpg');
          background-size: cover;
        "
      ></div>

      <div
        class="container-fluid px-0 ps-80 pt-300 d-flex flex-column flex-nowrap"
        style="
          height: 834px;
          background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;

          background-size: cover;
        "
      >
        <p class="noto-sans-tc fw-bolder text-secondary fs-120 mb-0">Alyse Wang</p>
        <p class="noto-sans-tc fw-bold text-secondary fs-28">前端工程師 & 職涯諮詢師</p>
      </div>
    </div>

    <!-- * 突出區塊 -->
    <div
      class="container ps-40 py-80 noto-sans-tc fs-28 contact-links bg-white"
      style="max-width: 60%"
    >
      <p class="mb-16">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
      <p class="mb-16">
        擅長 React、Vue
        等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
      </p>
      <p class="mb-16"></p>
    </div>
  </div>

  <!-- * Services section -->
  <div class="container-fluid bg-white pt-240">
    <div class="container">
      <h2>專業服務與方案</h2>
    </div>
  </div>
</template>

<style>
.contact-links {
  position: absolute;
  top: 80%;
  left: 30%;
  /* margin-right: 120px; */
  /* margin-bottom: -150px; */
}
</style>
