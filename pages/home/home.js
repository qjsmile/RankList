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
        "subTitle": "每一部都是精华，雅俗共赏",
        "url": "../movie/categoryRank/categoryRank"
      }, 
      {
        "image": "/images/music.png",
        "title": "音乐排行榜",
        "subTitle": "每一首都是天籁，愉悦身心",
        "url": "../music/categoryRank/categoryRank"
      },
      {
        "image": "/images/book.png",
        "title": "书籍排行榜",
        "subTitle": "每一本都是好书，醍醐灌顶",
        "url": "../book/bookList/bookList"
      },
      {
        "image": "/images/game.png",
        "title": "游戏排行榜",
        "subTitle": "每一款都是人生，酣畅淋漓",
        "url": "../game/gameList/gameList"
      },
    ],
    wlad: {
      adData: {}, 
      ad: {
        banner: ["banner_0", "banner_1", "banner_2"],
        fixed: "fixed"
      }
    }
  },

  viewCategoryList: function (e) {
    var data = e.currentTarget.dataset
    const id = Number(data.categoryid)
    let url = this.data.categoryList[id].url
    wx.switchTab({
      url: url
    })
  },

  onShareAppMessage: function () {
    return ShareDesc
  }
})