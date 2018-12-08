/*
备注
count: 每次请求数量
apiList: api列表
hotKeyword: 搜索页热门关键词关键词
hotTag: 搜索页热门类型
*/
export const count = 5;

export const apiList = {
  top: 'https://douban.uieee.com/v2/movie/top250', // TOP250
  popular: "https://douban.uieee.com/v2/movie/in_theaters", // 新片榜
  coming: 'https://douban.uieee.com/v2/movie/coming_soon',
  // movieDetail: 'https://api.douban.com/v2/movie/subject/',
  // search: {
  //   byKeyword: 'https://api.douban.com/v2/movie/search?q=',
  //   byTag: 'https://api.douban.com/v2/movie/search?tag='
  // },
  // personDetail: 'https://api.douban.com/v2/movie/celebrity/',
};