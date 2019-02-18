//pages/movie/movieSearch/movieSearch.js

import { searchMovies } from '../../../common/movieFetch'
import { count, movieSearchUrl } from '../../../common/movieConfig'

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
      that.searchMoviesByWords()
    } else {
      wx.navigateBack()
    }
  },

  searchMoviesByWords() {
    var that = this
    searchMovies.call(that, "https://api.jackielee.cn/wxrank/movie/worldTicketTopMovie", that.data.searchWords, that.data.start, count)
  },

  // 滑到底部加载更多
  onReachBottom: function() {
    var that = this
		if (that.data.hasMore) {
      that.searchMoviesByWords()
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
  }
})