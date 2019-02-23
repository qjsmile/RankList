// pages/movie/movieDetail/movieDetail.js
import { movieDetailUrl, movieCommentsUrl, getComments, getDetails } from '../../../common/movieFetch'

Page({
  data: {
    id: 0,
    details: {},
    pubdates: '',
    comments_count: 0,
    comments: [],
    isFold: true,
    loaded: false,
  },

  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          bgImgHeight: res.windowWidth/2
        })
      },
    })

    wx.setNavigationBarTitle({
      title: '影片详情',
    })

    that.setData({
      id: Number(options.id)
    })
    if (options.id > 0) {
      getDetails.call(that, movieDetailUrl, options.id)
      getComments.call(that, movieCommentsUrl, options.id, 0, 20)
    } else {
      wx.showModal({
        content: `抱歉，😞暂无详情~`,
        showCancel: false
      })
    }
  },

  // 折叠开关
  foldToggle() {
    const { isFold } = this.data;
    this.setData({
      isFold: !isFold
    })
  },
  // 剧照预览
  onPreviewImage(e) {
    const { img } = e.currentTarget.dataset;
    const { details } = this.data;
    let urls = [];
    for(let item of details.photos) {
      urls.push(item.image)
    }
    wx.previewImage({
      current: img,
      urls
    })
  },
  // 播放预告片
  onPlayMovieTrailers(e) {
    let currUrl = e.currentTarget.dataset.currurl;
    let trailers = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.trailers));
    wx.navigateTo({
      url: '/pages/movie/movieTrailers/movieTrailers?trailers=' + trailers + '&currurl=' + currUrl
    })
  },
  // 复制播放地址
  onCopyUrl: function(e) {
    const {url} = e.currentTarget.dataset;
    wx.setClipboardData({
      data: url,
      success: res => {
        wx.showModal({
          content: `播放地址已复制到剪贴板 \n 前往浏览器粘贴访问`,
          showCancel: false
        })
      }
    })
  }
})