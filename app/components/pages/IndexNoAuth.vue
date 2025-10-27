<template>
  <div class="index-no-auth">
    <!-- Banner Section -->
    <div class="banner">
      <div class="banner-content">
        <h1 class="title">Precision Renewed. Value Redefined.</h1>
        <p class="sub-title">The Leading Global Marketplace for Pre-Owned CNC Machines.</p>

        <!-- Search Bar -->
        <div class="search-container">
          <div class="search-wrapper">
            <i class="icon mnfont mn-search !text-[1.25vw]"></i>
            <input v-model="searchKeyword" type="text" class="search-input" placeholder=""
              @keyup.enter="handleSearch" />
            <button class="search-button" @click="handleSearch">
              search
            </button>
          </div>
        </div>

        <!-- Keyword Suggestions -->
        <div class="keyword-suggestions">
          <span class="suggestions-label">Keyword Suggestions</span>
          <button class="keyword-btn" @click="handleKeywordClick('Boring Machine')">
            Boring Machine
          </button>
          <button class="keyword-btn" @click="handleKeywordClick('CNC Lathe')">
            CNC Lathe
          </button>
        </div>
      </div>
    </div>

    <!-- advantage -->
    <div class="advantage">
      <div class="advantage-content">
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <i class="icon mnfont mn-Comment"></i>
          </div>
          <div class="advantage-item-title">
            Authenticity
          </div>
          <div class="advantage-item-text">
            Every machine we offer comes with complete original documentation and inspection records.
            <br><br>
            We maintain full transparency through certified testing procedures and third-party precision reports.
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <i class="icon mnfont mn-Comment"></i>
          </div>
          <div class="advantage-item-title">
            Rebirth
          </div>
          <div class="advantage-item-text">
            We believe a used machine tool is not "old" — it's reborn.
            <br><br>
            Each unit undergoes professional refurbishment, stability testing, and re-certification before delivery.
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <i class="icon mnfont mn-Comment"></i>
          </div>
          <div class="advantage-item-title">
            Value
          </div>
          <div class="advantage-item-text">
            Achieve world-class performance at a rational investment.
            <br><br>
            We provide performance comparison reports against new machines to prove real return on value.
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-item-icon">
            <i class="icon mnfont mn-Comment"></i>
          </div>
          <div class="advantage-item-title">
            Sustainability
          </div>
          <div class="advantage-item-text">
            Reducing waste while keeping manufacturing efficient and green.
            <br><br>
            Through reuse and re-manufacturing, we make precision equipment part of a sustainable industrial future.
          </div>
        </div>
      </div>
    </div>

    <!-- nums -->
    <div class="nums">
      <div class="nums-title">Give precision machines a second life</div>
      <div class="nums-sub-title">— and your business a smarter start.</div>
      <div class="grid-4">
        <div class="grid-item">
          <div class="grid-item-title">
            <CountUp :end-val="1200" :duration="2.5" :options="{
              enableScrollSpy: true,
              scrollSpyOnce: true,
              suffix: '+'
            }" />
          </div>
          <div class="grid-item-text">Certified Machines<br>in Stock</div>
        </div>
        <div class="grid-item">
          <div class="grid-item-title">
            <CountUp :end-val="20" :duration="2.5" :options="{
              enableScrollSpy: true,
              scrollSpyOnce: true,
              suffix: '+'
            }" />
          </div>
          <div class="grid-item-text">Professional<br>Inspection Engineers</div>
        </div>
        <div class="grid-item">
          <div class="grid-item-title">
            <CountUp :end-val="60" :duration="2.5" :options="{
              enableScrollSpy: true,
              scrollSpyOnce: true,
              suffix: '+'
            }" />
          </div>
          <div class="grid-item-text">Global Brands<br>Covered</div>
        </div>
        <div class="grid-item">
          <div class="grid-item-title">
            <CountUp :end-val="35" :duration="2.5" :options="{
              enableScrollSpy: true,
              scrollSpyOnce: true,
              suffix: '+'
            }" />
          </div>
          <div class="grid-item-text">Clients in<br>Countries</div>
        </div>
      </div>
    </div>

    <!-- types -->
    <div class="types">
      <h2 class="types-main-title">Discover your next business opportunity</h2>
      <div class="types-header">
        <h3 class="types-title">Machine Type</h3>
        <a href="#" class="types-more">more ></a>
      </div>
      <div class="types-container">
        <!-- 左侧区域 -->
        <div class="types-left">
          <!-- 左上两个小卡片 -->
          <div class="top-cards">
            <div v-for="machine in machineTypes.slice(0, 2)" :key="machine.id" class="machine-card small-card">
              <div class="card-image">
                <NuxtImg :src="machine.imgSrc" alt="" class="placeholder-img" />
              </div>
              <div class="machine-card-content">
                <h4 class="machine-name">{{ machine.name }}</h4>
                <p class="machine-stock">Stock: {{ machine.stock }}</p>
                <UButton variant="outline" color="neutral" class="search-btn" @click="handleMachineSearch(machine)">
                  Search
                </UButton>
              </div>
            </div>
          </div>
          <!-- 左下大卡片 -->
          <div v-if="machineTypes[2]" class="machine-card large-card">
            <div class="card-image">
              <NuxtImg :src="machineTypes[2].imgSrc" alt="" class="placeholder-img" />
            </div>
            <div class="machine-card-content">
              <h4 class="machine-name">{{ machineTypes[2].name }}</h4>
              <p class="machine-stock">Stock: {{ machineTypes[2].stock }}</p>
              <UButton variant="outline" color="neutral" class="search-btn"
                @click="handleMachineSearch(machineTypes[2])">
                Search
              </UButton>
            </div>
          </div>
        </div>

        <!-- 右侧区域 -->
        <div class="types-right">
          <div v-for="machine in machineTypes.slice(3, 5)" :key="machine.id" class="machine-card right-card">
            <div class="card-image">
              <NuxtImg :src="machine.imgSrc" alt="" class="placeholder-img" />
            </div>
            <div class="machine-card-content">
              <h4 class="machine-name">{{ machine.name }}</h4>
              <p class="machine-stock">Stock: {{ machine.stock }}</p>
              <UButton variant="outline" color="neutral" class="search-btn" @click="handleMachineSearch(machine)">
                Search
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- From Inspection to Delivery -->
    <ReNewFromInspectiontoDelivery />

    <!-- ready -->
    <div class="ready">
      <div class="title">Ready to get started?</div>
      <div class="sub-title">Let our experts help you find the right CNC machine for your next project.</div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Sign in" @click="handleSignIn" />
      </div>
    </div>

    <!-- Empowering Manufacturers -->
    <ReNewEmpoweringManufacturers />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CountUp from 'vue-countup-v3'

