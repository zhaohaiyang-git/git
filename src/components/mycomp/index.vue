<template>
  <div>
    <h1>{{ytitle}}</h1>
    <h2>{{mes}}</h2>
    <button @click="child_f" type="primary">
      <slot>默认信息</slot>
    </button>
    &nbsp;<button @click="child_f2" type="primary">
    按钮2
  </button>
    &nbsp;<button @click="child_f3" type="primary">
    更改propos
  </button>
    <div>
      <slot name="body"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'mycomp',
    props: {
      ytitle: {
        type: String,
        default: "标题"
      }
    },
    data() {
      return {
        mes: '子信息'
      }
    },
    methods: {
      child_f() {
        this.mes = '原来的方法'
      },
      child_f2() {
        this.mes = '原来的方法2'
      },
      child_f3() {
        this.ytitle = '更改propos'
      },
    }
  }
</script>


