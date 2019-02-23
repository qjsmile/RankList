// pages/music/musicList/musicList.js

import { fetchMusicsByJackieLee } from '../../../common/musicFetch'
import { count, musicRankDate } from '../../../common/musicConfig'
import { ShareDesc } from '../../../app'

Page({
  data: {
    musicList: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    typeId: 0,
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      typeId: Number(options.id),
    })
    
    wx.setNavigationBarTitle({
      title: musicRankDate[that.data.typeId].type
    })

    that.fetchMusics()
  },

  fetchMusics: function() {
    var that = this
    fetchMusicsByJackieLee.call(that, musicRankDate[that.data.typeId].api, that.data.start, count)
  },

  // 上拉刷新 
  onPullDownRefresh: function() {
    var that = this
    that.setData({
      movieList: [],
      hasMore: true,
      showLoading: true,
      start: 0
    })
    that.fetchMusics()
  },

  // 滑到底部加载更多
  onReachBottom: function() {
    var that = this
    if (that.data.hasMore) {
      that.fetchMusics()
    }
  },

  onShareAppMessage: function () {
    return ShareDesc
  }
})