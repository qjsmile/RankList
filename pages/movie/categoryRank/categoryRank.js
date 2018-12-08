
// pages/movie/categoryRank/categoryRank.js

Page({
  data: {
    images: [
      { img: "/images/movie/dbmovie_top250.jpeg"},
      { img: "/images/movie/dbmovie_new.jpeg"},
      { img: "/images/movie/dbmovie_ticket.jpeg" },
      { img: "/images/movie/dbmovie_like.jpeg"},
      { img: "/images/movie/movie_chinese.jpeg" },
      { img: "/images/movie/movie_manwei.jpeg" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  viewMoiveListWithID: function (e) {
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: "../../movie/movieList/movieList?id=" + data.id
    })
  }
})