const searchKeyword = ref('')

// 机器类型数据（后续将从后端接口获取）
const machineTypes = ref([
  { id: 1, name: 'Press Brake', stock: 15, imgSrc: 'image/img1.webp' },
  { id: 2, name: 'Lathe', stock: 15, imgSrc: 'image/img2.webp' },
  { id: 3, name: 'Laser Cutting Machine', stock: 15, imgSrc: 'image/img3.webp' },
  { id: 4, name: 'Machining Center', stock: 15, imgSrc: 'image/img4.webp' },
  { id: 5, name: 'Grinding Machine', stock: 15, imgSrc: 'image/img5.webp' }
])

const handleSignIn = () => {
  navigateTo('/account/login')
}

// 处理机器类型搜索
const handleMachineSearch = (machine: any) => {
  console.log('搜索机器类型:', machine.name)
  // TODO: 实现机器类型搜索逻辑
}

// 处理搜索
const handleSearch = () => {
  if (!searchKeyword.value.trim()) {
    console.log('请输入搜索关键词')
    return
  }

  console.log('搜索关键词:', searchKeyword.value)
  // TODO: 等后端接口确定后，调用搜索API
  // 示例：
  // try {
  //   const response = await $fetch('/api/search', {
  //     method: 'GET',
  //     query: {
  //       keyword: searchKeyword.value
  //     }
  //   })
  //   console.log('搜索结果:', response)
  // } catch (error) {
  //   console.error('搜索失败:', error)
  // }
}

// 处理关键词点击
const handleKeywordClick = (keyword: string) => {
  searchKeyword.value = keyword
  console.log('选择关键词:', keyword)
  handleSearch()
}
</script>

<style scoped lang="scss">

:deep(.default-btn) {
  @include default-btn;
  @include button-hover-effect(-0.1042vw, 1.05, 0.98);
}


