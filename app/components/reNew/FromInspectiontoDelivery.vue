<template>
  <div class="inspection-delivery">
    <div class="content-wrapper">
      <h2 class="main-title">From Inspection to Delivery</h2>
      <p class="sub-title">— We Make Every Purchase Reliable.</p>
      
      <div class="cards-container">
        <!-- Operational Assurance Card -->
        <div class="assurance-card">
          <h3 class="card-title">Operational Assurance</h3>
          <p class="card-text">
            From sourcing to certification, every machine goes through a complete process of inspection, testing, and documentation — handled directly by our in-house engineers.
          </p>
          <p class="card-text">
            You see what we see — transparent reports, verified performance, and real data before you decide.
          </p>
        </div>

        <!-- Service Assurance Card -->
        <div class="assurance-card">
          <h3 class="card-title">Service Assurance</h3>
          <p class="card-text">
            We take responsibility beyond the sale — from secure payment and global logistics to professional installation and after-sales support.
          </p>
          <p class="card-text">
            Wherever you are, our team ensures your machine arrives, runs, and performs as expected.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑（如需要的话可以在这里添加）
</script>

<style scoped lang="scss">
.inspection-delivery {
  position: relative;
  padding: 7.5521vw 18.75vw;
  background: url($image-base + '/image/img4.webp') center/cover no-repeat;
  background-color: #4A5A7A;
  overflow: hidden;

  .content-wrapper {
    position: relative;
    z-index: 1;
  }

  .main-title {
    font-size: clamp(28px, 2.5vw, 48px);
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 0.5208vw 0;
    line-height: 1.2;
  }

  .sub-title {
    font-size: clamp(14px, 1.6667vw, 32px);
    color: #FFFFFF;
    margin: 0 0 3.75vw 0;
    font-weight: 400;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.0833vw;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .assurance-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.25vw;
    padding: 1.7188vw;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      transform: translateY(-0.4167vw);
      box-shadow: 0 0.8333vw 2.0833vw rgba(0, 0, 0, 0.2);
    }

    .card-title {
      font-size: clamp(18px, 1.6667vw, 32px);
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 1.25vw 0;
    }

    .card-text {
      font-size: clamp(12px, 1.0417vw, 20px);
      color: #FFFFFF;
      margin: 0 0 1.0417vw 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

