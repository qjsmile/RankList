//index.js
//获取应用实例

var filmNullTip = {
  tipText: '亲，找不到电影的浏览记录',
  actionText: '去逛逛',
  routeUrl: '../../pages/popular/popular'
}

Page({
  data: {
    motto: 'Hello 秦娟',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    array1: [1, 2, 3, 4, 5],
    film_history: [
      { films: [{
            time: 2018,
            data:{
              id: 0,
              images: {
                large: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543661302145&di=1b237792bb6903ebc2e296d09c300efd&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170103%2F6f6988b820364e79ab3bb8a3e3fdaf7f_th.jpg"
              }
            }
          }
        ]
      },{
        films: [
          {
            time: 2018
          }
        ]
      },{
        films: [
          {

          }
        ]
      }
    ],
    person_history: [],
    show: 'film_history',
    nullTip: filmNullTip
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
