import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ChatList from '@/components/ChatList'
import ChatWindow from '@/components/ChatWindow'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chatList',
      component: ChatList
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/chatList',
      name: 'chatList',
      component: ChatList
    },
    {
      path: '/chatWindow',
      name: 'chatWindow',
      component: ChatWindow
    }
  ]
})
