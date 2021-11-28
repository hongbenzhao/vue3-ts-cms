<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            class="avatar"
            size="medium"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          ></el-avatar>
          <span class="name">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick">
              退出登录
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-info" divided>个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="operation">
      <span><i class="el-icon-bell"></i></span>
      <span><i class="el-icon-chat-dot-round"></i></span>
      <span>
        <span class="dot"></span>
        <i class="el-icon-postcard"></i>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/catch'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const router = useRouter()

    const handleExitClick = () => {
      LocalCache.deleCache('token')
      router.push('/main')
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-info {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    .avatar {
      width: 30px;
      height: 30px;
    }
    .name {
      margin-left: 8px;
    }
  }
  .operation {
    margin-right: 20px;
    span {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 35px;
      line-height: 35px;
      &:hover {
        background: #f2f2f2;
      }
      i {
        font-size: 20px;
      }
      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        background: red;
        z-index: 10;
        width: 6px;
        height: 6px;
        border-radius: 100%;
      }
    }
  }
}
</style>
