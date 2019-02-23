//pages/movie/movieSearch/movieSearch.js

import { count, movieSearchUrl, searchMovies } from '../../../common/movieFetch'
import { ShareDesc } from '../../../app'

Page({
  data: {
    searchInputFocus: true,
    searchWords: "",
    movieList: [],
    hasMore: true,
    start: 0,
  },
  
  onTapSearchBtn() {
    var that = this
    if (that.data.searchWords != "") {
      that.searchMoviesByWords(true)
    } else {
      wx.navigateBack()
    }
  },

  searchMoviesByWords(isClear) {
    var that = this
    searchMovies.call(that, isClear, movieSearchUrl, that.data.searchWords, that.data.start, count)
  },

  // 滑到底部加载更多
  onReachBottom: function() {
    var that = this
		if (that.data.hasMore) {
      that.searchMoviesByWords(false)
		}
  },

  showSearchInput() {
    var that = this
    that.setData({
      searchInputFocus: true
    });
  },

  // 清空输入框内容
  clearSearchInput() {
    var that = this
    that.setData({
      searchWords: ""
    });
  },

  // 当在搜索框键入内容
  onSearchInputType(e) {
    var that = this
    var words = e.detail.value
    that.setData({
      searchWords: words
    });
  },
  onShareAppMessage: function () {
    return ShareDesc
  }
})