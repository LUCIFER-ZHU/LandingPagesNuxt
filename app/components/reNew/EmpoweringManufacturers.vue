<template>
  <div class="empowering-manufacturers">
    <div class="title">Empowering Manufacturers Through<br>Smarter, Safer Choices.</div>
    <div class="sub-title">
      At UESD ULTRA, we help factories around the world start production with confidence — through <br>
      certified used machine tools, transparent inspection, and reliable service.<br>
      Join us to access verified equipment, real expertise, and a smarter way to invest in manufacturing.
    </div>
    <div class="imgs">
      <div class="left">
        <NuxtImg :src="buildImageUrl('/image/img4.webp')" alt="img" />
      </div>
      <div class="right">
        <NuxtImg :src="buildImageUrl('/image/img4.webp')" alt="img" />
        <NuxtImg :src="buildImageUrl('/image/img4.webp')" alt="img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑（如需要的话可以在这里添加）
// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();
</script>

<style scoped lang="scss"></style>
