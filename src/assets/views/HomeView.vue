<template>
  <div class="container-fluid  position-relative bg-main-bg">
    <!-- * Hero Section -->
    <div class="container-fluid  d-none d-lg-flex pb-lg-200">
      <div class="container-fluid " style="
          background-position: center;
          height: 834px;
          background-repeat: no-repeat;
          background-image: url('./Alyse-Wang.jpg');
          background-size: cover;
        "></div>

      <div class="container-fluid px-0 ps-80 pt-300 d-flex flex-column flex-nowrap d-none d-md-block" style="
          height: 834px;
          background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        ">
        <p class="noto-sans-tc fw-bolder text-secondary fs-64 fs-xxl-120 mb-0 flex-nowrap">
          Alyse Wang
        </p>
        <p class="noto-sans-tc fw-bold text-secondary fs-28 mb-140">前端工程師 & 職涯諮詢師</p>
      </div>
    </div>

    <!-- * Hero Section 手機版 -->
    <div class="container-fluid d-block d-lg-none">
      <div class="container-fluid " style="
          background-position: center;
          height: 440px;
          background-repeat: no-repeat;
          background-image: url('./Alyse-Wang.jpg');
          background-size: cover;
        ">
      </div>

      <div class="pt-24  d-flex flex-column flex-nowrap d-block  hero-section" style="
            height: 582px;
            background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          ">

        <div class="container mx-auto">
          <p class="noto-sans-tc fw-bolder text-secondary fs-48 fs-xxl-120 mb-0 flex-nowrap">
            Alyse Wang
          </p>
          <p class="noto-sans-tc fw-bold text-secondary fs-28  ">前端工程師 & 職涯諮詢師</p>
        </div>

        <div class="container-fluid">
          <!-- * 突出區塊 md 版 -->
          <div
            class="container-fluid px-24 py-40 noto-sans-tc fs-24 fs-xl-28 bg-white fw-bold  d-none d-md-block d-lg-none">
            <p class="mb-16">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
            <p class="mb-16">
              擅長 React、Vue
              等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
            </p>
            <p class="mb-16"></p>
          </div>
          <!-- * 突出區塊 sm 版 -->
          <div class="container-fluid px-24 py-40 noto-sans-tc fs-24 fs-xl-28 bg-white fw-bold  d-block d-md-none">
            <p class="mb-16">嗨，我是 Alyse </p>
            <p class="mb-16">一名深耕前端技術的工程師。</p>
            <p class="mb-16">
              擅長 React、Vue
              等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
            </p>
            <p class="mb-16"></p>
          </div>
        </div>

      </div>
    </div>

    <!-- * 突出區塊 -->
    <div class="container px-40  py-80 noto-sans-tc fs-24 fs-xl-28 bg-white fw-bold contact-link d-none d-lg-block">
      <p class="mb-16">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
      <p class="mb-16">
        擅長 React、Vue
        等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
      </p>
    </div>

    <!-- * 服務區塊 -->
    <div class="container-fluid bg-main-bg">
      <div class="container">
        <div class="row mx-auto">
          <div class="col-12 ">
            <h2 class="fs-48 fs-lg-64 noto-sans-tc pt-80 mb-32 fw-bold ">專業服務與方案</h2>

            <!-- * 履歷健檢 lg 版 -->
            <div class="d-none d-lg-block col-10 mx-auto mb-lg-60 d-flex flex-wrap">
              <div class="d-none d-lg-block col-12 col-lg-6 position-relative" style="
                  height: 320px;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true');
                ">
                <div
                  class="container bg-white d-flex flex-column px-24 py-24 position-relative service-right border-white border-1">
                  <h3 class="fs-28 fw-bolder ">履歷健檢</h3>
                  <p class="text-gray">
                    履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                  </p>
                </div>
              </div>
            </div>

            <!-- * 履歷健檢手機版、平板 -->
            <div class="d-block d-lg-none col-12 mb-32">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true"
                alt="履歷健檢" class="w-100">
              <div class="d-block col-10 d-xl-none mx-auto ">
                <div class="container bg-white d-flex flex-column pt-60 pb-24 px-24 d-block d-lg-none">
                  <h3 class="fs-28 fw-bolder">履歷健檢</h3>
                  <p class="mb-0 text-gray">
                    履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                  </p>
                </div>
              </div>
            </div>

            <!-- * 線上諮詢 lg 版 -->
            <div class="col-10 mx-auto mb-60 d-flex flex-wrap mb-lg-60">
              <div class="col-12 col-lg-6 position-relative">
                <div class="d-none d-lg-block">
                  <div class="container bg-white d-flex flex-column px-24 py-24 position-relative service-left">
                    <h3 class="fs-28 fw-bolder">線上諮詢</h3>
                    <p class=" text-gray">
                      想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-none d-lg-block col-lg-6" style="
            height: 320px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo2.png?raw=true');
                ">
              </div>
            </div>

            <!-- * 線上諮詢手機版、平板 -->
            <div class="col-12 d-lg-none mb-32">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo2.png?raw=true"
                alt="線上諮詢" class="w-100">
              <div class="d-block col-10 d-lg-none  mx-auto" style="width: 80%;">
                <div class="container bg-white  d-flex flex-column pt-60 pb-24 px-0 py-24 d-block d-lg-none">
                  <h3 class="fs-28 fw-bolder">線上諮詢</h3>
                  <p class="mb-0 text-gray">
                    想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
                  </p>
                </div>
              </div>
            </div>

            <!-- * 網頁開發 lg 版-->
            <div class="col-10 mx-auto mb-60 d-flex flex-wrap mb-lg-60">
              <div class="d-none d-lg-block col-lg-6 position-relative" style="
                    height: 320px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo3.png?raw=true');
                  ">
                <div class="d-none d-lg-block">
                  <div class="container bg-white d-flex flex-column px-24 py-24 position-relative service-right">
                    <h3 class="fs-28 fw-bolder">網頁開發</h3>
                    <p class="text-gray ">
                      想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- * 網頁開發手機版、平板 -->
            <div class="d-block col-12 d-lg-none  mx-auto mb-32">
              <div class="col-12">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo3.png?raw=true"
                  alt="網頁開發" class="w-100">
              </div>

              <div class="col-10 bg-white  d-flex flex-column pt-60 pb-24 px-0 py-24 d-block d-lg-none mx-auto">
                <h3 class="fs-28 fw-bolder">網頁開發</h3>
                <p class="mb-0 text-gray">
                  想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。
                </p>
              </div>
            </div>

            <!-- * 企業培訓 lg 版-->
            <div class="col-10 mx-auto mb-60 d-flex flex-wrap mb-lg-60">
              <div class="d-none d-lg-block col-lg-6 position-relative">
                <div class="d-none d-lg-block">
                  <div class="container bg-white d-flex flex-column px-24 py-24 position-relative service-left">
                    <h3 class="fs-28 fw-bolder">企業內訓</h3>
                    <p class=" text-gray">
                      想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-none d-lg-block col-lg-6" style="
                    height: 320px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo4.png?raw=true');
                  ">
              </div>
            </div>

            <!-- * 企業培訓開發手機版、平板 -->
            <div class="col-12 d-block d-lg-none mb-32">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo4.png?raw=true"
                alt="企業培訓開發" class="w-100">
              <div class="d-block col-10 d-xl-none  mx-auto">
                <div class="container bg-white  d-flex flex-column pt-60 pb-24 px-0 py-24 d-block d-lg-none">
                  <h3 class="fs-28 fw-bolder">企業內訓</h3>
                  <p class="mb-0 text-gray">
                    想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- * Blog Swiper -->
    <!-- <div class="container-fluid">
      <swiper :modules="modules" :slides-per-view="3" :space-between="50" pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
        :navigation="{ clickable: true }">
        <swiper-slide>
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="d-flex flex-column h-100">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo5.png?raw=true"
                    alt="自學前端不用怕：從零開始的三大關鍵" class="mb-16 w-100" />
                  <time datetime="2024/10/21">2024/10/21</time>
                  <div class=" mb-8 h-100">
                    <a href="#" class="me-8 text-secondary fs-24">#前端開發</a>
                    <a href="#" class="me-8 text-secondary fs-24">#職涯成長</a>
                    <a href="#"
                      class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16 tag-w30">最新文章
                    </a>
                  </div>
                  <h3>自學前端不用怕：從零開始的三大關鍵</h3>
                  <p class="flex-grow-1" style="
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                          ">
                    嗨，我是
                    Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                  </p>
                  <div class="h-100 d-flex ">
                    <a href="#"
                      class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray  h-100 mt-auto ">閱讀內文
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-4">
                <div class="d-flex flex-column h-100">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo5.png?raw=true"
                    alt="自學前端不用怕：從零開始的三大關鍵" class="mb-16 w-100" />
                  <time datetime="2024/10/21">2024/10/21</time>
                  <div class=" mb-8 h-100">
                    <a href="#" class="me-8 text-secondary fs-24">#前端開發</a>
                    <a href="#" class="me-8 text-secondary fs-24">#職涯成長</a>
                    <a href="#"
                      class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16 tag-w30">最新文章
                    </a>
                  </div>
                  <h3>自學前端不用怕：從零開始的三大關鍵</h3>
                  <p class="flex-grow-1" style="
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                          ">
                    嗨，我是
                    Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                  </p>
                  <div class="h-100 d-flex ">
                    <a href="#"
                      class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray  h-100 mt-auto ">閱讀內文
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-4">
                <div class="d-flex flex-column h-100">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo5.png?raw=true"
                    alt="自學前端不用怕：從零開始的三大關鍵" class="mb-16 w-100" />
                  <time datetime="2024/10/21">2024/10/21</time>
                  <div class=" mb-8 h-100">
                    <a href="#" class="me-8 text-secondary fs-24">#前端開發</a>
                    <a href="#" class="me-8 text-secondary fs-24">#職涯成長</a>
                    <a href="#"
                      class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16 tag-w30">最新文章
                    </a>
                  </div>
                  <h3>自學前端不用怕：從零開始的三大關鍵</h3>
                  <p class="flex-grow-1" style="
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                          ">
                    嗨，我是
                    Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                  </p>
                  <div class="h-100 d-flex ">
                    <a href="#"
                      class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray  h-100 mt-auto ">閱讀內文
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper>
    </div> -->

    <!-- * 部落格精選 -->
    <div class="container-fluid  border-black border-bottom  border-2 border-top px-0 py-60 py-lg-80">
      <div class="container">
        <h2 class="fs-64 fw-bolder  mb-24">部落格精選</h2>
      </div>

      <!-- * xl carousel -->
      <div class="container-fluid d-none d-xl-block ">
        <!-- * indicator -->
        <div id="carouselExampleIndicators" class="carousel slide  d-block">
          <i class="carousel-control-prev bi bi-arrow-left-circle-fill text-secondary fs-40 " type="button"
            style="width: 5%;" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="visually-hidden">Previous</span>
          </i>

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active "
              aria-current="true" aria-label="Slide 1">
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
            </button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
            </button>
          </div>

          <i class="carousel-control-next bi bi-arrow-right-circle-fill text-secondary fs-40 " type="button"
            style="width: 5%; " data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="visually-hidden">Next</span>
          </i>

          <!-- * carousel 本體 -->
          <div class="container d-none d-xl-block">
            <div class="carousel-inner ">
              <div class="carousel-item active ">
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-xl-4  h-100 ">
                      <div class="d-flex flex-column h-100">
                        <img
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo5.png?raw=true"
                          alt="自學前端不用怕：從零開始的三大關鍵" class="mb-16 w-100" />
                        <time datetime="2024/10/21">2024/10/21</time>
                        <div class=" mb-8 h-100">
                          <a href="#" class="me-8 text-secondary fs-24">#前端開發</a>
                          <a href="#" class="me-8 text-secondary fs-24">#職涯成長</a>
                          <a href="#"
                            class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16 tag-w30">最新文章
                          </a>
                        </div>
                        <h3>自學前端不用怕：從零開始的三大關鍵</h3>
                        <p class="flex-grow-1" style="
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      overflow: hidden;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                    ">
                          嗨，我是
                          Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                        </p>
                        <div class="h-100 d-flex ">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray  h-100 mt-auto ">閱讀內文
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4  h-100">
                      <div class="d-flex flex-column h-100">
                        <img class="w-100 mb-16"
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo6.png?raw=true"
                          alt="自學前端不用怕：從零開始的三大關鍵" />
                        <time datetime="2024/07/08">2024/07/08</time>
                        <div class=" mb-8">
                          <a href="#" class="me-8 text-secondary fs-24">#面試準備</a>
                          <a href="#" class="me-8 text-secondary fs-24">#工程師求職</a>
                          <a href="#"
                            class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16 tag-w30">人氣文章
                          </a>
                        </div>
                        <h3>前端面試不再慌：破解常見提問的三大策略</h3>
                        <p class="flex-grow-1" style="
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      overflow: hidden;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                    ">
                          面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。
                        </p>
                        <div class="d-flex mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray ">閱讀內文</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 h-100">
                      <div class="d-flex flex-column h-100">
                        <img class="w-100 mb-16"
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo7.png?raw=true"
                          alt="CSS 魔法大揭密：排版與設計的三大關鍵技巧" />
                        <time datetime="2024/09/03">2024/09/03</time>
                        <div class="mb-8 h-100">
                          <a href="#" class="me-8 fs-24 text-secondary">#CSS 設計</a>
                          <a href="#" class="fs-24 text-secondary">#視覺體驗</a>
                        </div>
                        <h3>CSS 魔法大揭密：排版與設計的三大關鍵技巧</h3>
                        <p style="
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      overflow: hidden;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                    " class="flex-grow-1 mb-16">
                          在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭
                          CSS，打造兼具美感與功能性的網頁。
                        </p>
                        <div class="d-flex mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto ">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- * 第二行的 carousel -->
              <div class="carousel-item" data-bs-wrap="false">
                <div class="container">
                  <div class="row">
                    <div class="col-12 col-xl-4 h-100 ">
                      <div class="d-flex flex-column h-100">
                        <img
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo4.png?raw=true"
                          alt="React 入門不再掛網：三步驟帶你上手核心概念" class="mb-16 w-100" />
                        <time datetime="2024/10/21">2024/10/21</time>
                        <div class=" mb-8">
                          <a href="#" class="me-8 text-secondary fs-24">#React 入門基礎</a>
                        </div>
                        <h3>React 入門不再掛網：三步驟帶你上手核心概念</h3>
                        <p class="flex-grow-1" style="
                              text-overflow: ellipsis;
                              display: -webkit-box;
                              overflow: hidden;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 2;
                            ">
                          你是否對 React
                          感到好奇，卻因為複雜的學習曲線而望之卻步？我建議你從最基礎的三個概念開始：元件、狀態與事件處理。這些是打造現代網頁應用的基石，也是每個前端工程師都必須掌握的核心技能。
                        </p>
                        <div class="d-flex mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray ">閱讀內文</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-xl-4 h-100">
                      <div class="d-flex flex-column h-100">
                        <img class="w-100 mb-16"
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo1.png?raw=true"
                          alt="前端作品集打造指南：讓你的專案成為履歷亮點" />
                        <time datetime="2024/09/07">2024/09/07</time>
                        <div class=" mb-8">
                          <a href="#" class="me-8 text-secondary fs-24">#作品集</a>
                          <a href="#" class="me-8 text-secondary fs-24">#求職攻略</a>
                        </div>
                        <h3>前端作品集打造指南：讓你的專案成為履歷亮點</h3>
                        <p class="flex-grow-1" style="
                              text-overflow: ellipsis;
                              display: -webkit-box;
                              overflow: hidden;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 2;
                            ">
                          想在求職路上脫穎而出嗎？一個出色的前端作品集是你最有力的武器。不只是展示程式碼，更要說出專案背後的故事、解決的問題，以及你獨特的思考過程。
                        </p>
                        <div class="d-flex">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto">閱讀內文</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-xl-4 h-100">
                      <div class="d-flex flex-column h-100">
                        <img class="w-100 mb-16 "
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true"
                          alt="CSS 魔法大揭密：排版與設計的三大關鍵技巧" />
                        <time datetime="2024/09/03">2024/09/03</time>
                        <div class="mb-8">
                          <a href="#" class="me-8 fs-24 text-secondary">#CSS設計</a>
                          <a href="#" class="fs-24 text-secondary">#視覺體驗</a>
                        </div>
                        <h3>CSS 魔法大揭密：排版與設計的三大關鍵技巧</h3>
                        <p style="
                              text-overflow: ellipsis;
                              display: -webkit-box;
                              overflow: hidden;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 2;
                            " class="flex-grow-1 mb-16">
                          在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧。
                        </p>
                        <div class="d-flex">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- * sm - md carousel -->
      <div class="container-fluid d-block d-xl-none mb-32 h-100">
        <div id="carouselExampleControls" class="carousel slide h-100">
          <div class="carousel-inner h-100">
            <div class="carousel-item active h-100">
              <div class="container h-100">
                <div class="row h-100">
                  <div class="col-12  h-100 ">
                    <div class="d-flex flex-column h-100">
                      <img
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo5.png?raw=true"
                        alt="自學前端不用怕：從零開始的三大關鍵" class="mb-16 w-100" />
                      <time datetime="2024/10/21">2024/10/21</time>
                      <div class=" mb-8">
                        <a href="#" class="me-8 text-secondary fs-24">#前端開發</a>
                        <a href="#" class="me-8 text-secondary fs-24">#職涯成長</a>
                        <a href="#"
                          class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16">最新文章
                        </a>
                      </div>
                      <h3>自學前端不用怕：從零開始的三大關鍵</h3>
                      <p class="flex-grow-1" style="
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      overflow: hidden;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                    ">
                        嗨，我是
                        Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                      </p>
                      <div class="d-flex">
                        <a href="#"
                          class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto">閱讀內文</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-12  h-100">
                    <div class="d-flex flex-column h-100">
                      <img class="w-100 mb-16"
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo7.png?raw=true"
                        alt="CSS 魔法大揭密：排版與設計的三大關鍵技巧" />
                      <time datetime="2024/09/03">2024/09/03</time>
                      <div class="mb-8">
                        <a href="#" class="me-8 fs-24 text-secondary">#CSS 設計</a>
                        <a href="#" class="fs-24 text-secondary">#視覺體驗</a>
                      </div>
                      <h3>CSS 魔法大揭密：排版與設計的三大關鍵技巧</h3>
                      <p style="
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          overflow: hidden;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 2;
                        " class="flex-grow-1 mb-16">
                        在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭
                        CSS，打造兼具美感與功能性的網頁。
                      </p>
                      <div class="d-flex">
                        <a href="#"
                          class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto ">閱讀內文</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-12  h-100">
                    <div class="d-flex flex-column h-100">
                      <img class="w-100 mb-16"
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true"
                        alt="CSS 魔法大揭密：排版與設計的三大關鍵技巧" />
                      <time datetime="2024/09/03">2024/09/03</time>
                      <div class="mb-8">
                        <a href="#" class="me-8 fs-24 text-secondary">#CSS設計</a>
                        <a href="#" class="fs-24 text-secondary">#視覺體驗</a>
                      </div>
                      <h3>CSS 魔法大揭密：排版與設計的三大關鍵技巧</h3>
                      <p style="
                                  text-overflow: ellipsis;
                                  display: -webkit-box;
                                  overflow: hidden;
                                  -webkit-box-orient: vertical;
                                  -webkit-line-clamp: 2;
                                " class="flex-grow-1 mb-16">
                        在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧。
                      </p>
                      <div class="d-flex">
                        <a href="#"
                          class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray mt-auto ">閱讀內文</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- * sm - md carousel indicator -->
            <div class="container d-sm-block d-xl-none">
              <button class="carousel-control-prev d-flex justify-content-between" type="button"
                style="left: 70%; bottom: -86%" data-bs-target=" #carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-arrow-left-circle-fill text-secondary fs-40 d-block me-28"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next d-flex justify-content-end" type="button"
                style="left: 82%; bottom: -86%" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-arrow-right-circle-fill text-secondary fs-40 d-block"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- * 職涯諮詢成功案例 -->
    <div class="container-fluid pt-80 mb-40">
      <div class="container">
        <h2 class="d-none d-lg-block fs-lg-64 fw-bolder mb-24">職涯諮詢成功案例</h2>
        <h2 class="fs-48 d-block d-lg-none">職涯諮詢</h2>
        <h3 class="fs-48 d-block d-lg-none mb-24">成功案例</h3>
        <div class="row ">
          <div class="col-12 col-lg-7 p-24" style="background-color: #EDEDED;">
            <div style="background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo8.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          height: 578px;">
            </div>
          </div>

          <div class="col-12 col-lg-5 d-flex flex-column px-0">
            <p class="px-40 py-80 fw-bold bg-white mb-0 shift-lg">
              在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效突破原有的舒適圈。
            </p>
            <div class="ms-lg-24 mb-24 py-140 px-40" style="background-color: #F5F5F5; ">
              <p class="fw-bold mb-24">期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
              <a href="#"
                class="text-secondary border border-secondary border-1 rounded rounded-5 py-8 px-16 fw-bold">立即預約諮詢</a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- * 轉職案例 -->
    <div class="container-fluid mb-80">
      <div class="container" style="background-color: #F5F5F5;">
        <div class="row">
          <div class="col-12 col-lg-3 p-24">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people.png?raw=true"
              class="mb-8" alt="無經驗到前端工程師 Offer">
            <h3 class="fs-lg-24 ">無經驗到前端工程師 Offer</h3>
            <div class="d-flex">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray">打造前端專案與履歷亮點</p>
            </div>

            <div class="d-flex ">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray  ">深度強化面試表現</p>
            </div>
            <hr class="">
            <a href="#" class="border border-dark rounded rounded-5  py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-12 col-lg-3 p-24">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people2.png?raw=true"
              class="mb-8" alt="轉職迷茫到明確學習規劃">
            <h3 class="fs-lg-24 ">轉職迷茫到明確學習規劃</h3>
            <div class="d-flex">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray">制訂階段性目標與時間安排</p>
            </div>

            <div class="d-flex ">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray  ">鼓勵參與前端社群或活動</p>
            </div>
            <hr>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-12 col-lg-3 p-24">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people3.png?raw=true"
              class="mb-8" alt="面試緊張到從容應對">
            <h3 class="fs-lg-24 ">面試緊張到從容應對</h3>
            <div class="d-flex">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray">透過面試模擬找出常犯的邏輯漏洞</p>
            </div>

            <div class="d-flex ">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray ">討論遇到不熟悉議題時的回應方式</p>
            </div>
            <hr>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-12 col-lg-3 p-24">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people4.png?raw=true"
              class="mb-8" alt="面試緊張到從容應對">
            <h3 class="fs-lg-24 ">面試緊張到從容應對</h3>
            <div class="d-flex">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray">擬定進階框架或技術研究目標</p>
            </div>

            <div class="d-flex ">
              <i class="bi bi-check-square-fill me-8 text-secondary"></i>
              <p class="text-gray ">培養跨團隊溝通與簡報能力</p>
            </div>
            <hr>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

        </div>
      </div>
    </div>

    <!-- * 電子報 lg -->
    <div class="container-fluid d-flex">
      <div class="d-none d-lg-block w-50" style="
          background-position: center;
          height: 834px;
          background-repeat: no-repeat;
          background-image: url('./Alyse-Wang.jpg');
          background-size: cover;">
      </div>

      <div class="d-none d-lg-block w-50 d-lg-flex align-items-center newsletter-bg" style="
          height: 834px;
          background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        ">
        <div class="container bg-white my-auto mx-auto w-75 p-80 my-auto">
          <p class="fs-64 fw-bold mb-16">訂閱電子報</p>
          <p class="mb-24">立即訂閱，搶先掌握前端 x 職涯的獨家資訊！</p>
          <form>
            <input type="text" class="form-control w-100 mb-8" placeholder="請輸入您的大名" aria-label="請輸入您的大名"
              aria-describedby="basic-addon1" style="background-color: #F1F1F1;" v-model="userInfo.name"
              @blur="validateName()">
            <span class="text-danger mb-8 fw-bold d-block" v-if="this.errors.name">{{ this.errors.name }}</span>
            <input type="text" class="form-control  w-100  mb-8" placeholder="請輸入您的電子信箱" aria-label="請輸入您的電子信箱"
              aria-describedby="basic-addon1" style="background-color: #F1F1F1;" v-model="userInfo.email" @blur="validateEmail()">
            <span class="text-danger mb-8 fw-bold d-block" v-if="this.errors.email">{{ this.errors.email }}</span>
            <button class="fw-bold text-secondary py-8 px-16 border border-secondary rounded rounded-5">啟動訂閱</button>
            
          </form>
        </div>
      </div>
    </div>

    <!-- * 電子報 md - sm  -->
    <div class="container-fluid ">
      <div class="d-block d-lg-none w-100" style="
          background-position: center;
          height: 440px;
          background-repeat: no-repeat;
          background-image: url('./Alyse-Wang.jpg');
          background-size: cover;">
      </div>

      <div class="d-flex d-lg-none  align-items-center justify-content-center" style="
          height:440px;
          background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        ">
        <div class="bg-white my-auto mx-auto w-75  py-40 px-24">
          <p class="fs-32 fs-md-48 fw-bold mb-16">訂閱電子報</p>
          <p class="mb-24 fs-20">立即訂閱，搶先掌握前端 x 職涯的獨家資訊！</p>
          <input type="text" class="form-control w-100 mb-8" placeholder="請輸入您的大名" aria-label="請輸入您的大名"
            aria-describedby="basic-addon1" style="background-color: #F1F1F1;">
          <input type="text" class="form-control  w-100 mb-24" placeholder="請輸入您的電子信箱" aria-label="請輸入您的電子信箱"
            aria-describedby="basic-addon1" style="background-color: #F1F1F1;">
          <a href="#" class="fw-bold text-secondary py-8 px-16 border border-secondary rounded rounded-5">啟動訂閱</a>
        </div>
      </div>

    </div>

    <!-- * 與我聯繫 -->
    <div class="container-fluid ">
      <div class="container py-60 py-lg-80  px-12">
        <h3 class="fw-bold fs-48 fs-lg-64 mb-24">與我聯繫</h3>
        <div class="d-flex justify-content-between border-dark border-bottom mb-16 pb-8">
          <div class="d-lg-flex">
            <a href="#" class="text-dark me-16 mb-sm-16 fs-24 fs-lg-32">alysewang@hexschool.com</a>
            <p class="fs-24 fs-lg-32 mb-8">合作洽談</p>
            <a href="#" class="text-dark  "><i class="bi bi-arrow-right me-0 fs-24"></i></a>
          </div>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-youtube text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-24 fs-lg-28 text-decoration-none">YouTube</a>
            <p class="fs-24 fs-lg-28 mb-0">職涯諮詢室</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-mic-fill text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-24 fs-lg-28 text-decoration-none">Podcast</a>
            <p class="fs-24 fs-lg-28 mb-0">職涯諮詢室</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-facebook text-secondary me-16 fs-24 fs-lg-28"></i>
            <a href="#" class="text-dark me-16 fs-24 fs-lg-28 text-decoration-none">Facebook</a>
            <p class="fs-24 fs-lg-28 mb-0">前端社群</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-linkedin text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-24 fs-lg-28 text-decoration-none">LinkedIn</a>
            <p class="fs-24 fs-lg-28 mb-0">職涯交流</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-instagram text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-24 fs-lg-28 text-decoration-none">Instagram</a>
            <p class="fs-24 fs-lg-28 mb-0">日常分享</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Import Swiper and modules
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default {
  data() {
    return {
      userInfo: {
        email: null,
        name: null,
      },
      errors: {
        name: null,
        email: null
      },  // 新增錯誤狀態
    };
  },
  methods: {
    validateName() {
      if (this.userInfo.name === '' || this.userInfo.name === null) {
        this.errors.name = '姓名不得為空白';
      } else {
        this.errors.name = null;
      }
    },

    validateEmail() {
      if (this.userInfo.email === '' || this.userInfo.email === null) {
        this.errors.email = 'Email 不得為空白';
      } else {
        this.errors.email = null;
      }
    },

    clickSubscription() {

    }
    
  },
  mounted() {
    // swiper
    const swiper = new Swiper('.swiper', {
      // Install modules
      modules: [ Navigation, Pagination, Scrollbar ],
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};
</script>


<style>
.contact-link {
  margin-top: -400px;
  position: absolute;
  left: 40%;
  width: 55%;
}

.service-right {
  width: 100%;
  z-index: 2;
}

.service-left {
  width: 100%;
  z-index: 2;
}

.hero-section {
  width: 100%;

}

.service-pic {
  min-height: 176px;
}


.shift-lg {
  transform: translateX(0px);
}

.newsletter-bg {
  height: 400px;
}




@media (min-width: 375px) and (max-width:768px) {
  .hero-section {
    width: 100% !important;
    aspect-ratio: 1;
  }

  .newsletter-bg {
    height: 400px;
  }
}


@media (min-width: 768px) {
  .contact-link {
    width: 55%;
  }

  .service-left {
    transform: translateY(50%);
    width: 60%;
    margin-left: -80px;
  }

  .service-pic {
    height: 176px !important;
  }


}

@media (min-width: 992px) {
  .service-right {
    transform: translateY(35%) translateX(80%);
    width: 113%;
  }

  .service-left {
    margin-left: 5px;
    transform: translateY(50%);
    width: 110%;
  }

  .service-pic {
    height: 320px !important;
  }

  .tag-w30 {
    display: block;
    width: 30%;
  }

  .shift-lg {
    transform: translate(-180px, 30px)
  }

}

@media (min-width: 1296px) {
  .service-right {
    transform: translateX(90%) translateY(50%);
    width: 105%;
  }

  .service-left {
    margin-left: 0px;
    width: 105%;
  }

  .tag-w30 {
    display: inline-block;
    width: 30%;
  }

  .shift-lg {
    transform: translate(-220px, 30px)
  }

}

@media (min-width: 1400px) {
  .tag-w30 {
    display: inline-block;
    width: 25%;
  }
}
</style>
