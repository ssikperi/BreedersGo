<template>
  <div class="home">
    <!-- 头部区域 -->
    <header class="header">
      <div class="user-icon">
        <i class="fas fa-user-plus"></i>
      </div>
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="用户头像">
      </div>
    </header>

    <!-- 文章列表 -->
    <div class="article-list">
      <article class="article-card" v-for="article in articles" :key="article.id">
        <img :src="article.image" :alt="article.title" class="article-image">
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-desc">{{ article.description }}</p>
          <div class="article-meta">
            <div class="author">
              <img :src="article.authorAvatar" alt="作者头像" class="author-avatar">
              <span>{{ article.author }}</span>
            </div>
            <span class="time">{{ article.time }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- 底部导航栏 -->
    <nav class="bottom-nav">
      <div 
        class="nav-item" 
        :class="{ active: activeIndex === 0 }"
        @click="activeIndex = 0"
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
        @click="activeIndex = 2"
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
const activeIndex = ref(0)

const navigateTo = (index) => {
  activeIndex.value = index
  if (index === 1) {
    router.push('/pet-info')
  }
}
const articles = ref([
  {
    id: 1,
    title: '猫咪的繁育计划科普',
    description: '猫咪的繁育计划是一个复杂且负责任的过程，涉及多方面的知识和技能。以下是一些关于猫咪繁育的基本科普知识...',
    image: '/src/assets/cat.jpg',
    author: 'KIM',
    authorAvatar: '/src/assets/kim-avatar.jpg',
    time: '14分钟前'
  },
  {
    id: 2,
    title: '2025年热门宠物品种',
    description: '小狗交配到生产,全过程记录。我家小狗开始了它的交配之旅,到了8月10号晚上...',
    image: '/src/assets/dog.jpg',
    author: 'KIM',
    authorAvatar: '/src/assets/kim-avatar.jpg',
    time: '14分钟前'
  },
  {
    id: 3,
    title: '2025年热门宠物品种',
    description: '小狗交配到生产,全过程记录。我家小狗开始了它的交配之旅,到了8月10号晚上...',
    image: '/src/assets/dog1.jpg',
    author: 'KIM',
    authorAvatar: '/src/assets/kim-avatar.jpg',
    time: '14分钟前'
  }
])
</script>

<style scoped>
.home {
  max-width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 60px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
}
  
.user-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-list {
  padding: 15px;
}

.article-card {
  background: white;
  border-radius: 15px;
  margin-bottom: 15px;
  overflow: hidden;
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-card:first-child .article-image {
  height: 400px;
}

.article-content {
  padding: 15px;
}

.article-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.article-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}

.time {
  color: #999;
  font-size: 12px;
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