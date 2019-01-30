//pages/movie/movieSearch/movieSearch.js
Page({
  data: {
    searchInputFocus: true,
    searchWords: "",
    wordsList: [],
    size: 20,
    page: 1,
    movies: [],
    requestInternal: -1,
  },
  onTapSearchBtn() {
    console.log("words", this.data.searchWords)
    if (this.data.searchWords != "") {
      this.retrieve()
    }
    this.setData({
      searchInputFocus: false,
      searchWords: "",
      wordsList: []
    });
  },

  retrieve() {
    let that = this
    let start = (this.data.page - 1) * that.data.size
    wx.showLoading({ title: '加载中' })

    return wx.request({
      url: "http://t.yushu.im/v2/movie/search",
      data: {
        tag: that.data.searchWords,
        start: start,
        count: that.data.size
      },
      method: 'GET',
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function (res) {
        console.log("ff",res.data.subjects)
        if (res.data.subjects.length === 0) {

        } else {
          let movies = res.data.subjects
          let total = Math.floor(res.total / that.data.size)
          that.setData({ 
            movies: movies, 
            total: total, 
            page: that.data.page, 
            wordsList: [] 
          })
        }
        wx.hideLoading()
      },
      fail: function () {
        wx.hideLoading()
      }
    })
  },
  showSearchInput() {
    this.setData({
      searchInputFocus: true
    });
  },
  // 清空输入框内容
  clearSearchInput() {
    this.setData({
      searchWords: ""
    });
  },
  // 当在搜索框键入内容
  onSearchInputType(e) {
    let that = this
    let words = e.detail.value
    that.setData({
      searchWords: words
    });
    clearTimeout(this.data.requestInternal)
    this.data.requestInternal = setTimeout(() => {
      wx.request({
        url: `http://t.yushu.im/v2/movie/search`,
        data: {
          tag: words,
          start: 0,
          count: 10
        },
        method: 'GET',
        header: {
          "Content-Type": "application/json,application/json"
        },
        success: function (res) {
          console.log(res.data.subjects)
          if (res.data.subjects.length === 0) {

          } else {
            that.setData({
              movies: res.data.subjects
            });
          }
        },
        fail: function () {
          //
        }
      })
    }, 2000)
  }
})