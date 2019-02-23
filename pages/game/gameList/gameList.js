// pages/game/gameList/gameList.js
import { ShareDesc } from '../../../app'
Page({
  data: {
    iosPageData: {
      gameList: [],
      hasMore: true,
      scrollTop: 0,
      showGoTop: false,
    },
    androidPageData: {
      gameList: [],
      hasMore: true,
      scrollTop: 0,
      showGoTop: false,
    },
    pcPageData: {
      gameList: [],
      hasMore: true,
      scrollTop: 0,
      showGoTop: false,
    },
    currentIndex : 0,
  },

  onLoad: function (options) {
    this.fetchData(this.data.currentIndex)
  },

  fetchData: function(currentIndex) {
    const that  = this;
    const { iosPageData, androidPageData, pcPageData } = that.data
    const db = wx.cloud.database()
    if ( currentIndex === 0 && iosPageData.hasMore) {
      db.collection('iosGames').skip(iosPageData.gameList.length)
      .get()
      .then(res => {
        console.log(res.data)
        if (res.data.length > 0) {
          that.setData({
            'iosPageData.gameList': that.data.iosPageData.gameList.concat(res.data),
          });
        } else {
          that.setData({
            'iosPageData.hasMore': false
          })
        }
      })
    } else if (that.data.currentIndex === 1 && androidPageData.hasMore) {
      db.collection('androidGames').skip(androidPageData.gameList.length)
      .get()
      .then(res => {
        if (res.data.length > 0) {
          that.setData({
            'androidPageData.gameList': androidPageData.gameList.concat(res.data),
          });
        } else {
          that.setData({
            'androidPageData.hasMore': false
          })
        }
      })
    } else if (pcPageData.hasMore){
      db.collection('pcGames').skip(pcPageData.gameList.length)
      .get()
      .then(res => {
        if (res.data.length > 0) {
          that.setData({
            'pcPageData.gameList': pcPageData.gameList.concat(res.data),
          });
        } else {
          that.setData({
            'pcPageData.hasMore': false
          })
        }
      })
    }
  },

  // Swiper页发生变化
  onSwiperChange:function(e) {
    const that  = this;
    const { current } = e.detail;
    const { androidPageData, pcPageData } = that.data
    that.setData({
      currentIndex: current,
    });
    if (current == 1 && androidPageData.gameList.length <= 0) {
      this.fetchData(current)
    }
    if (current == 2 && pcPageData.gameList.length <= 0) {
      this.fetchData(current)
    }
  },
  
  //点击切换，滑块index赋值
  onChangeSwiper: function(e){
    const that = this;
    const current = e.target.dataset.current
    const { currentIndex, androidPageData, pcPageData } = that.data
    if (currentIndex != current) {
      that.setData({
        currentIndex: current,
      });
      if (current == 1 && androidPageData.gameList.length <= 0) {
        this.fetchData(current)
      }
      if (current == 2 && pcPageData.gameList.length <= 0) {
        this.fetchData(current)
      }
    }
  },

  // Scroll底部触发事件
  onScrollToLoadMore: function() {
    this.fetchData(this.data.currentIndex)
  },
  // 简单页面滚动偏移，控制是否出现返回顶部
  onIOSShowGoTop: function (e) {
    if (e.detail.scrollTop > 300) {
      this.setData({
        'iosPageData.showGoTop': true
      });
    } else {
      this.setData({
        'iosPageData.showGoTop': false
      });
    }
  },
  onANDShowGoTop: function (e) {
    if (e.detail.scrollTop > 300) {
      this.setData({
        'androidPageData.showGoTop': true
      });
    } else {
      this.setData({
        'androidPageData.showGoTop': false
      });
    }
  },
  onPCShowGoTop: function (e) {
    if (e.detail.scrollTop > 300) {
      this.setData({
        'pcPageData.showGoTop': true
      });
    } else {
      this.setData({
        'pcPageData.showGoTop': false
      });
    }
  },

  // 返回顶部
  onReturnTop: function (e) {
    if (this.data.currentIndex === 0) {
      this.setData({
        'iosPageData.scrollTop': 0
      });
    } else if(this.data.currentIndex === 1) {
      this.setData({
        'androidPageData.scrollTop': 0
      });
    } else {
      this.setData({
        'pcPageData.scrollTop': 0
      });
    }
  },
  //分享文案
  onShareAppMessage: function () {
    return ShareDesc
  },
})
