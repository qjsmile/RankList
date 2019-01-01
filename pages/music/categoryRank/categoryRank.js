// pages/music/categoryRank/categoryRank.js
import { musicRankDate } from '../../../common/musicConfig'

Page({
  data: {
    musicRankDate: musicRankDate
  },

  onLoad: function (options) {

  },

  viewMusicListWithID: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.id)
    let url = "../../music/musicList/musicList?id=" + id
    wx.navigateTo({
      url: url
    })
  },

  onShareAppMessage: function () {
    return {
      title: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      desc: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      path: 'pages/home/home'
    }
  }
})