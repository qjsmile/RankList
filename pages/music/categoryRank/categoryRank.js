// pages/music/categoryRank/categoryRank.js
import { musicRankDate } from '../../../common/musicConfig'
import { ShareDesc } from '../../../app'

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
    return ShareDesc
  }
})