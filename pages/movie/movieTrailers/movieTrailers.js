// pages/movie/movieTrailers/movieTrailers.js
Page({
  data: {
    currUrl: '',
    trailers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options.trailers)

    wx.setNavigationBarTitle({
      title: '中国预告片（中文字幕）',
    })
    that.setData({ 
      currUrl: options.currurl,
      trailers: JSON.parse(decodeURIComponent(options.trailers)),
    })
  },

  /**
   * 改变当前预告
   */
  changeTrailer(e) {
    let that = this;
    const { trailers } = that.data;
    const {index, url} = e.currentTarget.dataset;
    that.setData({ currUrl: url })
    wx.setNavigationBarTitle({
      title: trailers[index].title,
    })
  },

  /**
   * 视频播放结束
   */
  videoEnded() {
    const that = this;
    const {trailers, currUrl} = that.data;
    for(let i=0; i<trailers.length; i++) {
      if (currUrl == trailers[i].resource_url && i<trailers.length-1) {
        that.setData({ currUrl: trailers[i + 1].resource_url})
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
})