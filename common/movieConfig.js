/*
备注
count: 每次请求数量
movieRankDate: 电影排行榜页面数据
华语Top排行榜：https://jackielee.cn/wxrank/movie/chinaTopMovie?start=0&limit=10
华语票房排行榜：https://jackielee.cn/wxrank/movie/chinaTicketTopMovie?start=0&limit=10
世界票房排行榜：https://jackielee.cn/wxrank/movie/worldTicketTopMovie?start=0&limit=10
漫威电影推荐榜：https://jackielee.cn/wxrank/movie/dCMovie?start=0&limit=10
豆瓣电影top250：https://jackielee.cn/wxrank/movie/top250?start=0&limit=10
豆瓣电影搜索：https://douban.uieee.com/v2/movie/search?q=keyword
豆瓣详情：https://douban.uieee.com/v2/movie/subject/26266893
*/

export const count = 10;
export const movieSearchUrl = 'https://jackielee.cn/wxrank/movie/search?'
export const movieRankDate  = [
  { img: "/images/movie/dbmovie_theaters.jpeg",
    api: 'https://douban.uieee.com/v2/movie/in_theaters?',
    type: '电影热映榜'
  },
  { img: "/images/movie/dbmovie_comming.jpeg",
    api: 'https://douban.uieee.com/v2/movie/coming_soon?',
    type: '电影即将上映榜'
  },
  { img: "/images/movie/dbmovie_top250.jpeg",
    api: 'https://douban.uieee.com/v2/movie/top250?',
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
