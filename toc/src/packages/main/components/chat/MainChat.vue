<template>
    <div>
        <div></div>
    </div>
</template>

<script>
  export default {
    name: "show",
    data() {
      return {
        webSockLink: "ws://127.0.0.1:8080/ws",
        msg: "",
      }
    },
    methods: {
      webSocketOnmessage(e) {
        let data = JSON.parse(e.data)
        console.log("收到消息：", JSON.parse(e.data))
        console.log("wss=>", data)
      },
      initWebSocket() {
        this.websock = new WebSocket(this.webSockLink)
        this.websock.onopen = this.webSocketOnopen
        this.websock.onerror = this.webSocketOnerror
        this.websock.onmessage = this.webSocketOnmessage
        this.websock.onclose = this.webSocketClose
      },
      webSocketOnopen() {
        console.log('WebSocket连接成功')
      },
      webSocketOnerror(e) {
        console.log('WebSocket连接发生错误')
      },
      webSocketClose(e) {
        console.log('关闭WebSocket连接')
      }
    },
    mounted() {
      this.initWebSocket()
    },
    destroyed() {
      this.webSocketClose()
    },
  }
</script>


<style lang="less" scoped>
    
</style>