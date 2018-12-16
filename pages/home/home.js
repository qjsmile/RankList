// pages/home/home.js
const app = getApp()
Page({
  data: {
    categoryList: [
      {
        "image": "/images/movie.png",
        "title": "电影排行榜",
        "subTitle": "每一部都是精华，雅俗共赏"
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
      {
        "image": "/images/game.png",
        "title": "游戏排行榜",
        "subTitle": "每一款游戏都是好玩的"
      },
    ],
  },

  viewCategoryList: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.id)
    let url = ""
    if (id == 0) {
      url = "../movie/categoryRank/categoryRank"
    } else if (id == 1){
      url = "../music/categoryRank/categoryRank"
    } else if (id ==2) {
      url = "../book/bookList/bookList"
    } else {
      url = "../game/gameList/gameList"
    }
    wx.navigateTo({
      url: url
    })
  }
})