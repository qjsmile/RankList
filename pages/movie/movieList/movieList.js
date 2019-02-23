// pages/movie/movieList.js

import { count, movieRankDate, fetchMoviesByJackieLee } from '../../../common/movieFetch'
import { ShareDesc } from '../../../app'

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
    fetchMoviesByJackieLee.call(that, movieRankDate[that.data.typeId].api, that.data.start, count)
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
    return ShareDesc
  }
})