// pages/book/bookList/bookList.js
import { fetchBooksByJackieLee, count, bookTop250Url } from "../../../common/bookFetch"
import { ShareDesc } from '../../../app'

Page({
  data: {
    bookList: [],
    hasMore: true,
    start: 0,
  },

  onLoad: function (options) {
    var that = this
    that.fetchBooks()
  },

  fetchBooks: function() {
    var that = this
    fetchBooksByJackieLee.call(that, bookTop250Url, that.data.start, count)
  },

  // 上拉刷新 
  onPullDownRefresh: function() {
    var that = this
    that.setData({
      movieList: [],
      hasMore: true,
      start: 0
    })
    that.fetchBooks()
  },

  // 滑到底部加载更多
  onReachBottom: function() {
    var that = this
    if (that.data.hasMore) {
      that.fetchBooks()
    }
  },

  bookUrl: function () {
    // console.log(1)
    // wx.navigateTo({
    //   url: 'https://book.douban.com/subject/1770782/'
    // })
  },

  onShareAppMessage: function () {
    return ShareDesc
  }
})