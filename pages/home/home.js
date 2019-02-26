// pages/home/home.js
import { ShareDesc } from '../../app'
const app = getApp()
const Page = require('../../utils/wlad_sdk.min.js').Page;

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
        "subTitle": "每一款都是人生，酣畅淋漓"
      },
    ],
    wlad: {
      adData: {}, 
      ad: {
        banner: ["banner_0", "banner_1", "banner_2", "banner_3", "banner_4"],
        fixed: "fixed"
      }
    }
  },

  viewCategoryList: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.categoryid)
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
    wx.switchTab({
      url: url
    })
  },

  onShareAppMessage: function () {
    return ShareDesc
  }
})