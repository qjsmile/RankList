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

})