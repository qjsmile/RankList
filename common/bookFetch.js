
// 豆瓣top250书籍：https://api.jackielee.cn/wxrank/book/top250?start=0&limit=1
export const count = 10;
export const bookTop250Url = 'https://api.jackielee.cn/wxrank/book/top250'

export function fetchBooksByJackieLee(url, start, count) {
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
          that.setData({
            bookList: that.data.bookList.concat(fetchData),
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