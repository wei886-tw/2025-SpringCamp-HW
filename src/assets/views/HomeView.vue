<template>
  <div class="container-fluid px-0 position-relative">
    <!-- * Hero Section -->
    <div class="container-fluid px-0 d-flex pb-200">
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
    <div class="container-fluid">
      <div class="w-100 px-0 ps-80 pt-300 d-flex flex-column flex-nowrap d-block d-md-none" style="
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

    <!-- * 突出區塊 -->
    <div class="container px-40 py-80 noto-sans-tc fs-24 fs-xl-28 bg-white fw-bold contact-link">
      <p class="mb-16">嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
      <p class="mb-16">
        擅長 React、Vue
        等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
      </p>
      <p class="mb-16"></p>
    </div>

    <!-- * 服務區塊 -->
    <div class="container-fluid bg-white">
      <div class="container">
        <div class="row mx-auto">
          <div class="col-12">
            <h2 class="fs-64 noto-sans-tc pt-80 mb-32 fw-bold">專業服務與方案</h2>
          </div>
          <!-- Todo: RWD -->
          <!-- * 履歷健檢 -->
          <div class="col-10 mx-auto mb-60">
            <div class="col-12 col-lg-6 " style="
                height: 320px;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true');
              ">
              <div class="container bg-white service-right d-flex flex-column p-24 d-none d-md-block">
                <h3 class="fs-28 fw-bolder">履歷健檢</h3>
                <p class=" ">
                  履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                </p>
              </div>
            </div>

            <div class="d-block col-10 d-md-none w-100">
              <div class="container bg-white service-right d-flex flex-column pt-60 pb-24 px-0 d-block d-lg-none">
                <h3 class="fs-28 fw-bolder ">履歷健檢</h3>
                <p class=" ">
                  履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
                </p>
              </div>
            </div>
          </div>

          <!-- * 線上諮詢 -->
          <div class="col-10  mb-60 mx-auto d-flex align-items-center">
            <div
              class="container bg-white d-flex flex-column p-24 ps-0 d-none d-lg-block  service-left position-relative ">
              <h3 class="fs-28 fw-bolder">線上諮詢</h3>
              <p class=" ">
                想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進1。
              </p>
            </div>

            <div class="col-12 col-lg-6 position-relative " style="
                height: 320px;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo2.png?raw=true');
              ">
              <div
                class="container bg-white d-flex flex-column p-24 ps-0 d-none d-md-block d-lg-none service-left position-relative ">
                <h3 class="fs-28 fw-bolder">線上諮詢</h3>
                <p class=" ">
                  想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進1。
                </p>
              </div>
            </div>

            <div class="d-block col-10 d-md-none w-100">
              <div class="container bg-white  d-flex flex-column flex-shrink-1 pt-60 pb-24 px-0 d-block d-lg-none ">
                <h3 class="fs-28 fw-bolder ">線上諮詢</h3>
                <p class=" ">
                  想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
                </p>
              </div>
            </div>
          </div>

          <!-- * 網頁開發 -->
          <div class="col-10 mx-auto mb-60">
            <div class="col-12 col-lg-6 " style="
                  height: 320px;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo3.png?raw=true');
                ">

            </div>
          </div>
          <!-- * 網頁開發 rwd -->
          <div class="d-block col-10 d-md-none w-100">
            <div class="container bg-white service-right d-flex flex-column pt-60 pb-24 px-0 py-24 d-block d-lg-none">
              <h3 class="fs-28 fw-bolder">網頁開發</h3>
              <p class=" ">
                想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。
              </p>
            </div>
          </div>


          <div class="col-12 mx-auto mb-64"></div>

          <div class="container"></div>
        </div>
      </div>
    </div>

    <!-- * 部落格精選 -->
    <div class="container-fluid">
      <div class="container">
        <h2 class="fs-64 fw-bolder pt-80 mb-24">部落格精選</h2>
      </div>
      <div class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide">
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

          <i class="carousel-control-next bi bi-arrow-right-circle-fill text-secondary fs-40" type="button"
            style="width: 5%;" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
            <span class="visually-hidden">Next</span>
          </i>

          <div class="container">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row" style="min-height: 110vh;">
                    <div class="col-12 col-xl-4 h-100 ">
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
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-xl-4 h-100">
                      <div class="d-flex flex-column h-100">
                        <img class="w-100 mb-16"
                          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo6.png?raw=true"
                          alt="自學前端不用怕：從零開始的三大關鍵" />
                        <time datetime="2024/07/08">2024/07/08</time>
                        <div class=" mb-8">
                          <a href="#" class="me-8 text-secondary fs-24">#面試準備</a>
                          <a href="#" class="me-8 text-secondary fs-24">#工程師求職</a>
                          <a href="#"
                            class="border border-secondary rounded rounded-5 text-white bg-secondary py-8 px-16">人氣文章
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
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-xl-4 h-100">
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
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25 ">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row" style="min-height: 110vh;">
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
                          你是否對 React 感到好奇，卻因為複雜的學習曲線而望之卻步？我建議你從最基礎的三個概念開始：元件、狀態與事件處理。這些是打造現代網頁應用的基石，也是每個前端工程師都必須掌握的核心技能。
                        </p>
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25">閱讀內文</a>
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
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25">閱讀內文</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-xl-4 h-100">
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
                        <div class="mt-auto">
                          <a href="#"
                            class="border border-1 border-dark rounded rounded-5 py-8 px-16 text-gray w-25 ">閱讀內文</a>
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
    </div>

    <!-- * 職涯諮詢成功案例 -->
    <div class="container-fluid pt-80 mb-40">
      <div class="container">
        <h2 class="fs-lg-64 fw-bolder mb-24">職涯諮詢成功案例</h2>
        <div class="row">
          <div class="col-7 p-24" style="background-color: #EDEDED;">
            <div style="background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo8.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          height: 578px;"></div>
          </div>
          <div class="col-5 d-flex flex-column">
            <p class="px-40 py-80 fw-bold bg-white left-shift-220 mb-0">
              在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效突破原有的舒適圈。
            </p>
            <div class="ms-24 mb-24 py-140 px-40" style="background-color: #F5F5F5; transform: translateY(-40px);">
              <p class="fw-bold mb-24">期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
              <a href="#" class="text-secondary border border-1 rounded rounded-5 py-8 px-16 fw-bold">立即預約諮詢</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- * 轉職案例 -->
    <div class="container-fluid mb-80">
      <div class="container" style="background-color: #F5F5F5;">
        <div class="row">
          <div class="col-3 p-24">
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
              <p class="text-gray pb-16 ">深度強化面試表現</p>
            </div>
            <p></p>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-3 p-24">
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
              <p class="text-gray pb-16 ">鼓勵參與前端社群或活動</p>
            </div>
            <p></p>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-3 p-24">
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
              <p class="text-gray pb-16 ">討論遇到不熟悉議題時的回應方式</p>
            </div>
            <p></p>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

          <div class="col-3 p-24">
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
              <p class="text-gray pb-16 ">培養跨團隊溝通與簡報能力</p>
            </div>
            <p></p>
            <a href="#" class="border border-dark rounded rounded-5 py-8 px-16 text-gray">前往聆聽 podcast</a>
          </div>

        </div>
      </div>
    </div>

    <!-- * 電子報 -->
    <div class="container-fluid d-flex">
      <div class="d-block w-50" style="
          background-position: center;
          height: 834px;
          background-repeat: no-repeat;
          background-image: url('./Alyse-Wang.jpg');
          background-size: cover;">
      </div>

      <div class="w-50 d-flex align-items-center " style="
          height: 834px;
          background-image: url('https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section2.png?raw=true');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        ">
        <div class="container bg-white my-auto mx-auto w-75 p-80 my-auto">
          <p class="fs-64 fw-bold mb-16">訂閱電子報</p>
          <p class="mb-24">立即訂閱，搶先掌握前端 x 職涯的獨家資訊！</p>
          <input type="text" class="form-control w-100 mb-8" placeholder="請輸入您的大名" aria-label="請輸入您的大名"
            aria-describedby="basic-addon1" style="background-color: #F1F1F1;">
          <input type="text" class="form-control  w-100 mb-24" placeholder="請輸入您的電子信箱" aria-label="請輸入您的電子信箱"
            aria-describedby="basic-addon1" style="background-color: #F1F1F1;">
          <a href="#" class="fw-bold text-secondary py-8 px-16 border border-secondary rounded rounded-5">啟動訂閱</a>
        </div>
      </div>
    </div>

    <!-- * 與我聯繫 -->
    <div class="container-fluid">
      <div class="container py-80">
        <h3 class="fw-bold fs-64 mb-24">與我聯繫</h3>
        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex">
            <a href="#" class="text-dark me-16 fs-32">alysewang@hexschool.com</a>
            <p class="fs-28">合作洽談</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right me-0 fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-youtube text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-32 text-decoration-none">YouTube</a>
            <p class="fs-28 mb-0">職涯諮詢室</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-mic-fill text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-32 text-decoration-none">Podcast</a>
            <p class="fs-28 mb-0">職涯諮詢室</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-facebook text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-32 text-decoration-none">Facebook</a>
            <p class="fs-28 mb-0">前端社群</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-linkedin text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-32 text-decoration-none">LinkedIn</a>
            <p class="fs-28 mb-0">職涯交流</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>

        <div class="d-flex justify-content-between border-dark border-bottom mb-16">
          <div class="d-flex align-items-center">
            <i class="bi bi-instagram text-secondary me-16 fs-32"></i>
            <a href="#" class="text-dark me-16 fs-32 text-decoration-none">Instagram</a>
            <p class="fs-28 mb-0">日常分享</p>
          </div>
          <a href="#" class="text-dark"><i class="bi bi-arrow-right fs-24"></i></a>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-white border-top border-gray py-24">
      <div class="container text-center">
        <p class="mb-0 fs-16 text-dark">© 2025 Alyse Wang. All rights reserved.</p>
      </div>
    </div>

  </div>
