// pages/book/bookList/bookList.js
import { bookList } from "../../../common/bookConfig"

Page({
  data: {
    bookList: []
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      bookList: (bookList)
    })
  },

  bookUrl: function () {
    // console.log(1)
    // wx.navigateTo({
    //   url: 'https://book.douban.com/subject/1770782/'
    // })
  },

  onShareAppMessage: function () {
    return {
      title: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      desc: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      path: 'pages/home/home'
    }
  }

})