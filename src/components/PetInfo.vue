<template>
  <div class="pet-info">
    <!-- 头部区域 -->
    <header class="header">
      <div class="back-button" @click="goBack">
        <i class="fas fa-arrow-left"></i>
      </div>
      <h1 class="title">我的宠物</h1>
    </header>

    <!-- 宠物信息卡片 -->
    <div class="pet-card">
      <div class="pet-avatar">
        <img src="../assets/cat.jpg" alt="宠物头像">
      </div>
      <div class="pet-details">
        <h2 class="pet-name">咪咪</h2>
        <div class="pet-meta">
          <span class="pet-age">2岁</span>
          <span class="pet-gender">母</span>
          <span class="pet-breed">英国短毛猫</span>
        </div>
      </div>
    </div>

    <!-- 宠物详细信息 -->
    <div class="info-section">
      <h3 class="section-title">基本信息</h3>
      <div class="info-item">
        <span class="label">出生日期</span>
        <span class="value">2023-05-15</span>
      </div>
      <div class="info-item">
        <span class="label">体重</span>
        <span class="value">4.2kg</span>
      </div>
      <div class="info-item">
        <span class="label">绝育状态</span>
        <span class="value">已绝育</span>
      </div>
    </div>

    <div class="info-section">
      <h3 class="section-title">健康记录</h3>
      <div class="info-item">
        <span class="label">最近体检</span>
        <span class="value">2024-03-10</span>
      </div>
      <div class="info-item">
        <span class="label">疫苗情况</span>
        <span class="value">已完成</span>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <nav class="bottom-nav">
      <div 
        class="nav-item" 
        :class="{ active: activeIndex === 0 }"
        @click="navigateTo(0)"
      >
        <i class="fas fa-home"></i>
      </div>
      <div 
        class="nav-item" 
        :class="{ active: activeIndex === 1 }"
        @click="navigateTo(1)"
      >
        <i class="fas fa-paw"></i>
      </div>
      <div 
        class="nav-item" 
        :class="{ active: activeIndex === 2 }"
        @click="navigateTo(2)"
      >
        <i class="fas fa-th"></i>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref(1)

const goBack = () => {
  router.back()
}

const navigateTo = (index) => {
  activeIndex.value = index
  if (index === 0) {
    router.push('/')
  } else if (index === 1) {
    router.push('/pet-info')
  }
}
</script>

<style scoped>
.pet-info {
  max-width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 60px;
}

.header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  position: relative;
}

.back-button {
  font-size: 20px;
  color: #8b6b57;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: bold;
}

.pet-card {
  background: white;
  margin: 15px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
}

.pet-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.pet-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pet-name {
  font-size: 20px;
  margin-bottom: 5px;
}

.pet-meta {
  display: flex;
  gap: 10px;
  color: #666;
  font-size: 14px;
}

.info-section {
  background: white;
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
}

.section-title {
  font-size: 16px;
  margin-bottom: 15px;
  color: #8b6b57;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.label {
  color: #666;
}

.value {
  font-weight: bold;
}

.bottom-nav {
  position: fixed;
  bottom: 5vh;
  left: 10vh;
  right: 10vh;
  height: 60px;
  background: rgb(231, 229, 229);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  border-radius: 30px;
  z-index: 1000;
}

.nav-item {
  padding: 10px;
  font-size: 24px;
  color: white;
}

.nav-item.active {
  color: white;
  background-color: #8b6b57;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>