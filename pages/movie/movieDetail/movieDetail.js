// pages/movie/movieDetail/movieDetail.js

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
    this.getDetails(options.id);
    this.getComments(options.id);
  },
  
  fetchData(path, params) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: 'loading...',
      });
      wx.request({
        url: path,
        data: {
          ...params
        },
        method: 'GET', 
        header: {
          "Content-Type": "application/json,application/json"
        },
        success: res => {
          resolve(res.data)
        },
        fail: err => {
          reject(err)
        },
        complete: res => {
          wx.hideLoading()
        }
      })
    })
  },

  // 获取影视详情
  getDetails: function(id) {
    let that = this;
    this.fetchData(`https://douban.uieee.com/v2/movie/subject/${id}`).then(res => {
      const details = res;
      let castsName = [];
      for (let item of details.casts) {
        castsName.push(item.name);
      }

      that.setData({
        details: details,
        pubdates: "上映时间" + details.pubdates.join('/'),
        casts: castsName.join(' / '),
        comments_count: details.comments_count,
        loaded: true,
      });
    })
  },

  /**
   * 获取影视短评
   */
  getComments: function(id) {
    const that = this;
    this.fetchData(`https://douban.uieee.com/v2/movie/subject/${id}/comments`).then(res => {
      that.setData({
        comments: res.comments
      })
    })
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