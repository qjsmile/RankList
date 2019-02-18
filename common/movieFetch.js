// 电影相关信息网络请求

// 通过豆瓣api获取电影列表
function fetchMoviesByDouBan(url, start, count) {
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
        const fetchData = res.data.subjects
        if (!fetchData || fetchData.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          const subjects = fetchData.map(item => {
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
            start: that.data.start + fetchData.length,
          })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        wx.stopPullDownRefresh()
      }
    })
  }
}

// 通过JackieLee api获取电影列表
function fetchMoviesByJackieLee(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        start: start,
        limit: count
      },
      method: 'GET', 
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        const fetchData = res.data.data
        if (!fetchData || fetchData.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          const subjects = fetchData.map(item => {
            return {
              'pic': item.pic,
              'title': item.title,
              'director': item.director,
              'actors': item.actor,
              'score': item.score,
              'date': item.date,
              'type': item.type,
            }
          })
          that.setData({
            movieList: that.data.movieList.concat(subjects),
            start: that.data.start + fetchData.length,
          })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        wx.stopPullDownRefresh()
      }
    })
  }
}

// 电影搜索
function searchMovies(url, searchWords, start, count) {
  var that = this
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        q: searchWords,
        start: start,
        limit: count
      },
      method: 'GET', 
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        const fetchData = res.data.data
        if (!fetchData || fetchData.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          const subjects = fetchData.map(item => {
            return {
              'pic': item.pic,
              'title': item.title,
              'director': item.director,
              'actors': item.actor,
              'score': item.score,
              'date': item.date,
              'type': item.type,
            }
          })
          that.setData({
            movieList: that.data.movieList.concat(subjects),
            start: that.data.start + fetchData.length,
          })
        }
        wx.stopPullDownRefresh()
      },
      fail: function() {
        wx.stopPullDownRefresh()
      }
    })
  }
}

export { 
  fetchMoviesByDouBan,
  fetchMoviesByJackieLee,
  searchMovies,
}