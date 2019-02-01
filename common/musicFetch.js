export function fetchMusicsByJackieLee(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    that.data.showLoading = true
    wx.request({
      url: url,
      data: {
        start: start,
        limit: count
      },
      method: 'GET', 
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        const fetchData = res.data.data
        if (!fetchData || fetchData.length === 0) {
          that.setData({
            hasMore: false,
            showLoading: false,
          })
        } else {
          console.log(fetchData)
          that.setData({
            musicList: that.data.musicList.concat(fetchData),
            start: that.data.start + fetchData.length,
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