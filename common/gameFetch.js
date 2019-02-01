// ios游戏排行榜：https://api.jackielee.cn/wxrank/game/iosTopGame?start=0&limit=1
// 安卓游戏排行榜：https://api.jackielee.cn/wxrank/game/androidTopGame?start=0&limit=10
// 端游游戏排行榜：https://api.jackielee.cn/wxrank/game/clientTopGame?start=0&limit=10

// 2、ios游戏排行榜：https://api.jackielee.cn/wxrank/game/iosTopGame?start=0&limit=1
// {
//   "code": 200,
//   "msg": "成功",
//   "data": [
//     {
//       "score": "9.1",
//       "size": "287MB",
//       "price": "￥1.00",
//       "pic": "http://www.sinaimg.cn/gm/m/ios/idx/2014/0219/U3077P115T299D606F10473DT20140219184403.jpg",
//       "title": "未上锁的房间2（The Room Two）",
//       "type": [
//         "单机",
//         "解谜益智",
//         "休闲",
//         "视觉系"
//       ],
//       "desc": "游戏最为出色的便是其真实的代入感，这个代入感体现在方方面面。制作逼真的 3D 画面会随着光线与角度的变化作出相应的调整，给人身临其境的感觉；与普通寻物解谜不同，Room 中所有的道具互动都做出了..."
//     }
//   ]
// }
// 3、安卓游戏排行榜：https://api.jackielee.cn/wxrank/game/androidTopGame?start=0&limit=10
// {
//   "code": 200,
//   "msg": "成功",
//   "data": [
//     {
//       "score": "9.1",
//       "size": "9.21MB",
//       "price": "免费",
//       "pic": "http://www.sinaimg.cn/gm/m/ios/idx/2014/0219/U3077P115T299D606F10473DT20140219184403.jpg",
//       "title": "未上锁的房间2（The Room Two）",
//       "type": [
//         "单机",
//         "解谜益智",
//         "休闲",
//         "视觉系"
//       ],
//       "desc": "游戏最为出色的便是其真实的代入感，这个代入感体现在方方面面。制作逼真的 3D 画面会随着光线与角度的变化作出相应的调整，给人身临其境的感觉；与普通寻物解谜不同，Room 中所有的道具互动都做出了..."
//     }
//   ]
// }
// 4、端游游戏排行榜：https://api.jackielee.cn/wxrank/game/clientTopGame?start=0&limit=10
// {
//   "code": 200,
//   "msg": "成功",
//   "data": [
//     {
//       "date": "2016年01月15日",
//       "score": "9.6",
//       "pic": "http://www.sinaimg.cn/gm/c/2005-03-18/U10998P115T59D1904F8874DT20140901163307.jpg",
//       "title": "魔兽世界",
//       "type": [
//         "角色扮演",
//         "魔幻",
//         "3D"
//       ],
//       "desc": "《魔兽世界》正式发售已近十年，十年的时光在多少玩家生命中烙印出了不可磨灭的痕迹。虽然也曾有过不被玩家肯定的设计，虽然也面临着新人玩家被免费游戏大量截流的..."
//     }
//   ]
// }

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
