// pages/book/bookList/bookList.js
import { bookList } from "../../../common/bookConfig"

Page({
  data: {
    bookList: ['a']
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      bookList: (bookList.bookList)
    })
  },

})