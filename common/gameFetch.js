// ios游戏排行榜：https://api.jackielee.cn/wxrank/game/iosTopGame?start=0&limit=1
// 安卓游戏排行榜：https://api.jackielee.cn/wxrank/game/androidTopGame?start=0&limit=10
// 端游游戏排行榜：https://api.jackielee.cn/wxrank/game/clientTopGame?start=0&limit=10

export const count = 10;
export const gameDate  = [
  { api: 'https://api.jackielee.cn/wxrank/game/iosTopGame',
    type: 'ios游戏排行榜'
  },
  { api: 'https://api.jackielee.cn/wxrank/game/androidTopGame',
    type: '安卓游戏排行榜'
  },
  { api: 'https://api.jackielee.cn/wxrank/game/clientTopGame',
    type: '端游游戏排行榜'
  },
];

export function fetchGamesByJackieLee(url, start, count) {
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
          // that.setData({
          //   hasMore: false,
          //   showLoading: false,
          // })
        } else {
          // that.setData({
          //   bookList: that.data.bookList.concat(fetchData),
          //   start: that.data.start + fetchData.length,
          //   showLoading: false
          // })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        // that.setData({
        //     showLoading: false
        // })
        wx.stopPullDownRefresh()
      }
    })
  }
}
