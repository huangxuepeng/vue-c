<template>
  <div>
    <span>{{ this.msg }}</span>
  </div>
</template>

<script>
  export default {
    name: "show",
    data() {
      return {
        webSockLink: "ws://127.0.0.1:8080/u/v1/message/ws",
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
        console.log(this.websock);
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


<style>

div {
	display: block;
}

.msgList {
	display: flex;
	width: 380px;
	height: 55px;
	font-family: 宋体;
}

.content {
	padding-top: 6px;
	width: 330px;
}
.content h3{
	margin: 0;
	font-size: 18px;
	line-height: 20px;
}
.msgCounts {
	float: right;
}
.msg {
	color: dimgrey;
	font-family: "arial black";
  display: block;
}

.msgList {
  display: flex;
  width: 380px;
  height: 55px;
  font-family: 宋体;
}

.content {
  padding-top: 6px;
  width: 330px;
}
.content h3{
  margin: 0;
  font-size: 18px;
  line-height: 20px;
}
.msgCounts {
  float: right;
}
.msg {
  color: dimgrey;
  font-family: "arial black";
}

</style>