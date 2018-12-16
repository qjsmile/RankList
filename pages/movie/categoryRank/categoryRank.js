
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
  }
})