.index-no-auth {
  .banner {
    position: relative;
    width: 100%;
    height: 31.25vw;
    min-height: 500px;
    background: radial-gradient(74% 74% at -14% 126%, rgba(255, 255, 255, 0) 0%, #030931 100%);
    display: flex;
    align-items: center;
    overflow: hidden;

    // 可选：添加背景图片
    // background-image: url('/path/to/banner-bg.jpg');
    // background-size: cover;
    // background-position: center;

    &-content {
      position: relative;
      z-index: 2;
      width: 100%;
      margin: 0 auto;
      padding-left: 8.3333vw; // 左侧间距
      padding-right: 4vw;
      text-align: left;

      @media (max-width: 768px) {
        padding-left: 5vw;
        padding-right: 5vw;
      }
    }

    .title {
      font-size: clamp(28px, 2.5vw, 48px);
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.8333vw;
      line-height: 1.2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
    }

    .sub-title {
      font-size: clamp(14px, 1.25vw, 24px);
      color: #e2e8f0;
      margin-bottom: 2.4479vw;
      font-weight: 400;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

      @media (max-width: 768px) {
        margin-bottom: 24px;
      }
    }

    // 搜索容器
    .search-container {
      margin-bottom: 2.4479vw;
      max-width: 46.875vw; // 约900px at 1920px

      @media (max-width: 768px) {
        margin-bottom: 16px;
        max-width: 100%;
      }

      .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background: #ffffff;
        border-radius: 50px;
        padding: 0.2083vw 0.2083vw 0.2083vw 1.0417vw;
        box-shadow: 0 0.4167vw 1.25vw rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;

        @media (max-width: 768px) {
          padding: 4px 4px 4px 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        &:hover {
          box-shadow: 0 0.625vw 1.6667vw rgba(0, 0, 0, 0.2);

          @media (max-width: 768px) {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
          }
        }

        &:focus-within {
          box-shadow: 0 0.625vw 1.6667vw rgba(0, 0, 0, 0.25);

          @media (max-width: 768px) {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
          }
        }

        .search-icon {
          font-size: clamp(20px, 1.25vw, 24px);
          color: #94a3b8;
          margin-right: 0.625vw;
          flex-shrink: 0;

          @media (max-width: 768px) {
            margin-right: 8px;
          }
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: clamp(14px, 0.8333vw, 16px);
          color: #1e293b;
          background: transparent;
          padding: 0.625vw 0.8333vw;
          min-width: 0;

          @media (max-width: 768px) {
            padding: 10px 12px;
          }

          &::placeholder {
            color: #94a3b8;
          }
        }

        .search-button {
          @include default-btn;
        }
      }
    }

    // 关键词建议
    .keyword-suggestions {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.625vw;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        gap: 8px;
      }

      .suggestions-label {
        color: #fff;
        font-size: clamp(12px, 1.25vw, 24px);
        font-weight: bold;
        margin-right: 1.6667vw;
      }

      .keyword-btn {
        padding: 0.4167vw 1.0417vw;
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255);
        border-radius: 1.0417vw;
        font-size: clamp(12px, 1.0417vw, 20px);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);

        @media (max-width: 768px) {
          padding: 6px 16px;
          border-radius: 20px;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 0.2083vw 0.625vw rgba(0, 0, 0, 0.2);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  // Advantage Section
  .advantage {
    background: #071C63;
    padding: 2.7604vw 18.5938vw;

    @media (max-width: 768px) {
      padding: 40px 5vw;
    }

    &-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25vw;
      margin: 0 auto;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    &-item {
      padding: 1.25vw;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.625vw;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;

      @media (max-width: 768px) {
        padding: 24px 20px;
        border-radius: 12px;
      }

      &:hover {
        transform: translateY(-0.4167vw);

        @media (max-width: 768px) {
          border-radius: 12px;
          transform: translateY(-4px);
        }
      }

      &-icon {
        width: 3.6458vw;
        height: 3.6458vw;
        margin-bottom: 1.25vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.0833vw;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
        border-radius: .625vw;

        @media (max-width: 768px) {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
          font-size: 32px;
        }

        i {
          font-size: inherit;
        }
      }

      &-title {
        font-size: clamp(16px, 1.0417vw, 20px);
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 1.0417vw;

        @media (max-width: 768px) {
          margin-bottom: 12px;
        }
      }

      &-text {
        font-size: clamp(12px, 0.8333vw, 16px);
        color: rgba(255, 255, 255, 0.85);

        br {
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

  // Nums Section
  .nums {
    background: #FFFFFF;
    padding: 4.1667vw 8.3333vw;
    text-align: center;

    @media (max-width: 768px) {
      padding: 40px 5vw;
    }

    &-title {
      font-size: clamp(24px, 2.5vw, 48px);
      font-weight: 700;
      color: #000000;
      margin-bottom: 1.0417vw;
      line-height: 1.2;

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
    }

    &-sub-title {
      font-size: clamp(14px, 1.0417vw, 20px);
      color: #333333;
      margin-bottom: 3.125vw;
      font-weight: 400;

      @media (max-width: 768px) {
        margin-bottom: 32px;
      }
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.0833vw;
      max-width: 1200px;
      margin: 0 auto;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      @media (max-width: 768px) {
        gap: 20px;
      }

      .grid-item {
        padding: 2.0833vw 1.0417vw;
        transition: all 0.3s ease;

        @media (max-width: 768px) {
          padding: 24px 12px;
        }

        &-title {
          font-size: clamp(32px, 2.5vw, 48px);
          font-weight: 700;
          color: #EF751E;
          margin-bottom: 0.625vw;

          @media (max-width: 768px) {
            margin-bottom: 8px;
          }
        }

        &-text {
          font-size: clamp(14px, 1.0417vw, 20px);
          color: #333333;
          font-weight: 500;

          br {
            @media (max-width: 768px) {
              display: none;
            }
          }
        }
      }
    }
  }

  // Types Section
  .types {
    background: #F9F9F9;
    padding: 3.2292vw 18.75vw;

    &-main-title {
      font-size: clamp(28px, 2.5vw, 48px);
      font-weight: 700;
      color: #000;
      margin-bottom: 1.4583vw;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.0833vw;
    }

    &-title {
      font-size: clamp(20px, 1.6667vw, 32px);
      font-weight: 700;
      color: #000000;
      margin: 0;
    }

    &-more {
      font-size: clamp(16px, 1.6667vw, 32px);
      color: #000000;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        color: $primary-color;
        transform: translateX(0.2083vw);
      }
    }

    &-container {
      display: flex;
      gap: 1.4063vw;
      padding: 1.4063vw;
      background-color: #fff;
      border-radius: .625vw;
    }

    &-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.25vw;

      .top-cards {
        display: flex;
        gap: 1.25vw;
      }

      .small-card {
        flex: 1;
      }

      .large-card {
        flex-direction: row !important;
        align-items: center;
      }
    }

    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.25vw;

      .right-card {
        flex: 1;
        flex-direction: row !important;
        align-items: center;
      }
    }

    .machine-card {
      background: #F5F5F5;
      border-radius: 0.625vw;
      padding: 1.25vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.4063vw;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0.1042vw 0.3125vw rgba(0, 0, 0, 0.08);

      &:hover {
        transform: translateY(-0.2083vw);
        box-shadow: 0 0.4167vw 0.8333vw rgba(0, 0, 0, 0.12);

        .search-btn {
          background: $primary-color !important;
          color: #ffffff !important;
          border-color: $primary-color !important;
        }
      }

      .card-image {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.8333vw;
        background: #F5F5F5;
        border-radius: 0.4167vw;
        min-height: 5.2083vw;

        .placeholder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.4167vw;
        }
      }

      &-content {
        position: relative;
        z-index: 1;
      }

      .machine-name {
        font-size: clamp(14px, 1.0417vw, 20px);
        font-weight: 700;
        color: #000000;
        margin: 0 0 0.3125vw 0;
        line-height: 1.3;
      }

      .machine-stock {
        font-size: clamp(11px, 0.7292vw, 14px);
        color: #999999;
        margin: 0 0 0.625vw 0;
        font-weight: 400;
      }

      .search-btn {
        padding: 0.3125vw 1.0417vw !important;
        font-size: clamp(11px, 0.7292vw, 14px) !important;
        border-radius: 1.0417vw !important;
        border: 0.0521vw solid #000000 !important;
        background: #FFFFFF !important;
        color: #000000 !important;
        font-weight: 400 !important;
        transition: all 0.3s ease !important;
        height: auto !important;
        line-height: 1 !important;

        &:hover {
          background: #000000 !important;
          color: #ffffff !important;
          border-color: #000000 !important;
        }
      }
    }
  }


  // Ready Section
  .ready {
    padding: 7.7604vw 0;
    background: #fff;

    .title {
      font-size: clamp(28px, 3.3333vw, 64px);
      font-weight: 700;
      color: #000000;
      margin-bottom: 1.0417vw;
      text-align: center;
    }

    .sub-title {
      font-size: clamp(14px, 1.25vw, 24px);
      color: #333333;
      margin-bottom: 3.75vw;
      text-align: center;
    }

    .btn {
      text-align: center;

      button{
        background: $primary-color;
        padding: 1.0938vw 5.5208vw;
      }
    }
  }
}
</style>