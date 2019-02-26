
// pages/movie/categoryRank/categoryRank.js
import { movieRankDate } from '../../../common/movieFetch'
import { ShareDesc } from '../../../app'

Page({
  data: {
    movieRankDate: movieRankDate
  },

  onLoad: function (options) {
    
  },
  
  onShareAppMessage: function () {
    return ShareDesc
  }
})