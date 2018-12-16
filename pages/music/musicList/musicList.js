// pages/music/musicList/musicList.js
import { douyinMusicList } from '../../../common/douyinMusic'
import { hotMusic } from '../../../common/hotMusic'
import { originerMusic } from '../../../common/originerMusic'
import { newMusic } from '../../../common/newMusic'
import { musicRankDate } from '../../../common/musicConfig'
Page({
  data: {
    musicList: [],
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
    
    let tempMusicList = []
    if (that.data.typeId === 0) {
      tempMusicList = originerMusic
    } else if (that.data.typeId === 1) {
      tempMusicList = douyinMusicList
    } else if (that.data.typeId === 2) {
      tempMusicList = hotMusic
    } else {
      tempMusicList = newMusic
    }

    this.setData({
      musicList: tempMusicList,
    })
  },
})