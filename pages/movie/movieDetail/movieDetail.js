// pages/movie/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let app = getApp()

    app.request(`https://douban.uieee.com/v2/movie/subject/${options.id}`)
      .then(d => {
        this.setData({ movie: d, loading: false });
        wx.setNavigationBarTitle({ title: d.title });
      }).catch(e => {
        console.error(e);
      })
  }
})