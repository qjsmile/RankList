// 电影相关信息网络请求

// 获取电影列表
function fetchMovies(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        start: start,
        count: count
      },
      method: 'GET', 
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          const subjects = res.data.subjects.map(item => {
            const actors = item.casts.map(actorItem => {
              return actorItem.name
            })

            return {
              'id': item.id,
              'pic': item.images.small,
              'title': item.title,
              'director': item.directors[0].name,
              'actors': actors.join(" / "),
              'score': item.rating.average,
              'date':item.year,
              'type': item.genres.join(" / "),
            }
          })
          that.setData({
            movieList: that.data.movieList.concat(subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        that.setData({
            showLoading: false
        })
        wx.stopPullDownRefresh()
      }
    })
  }
}

function fetchLocalChineseMovies(data) {
  //

}

function fetchLocalManweiMovies(data, start, count) {
  //
}

export { 
  fetchMovies,
  fetchLocalChineseMovies,
  fetchLocalManweiMovies
}
