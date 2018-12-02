// pages/movie/movie.js
Page({
  data: {
    films: [],
    start: 0,
    hasMore: true,
    showLoading: true,
    title: "电影排行"
  },

  viewFilmByTag: function (e) {
    var data = e.currentTarget.dataset
    var keyword = data.tag
    // wx.navigateTo({
    //   url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byTag) + '&keyword=' + keyword
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchMovies("https://douban.uieee.com/v2/movie/top250", 0, 10)
  },

  fetchMovies: function (url, start, count) {
    var that = this
    wx.request({
      url: url,
      data: {
        start: start,
        count: count
      },
      method: 'GET',
      header: {
        "Content-Type": "https://servicewechat.com/wx1bcdb50d7be558e9/0/page-frame.html",
      },
      success: function (res) {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
          console.log(that.data.start);
        }
        wx.stopPullDownRefresh()
      },
      fail: function () {
        that.setData({
          showLoading: false
        })
        wx.stopPullDownRefresh()
      }
    })
  },
})