</template>

<style>
.contact-link {
  margin-top: -400px;
  position: absolute;
  left: 40%;
  width: 55vw;
}

@media (min-width: 768px) {
  .contact-link {
    width: 55vw;

  }
}

.service-right {
  width: 100%;
}

@media (min-width: 768px) {
  .service-right {
    z-index: 2;
    margin-right: -80px;
    transform: translateY(35%);
    width: 60%;
  }
}

@media (min-width: 992px) {
  .service-right {
    margin-right: -200px;
    transform: translateY(50%);
    width: 85%;
  }
}

@media (min-width: 1296px) and (max-width:1920px) {
  .service-right {
    margin-right: -320px;
  }
}

.service-left {
  width: 100%;
  z-index: 2;
}

@media (min-width: 768px) {
  .service-left {
    transform: translateY(50%);
    width: 60%;
    margin-left: -80px
  }
}

@media (min-width: 992px) {
  .service-left {
    width: 80%;
    transform: translateX(10%);
    margin-left: 0;
  }
}

@media (min-width: 1296px) and (max-width:1920px) {
  .service-left {
    transform: translateX(5%);
  }
}

.left-shift-220 {
  margin-left: -220px;
  width: 110%;
  margin-top: 30px;
}

.hero-section {
  @media (min-width: 375px) and (max-width:768px) {
    width: 100vw;

  }
}
</style>
