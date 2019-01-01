// pages/movie/movieList.js

import { fetchMovies } from '../../../common/movieFetch'
import { count, movieRankDate } from '../../../common/movieConfig'
import { chineseMovieList } from '../../../common/chineseMovie'
import { wordTicketMovieList } from '../../../common/wordTicketMovie'
import { manweiMovieList } from '../../../common/manweiMovie'

Page({
  data: {
    movieList: [],
    hasMore: true,
    showLoading: true,
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
        fetchMovies.call(that, movieRankDate[that.data.typeId].api, that.data.start, count)
        break
      case 3:
        that.setData({
          movieList: wordTicketMovieList,
          hasMore: false,
          showLoading: false,
        })
        break
      case 4:
        that.setData({
          movieList: chineseMovieList,
          hasMore: false,
          showLoading: false,
        })
        break
      case 5:
        that.setData({
          movieList: manweiMovieList,
          hasMore: false,
          showLoading: false,
        })
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
			showLoading: true,
			start: 0
		})
    that.fetchMovies()
  },

  // 滑到底部加载更多
  onReachBottom: function() {
		var that = this
		if (!that.data.showLoading) {
      that.fetchMovies()
		}
  },
  
  viewMovieDetailByID: function (e) {
    //
  },

  onShareAppMessage: function () {
    return {
      title: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      desc: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      path: 'pages/home/home'
    }
  }
})