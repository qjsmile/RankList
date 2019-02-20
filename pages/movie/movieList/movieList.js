// pages/movie/movieList.js

import { fetchMoviesByDouBan, fetchMoviesByJackieLee } from '../../../common/movieFetch'
import { count, movieRankDate } from '../../../common/movieConfig'

Page({
  data: {
    movieList: [],
    hasMore: true,
    start: 0,
    typeId: 0,
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      typeId: Number(options.id),
    })

    wx.setNavigationBarTitle({
      title: movieRankDate[that.data.typeId].type
    })

    that.fetchMovies()
  },

  fetchMovies: function() {
    var that = this
    switch (that.data.typeId) {
      case 0:
      case 1: // 新片榜
      case 2:
        fetchMoviesByDouBan.call(that, movieRankDate[that.data.typeId].api, that.data.start, count)
        break
      case 3:
      case 4:
      case 5:
        fetchMoviesByJackieLee.call(that, movieRankDate[that.data.typeId].api, that.data.start, count)
        break;
      default:
      // do nothing
    }
  },

 // 上拉刷新 
  onPullDownRefresh: function() {
		var that = this
		that.setData({
      movieList: [],
			hasMore: true,
			start: 0
		})
    that.fetchMovies()
  },

  // 滑到底部加载更多
  onReachBottom: function() {
		var that = this
		if (that.data.hasMore) {
      that.fetchMovies()
		}
  },
  
  viewMovieDetailByID: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.id)
    let url = "../../movie/movieDetail/movieDetail?id=" + id
    wx.navigateTo({
      url: url
    })
  },

  onShareAppMessage: function () {
    return {
      title: '进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      desc: '进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      path: 'pages/home/home'
    }
  }
})