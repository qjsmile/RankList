// pages/movie/movieList.js

import { fetchMovies } from '../../../common/movieFetch'
import { apiList, count } from '../../../common/movieConfig'

var movieListNullTip = {
  tipText: '亲，找不到电影的浏览记录',
}

Page({
  data: {
    movieList: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    movieListNullTip: movieListNullTip,
    typeId: 0,
  },

  onLoad: function (options) {
    var that = this
    const movieType = [
      "电影top250榜",
      "电影新片榜",
      "电影票房榜",
      "电影口碑榜",
      "华语电影Top榜",
      "漫威电影推荐榜"
    ]
    
    that.setData({
      typeId: Number(options.id),
    })

    wx.setNavigationBarTitle({
      title: movieType[that.data.typeId]
    })
    that.fetchMovies()
  },

  fetchMovies: function() {
    var that = this
    switch (that.data.typeId) {
      case 0:
        fetchMovies.call(that, apiList.top, that.data.start, count)
        break;
      case 1: // 新片榜
        fetchMovies.call(that, apiList.popular, that.data.start, count)
        break;
      case 2:
        fetchMovies.call(that, apiList.coming, that.data.start, count)
        break;
      case 3:
        fetchMovies.call(that, apiList.top, that.data.start, count)
        break;
      case 4:
        fetchMovies.call(that, apiList.top, that.data.start, count)
        break;
      case 5:
        fetchMovies.call(that, apiList.top, that.data.start, count)
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
    var data = e.currentTarget.dataset
    // var keyword = data.tag
    console.log(e)

  },
})