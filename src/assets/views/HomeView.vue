<template >
  <div class="container-fluid px-0 position-relative">
    <!-- Hero -->
    <div class="container-fluid px-0 d-flex pb-200">
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
        <p class="noto-sans-tc fw-bolder text-secondary fs-64 fs-xxl-120 mb-0 flex-nowrap">
          Alyse Wang
        </p>
        <p class="noto-sans-tc fw-bold text-secondary fs-28 mb-140">前端工程師 & 職涯諮詢師</p>
      </div>
    </div>

    <!-- * 突出區塊 -->
    <div class="container px-40 py-80 noto-sans-tc fs-24 fs-xl-28 bg-white fw-bold contact-link">
      <p class="mb-16">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
      <p class="mb-16">
        cc 擅長 React、Vue
        等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
      </p>
      <p class="mb-16"></p>
    </div>

    <!-- * Services section -->
    <div class="container-fluid bg-white">
      <div class="container">
        <div class="row">
          <!-- h2 -->
          <div class="col-12">
            <h2 class="fs-64 noto-sans-tc pt-80 mb-32 fw-bold">專業服務與方案</h2>
          </div>
          <!-- service -->
          <div
            class="col-10 mb-60"
            style="
              height: 320px;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true');
              z-index: 1;
            "
          >
            <div class="container bg-white w-50"
            style="margin-right: -400px;">
              <h3 class="fs-28 fw-bolder">線上諮詢</h3>
              <p class=" ">
                想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
              </p>
            </div>
          </div>

          <!-- <div class="col-10 mx-auto">
            <div
              class="col-10"
              style="
                height: 320px;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true');
              "
            >
              <div class="container bg-white px-24 pb-24 service-right">
                <h3 class="fs-28 fw-bolder mb-8">履歷健檢</h3>
                <p>
                  履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                </p>
              </div>
            </div>
          </div> -->

          <div class="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-link {
  margin-top: -400px;
  position: absolute;
  left: 40%;
  width: 50vw;
}

.service-right {
  margin-bottom: -100px;
  margin-right: -400px;
  z-index: 2;
}
</style>
