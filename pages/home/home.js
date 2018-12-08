// pages/home/home.js
const app = getApp()
Page({
  data: {
    categoryList: [
      {
        "image": "/images/movie.png",
        "title": "电影排行榜",
        "subTitle": "每一部都是精华，雅俗共赏"
      }, {
        "image": "/images/tv.png",
        "title": "电视剧排行榜",
        "subTitle": "每一套都是人生，淋漓尽致"
      },
      {
        "image": "/images/music.png",
        "title": "音乐排行榜",
        "subTitle": "每一首都是天籁，愉悦身心"
      },
      {
        "image": "/images/book.png",
        "title": "书籍排行榜",
        "subTitle": "每一本都是好书，醍醐灌顶"
      },
    ],
  },

  viewCategoryList: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.id)
    let url = ""
    if (id == 0) {
      url = "../movie/categoryRank/categoryRank"
    } else if (id == 1) {
      url = "../movie/categoryRank/categoryRank"
    } else if (id == 2){
      url = "../movie/categoryRank/categoryRank"
    } else if (id ==3) {
      url = "../book/bookList/bookList"
    } else {
      url = "../movie/categoryRank/categoryRank"
    }
    wx.navigateTo({
      url: url
    })
  }
})