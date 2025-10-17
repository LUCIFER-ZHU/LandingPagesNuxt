<template>
  <div class="comparison-table-wrapper">
    <div class="comparison-grid">
      <!-- 第一列：功能特性列 -->
      <div class="column feature-column">
        <div class="column-header"></div>
        <div class="column-body">
          <div v-for="(row, index) in comparisonData" :key="index" class="row-item">
            {{ row.feature }}
          </div>
        </div>
      </div>

      <!-- 第二列：空列，为绝对定位的高亮列预留位置 -->
      <div class="column empty-column"></div>
      
      <!-- 第二列：Ouman Truck 高亮列（绝对定位漂浮） -->
      <div class="column highlight-column">
        <!-- 上部凸出空间 -->
        <div class="top-spacer"></div>
        
        <div class="column-header highlight-header">
          <div class="brand-name">Ouman</div>
          <div class="brand-name">Truck</div>
        </div>
        <div class="column-body">
          <div v-for="(row, index) in comparisonData" :key="index" class="row-item highlight-item">
            {{ row.ouman }}
          </div>
        </div>
        
        <!-- 下部凸出空间 -->
        <div class="bottom-spacer"></div>
      </div>

      <!-- 第三列：European Brands -->
      <div class="column competitor-column">
        <div class="column-header">
          European Brands<br>(Volvo/Scania)
        </div>
        <div class="column-body">
          <div v-for="(row, index) in comparisonData" :key="index" class="row-item">
            {{ row.european }}
          </div>
        </div>
      </div>

      <!-- 第四列：Japanese Brands -->
      <div class="column competitor-column">
        <div class="column-header">
          Japanese Brands<br>(Hino/Isuzu)
        </div>
        <div class="column-body">
          <div v-for="(row, index) in comparisonData" :key="index" class="row-item">
            {{ row.japanese }}
          </div>
        </div>
      </div>

      <!-- 第五列：Other Chinese Brands -->
      <div class="column competitor-column">
        <div class="column-header">
          Other Chinese<br>Brands
        </div>
        <div class="column-body">
          <div v-for="(row, index) in comparisonData" :key="index" class="row-item">
            {{ row.chinese }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 品牌对比表格组件
 * @description 展示 Ouman Truck 与其他品牌的功能对比
 */

interface ComparisonRow {
  feature: string
  ouman: string
  european: string
  japanese: string
  chinese: string
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Product Range',
    ouman: '30-40% lower',
    european: 'Very high',
    japanese: 'Medium-high',
    chinese: 'Medium'
  },
  {
    feature: 'Fuel Efficiency',
    ouman: 'Aerodynamic design, low fuel use',
    european: 'High',
    japanese: 'High',
    chinese: 'Average'
  },
  {
    feature: 'Durability in Harsh Sites',
    ouman: 'Proven in mining & construction',
    european: 'Strong',
    japanese: 'Moderate',
    chinese: 'Varies'
  },
  {
    feature: 'Cabin Comfort',
    ouman: 'Largest sleeper + dual screens',
    european: 'Good',
    japanese: 'Basic',
    chinese: 'Limited'
  },
  {
    feature: 'Maintenance Cost',
    ouman: 'Low, easy parts availability',
    european: 'High',
    japanese: 'Medium',
    chinese: 'Low'
  },
  {
    feature: 'After-Sales Support',
    ouman: 'Distributor-backed global service',
    european: 'Strong (but costly)',
    japanese: 'Limited outside Asia',
    chinese: 'Inconsistent'
  }
]
</script>

<style scoped lang="scss">
.comparison-table-wrapper {
  width: 100%;
  padding: 5.2083vw 0; /* 上下加大padding给第二列冒出的空间 */
}

.comparison-grid {
  padding: 0 12.5vw; /* 左右各预留12.5vw的padding，总宽度为75vw */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw; /* 所有列宽度一致，总宽度为75vw */
  gap: 0;
  position: relative; /* 为绝对定位的第二列提供定位上下文 */
  background: linear-gradient(314deg, #242323 65%, #515151 100%);  
}

/* ==================== 通用列样式 ==================== */
.column {
  display: flex;
  flex-direction: column;
  
  .column-header {
    text-align: center;
    background: transparent;
    min-height: 6.25vw; /* 增加最小高度 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(12px, 1.0417vw, 1.0417vw);
    font-weight: 600;
    color: #B3B3B3;
  }
  
  .column-body {
    background: transparent;
    
    .row-item {
      padding: 0 1.9271vw;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      font-size: clamp(11px, .9375vw, .9375vw);
      color: #B3B3B3;
      text-align: center;
      min-height: 5.125vw; /* 确保最小高度足够放两行文字 */
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
      background: transparent;
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}

/* 空列样式 - 为绝对定位的高亮列预留位置 */
.empty-column {
  visibility: hidden; /* 隐藏但保留空间 */
}

/* ==================== 第一列：功能特性列 ==================== */
.feature-column {
  .column-header {
    border-top-left-radius: 1.0417vw;
    background: transparent;
  }
  
  .column-body {
    .row-item {
      justify-content: flex-start;
      color: #fff;
      font-weight: 400;
      padding-left: 0;
      
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}

/* ==================== 第二列：Ouman Truck 高亮列（凸出） ==================== */
.highlight-column {
  position: absolute; /* 绝对定位，漂浮在grid之上 */
  z-index: 10;
  background: url($image-base + '/image/img1.webp') no-repeat center/cover;
  overflow: visible;
  border-radius: 1.6146vw;
  box-shadow: 0 0 2.0833vw rgba(0, 0, 0, 0.3);
  width: 15vw; /* 与grid中预留的宽度一致 */
  left: calc(15vw + 12.5vw); /* 第一列宽度 + 左侧padding */
  top: -3.0833vw; /* 向上漂浮 */
  bottom: -3.0833vw; /* 向下延伸 */
  display: flex;
  flex-direction: column;
  
  /* 上部凸出空间 */
  .top-spacer {
    height: 3.0833vw; /* 上部凸出高度 */
    position: relative;
  }
  
  /* 下部凸出空间 */
  .bottom-spacer {
    height: 3.0833vw; /* 下部凸出高度 */
  }
  
  .column-header {
    background: transparent;
    position: relative;
    
    .brand-name {
      font-size: clamp(12px, 1.4583vw, 1.4583vw); /* 与其他列保持一致的字体大小 */
      font-weight: 700;
      color: #D9C1A9;
    }
  }
  
  .column-body {
    background: transparent;
    position: relative;
    flex: 1; /* 让内容区域填充剩余空间 */
    
    .row-item {
      background: transparent;
      font-weight: bold;
      font-size: clamp(12px, .9375vw, .9375vw);
      color: #fff;      
      
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}

/* ==================== 竞争对手列 ==================== */
.competitor-column {
  .column-body {
    .row-item {
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}

/* ==================== 整体阴影效果 ==================== */
.comparison-grid {
  filter: drop-shadow(0 0.5208vw 2.0833vw rgba(0, 0, 0, 0.1));
}
</style>

