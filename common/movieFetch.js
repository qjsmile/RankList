// 电影相关信息网络请求
function fetchData(path, params) {
  return new Promise((resolve, reject) => {
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
    })
  })
}

// 通过豆瓣api获取电影列表
function fetchMoviesByDouBan(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    fetchData(url, {start: start,count: count}).then(res => {
      const fetchData = res.subjects
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
    })
  }
}

// 通过JackieLee api获取电影列表
function fetchMoviesByJackieLee(url, start, count) {
  var that = this
  if (that.data.hasMore) {
    fetchData(url, {start: start, limit: count}).then(res => {
      const fetchData = res.data
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
    })
  }
}

// 电影搜索
function searchMovies(url, searchWords, start, count) {
  var that = this
  if (that.data.hasMore) {
    fetchData(url, {keyWord: searchWords, start: start, limit: count}).then(res => {
      const fetchData = res.data
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
    })
  }
}

export {
  fetchData,
  fetchMoviesByDouBan,
  fetchMoviesByJackieLee,
  searchMovies,
}