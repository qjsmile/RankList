// 电影相关信息网络请求

// 获取电影列表
function fetchMovies(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        start: start,
        count: count
      },
      method: 'GET', 
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            movieList: that.data.movieList.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        that.setData({
            showLoading: false
        })
        wx.stopPullDownRefresh()
      }
    })
  }
}

export { 
  fetchMovies 
}
