
// pages/movie/categoryRank/categoryRank.js
import { movieRankDate } from '../../../common/movieConfig'

Page({
  data: {
    movieRankDate: movieRankDate
  },

  onLoad: function (options) {
    
  },

  viewMoiveListWithID: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.id)
    let url = "../../movie/movieList/movieList?id=" + id
    wx.navigateTo({
      url: url
    })
  },
  
  movieSearch: function() {
    wx.navigateTo({
      url: '../movieSearch/movieSearch'
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