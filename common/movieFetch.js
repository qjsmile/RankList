
/*
count: 每次请求数量
movieRankDate: 电影排行榜页面数据
电影热映榜：https://jackielee.cn/wxrank/movie/inTheaters?start=0&limit=10
电影即将上映榜：https://jackielee.cn/wxrank/movie/comingSoon?start=0&limit=10
电影Top250榜：https://jackielee.cn/wxrank/movie/top250?start=0&limit=10
票房排行榜：https://jackielee.cn/wxrank/movie/worldTicketTopMovie?start=0&limit=10
华语电影Top榜：https://jackielee.cn/wxrank/movie/chinaTopMovie?start=0&limit=10
漫威电影推荐榜：https://jackielee.cn/wxrank/movie/dCMovie?start=0&limit=10
电影搜索：https://jackielee.cn/wxrank/movie/search?
电影详情：https://jackielee.cn/wxrank/movie/detail?id=26266893
电影短评：https://jackielee.cn/wxrank/movie/comments?id=26266893&start=0&limit=2
*/

const count = 20;
const movieSearchUrl = 'https://jackielee.cn/wxrank/movie/search?'
const movieDetailUrl = 'https://jackielee.cn/wxrank/movie/detail?'
const movieCommentsUrl = 'https://jackielee.cn/wxrank/movie/comments'
const movieRankDate  = [
  { img: "/images/movie/dbmovie_theaters.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/inTheaters?',
    type: '电影热映榜'
  },
  { img: "/images/movie/dbmovie_comming.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/comingSoon?',
    type: '电影即将上映榜'
  },
  { img: "/images/movie/dbmovie_top250.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/top250?',
    type: '电影Top250榜'
  },
  { img: "/images/movie/dbmovie_ticket.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/worldTicketTopMovie?',
    type: '电影票房榜'
  },
  { img: "/images/movie/movie_chinese.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/chinaTopMovie?',
    type: '华语电影Top榜'
  },
  { img: "/images/movie/movie_manwei.jpeg",
    api: 'https://jackielee.cn/wxrank/movie/dCMovie?',
    type: '漫威电影推荐榜'
  },
];

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
          that.setData({
            movieList: that.data.movieList.concat(fetchData),
            start: that.data.start + fetchData.length,
          })
        }
        wx.stopPullDownRefresh()
    })
  }
}

// 电影搜索
function searchMovies(isClear, url, searchWords, start, count) {
  var that = this
  if (that.data.hasMore) {
    fetchData(url, {keyWord: searchWords, start: start, limit: count, type: 0}).then(res => {
      const fetchData = res.data
      if (!fetchData || fetchData.length === 0) {
        that.setData({
          hasMore: false,
        })
        if (that.data.movieList.length <= 0) {
          wx.showModal({
            content: `很抱歉，未搜到到相关影片~`,
            showCancel: false
          })
        }
      } else {
        if(isClear) {
          that.setData({
            movieList: fetchData,
            start: fetchData.length,
            hasMore: true
          })
        } else {
          that.setData({
            movieList: that.data.movieList.concat(fetchData),
            start: that.data.start + fetchData.length,
          })
        }
      }
      wx.stopPullDownRefresh()
    })
  }
}

// 获取影视详情
function getDetails(url, id) {
  var that = this;
  fetchData(url, {id: id}).then(res => {
    const details = res.data;
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
}

// 获取影视短评
function getComments(url, id, start, count) {
  var that = this;
  fetchData(url, {id: id, start: start, limit: count}).then(res => {
    that.setData({
      comments: res.data.comments
    })
  })
}

export {
  count,
  movieSearchUrl,
  movieDetailUrl,
  movieCommentsUrl,
  movieRankDate,
  fetchMoviesByJackieLee,
  searchMovies,
  getDetails,
  getComments,
}