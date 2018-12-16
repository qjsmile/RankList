/*
备注
count: 每次请求数量
movieRankDate: 电影排行榜页面数据
*/
export const count = 10;

export const movieRankDate  = [
  { img: "/images/movie/dbmovie_theaters.jpeg",
    api: 'https://douban.uieee.com/v2/movie/in_theaters',
    type: '电影热映榜'
  },
  { img: "/images/movie/dbmovie_comming.jpeg",
    api: 'https://douban.uieee.com/v2/movie/coming_soon',
    type: '电影即将上映榜'
  },
  { img: "/images/movie/dbmovie_top250.jpeg",
    api: 'https://douban.uieee.com/v2/movie/top250',
    type: '电影Top250榜'
  },
  { img: "/images/movie/dbmovie_ticket.jpeg",
    api: 'https://douban.uieee.com/v2/movie/top250',
    type: '电影票房榜'
  },
  { img: "/images/movie/movie_chinese.jpeg",
    api: 'https://douban.uieee.com/v2/movie/top250',
    type: '华语电影Top榜'
  },
  { img: "/images/movie/movie_manwei.jpeg",
    api: 'https://douban.uieee.com/v2/movie/top250',
    type: '漫威电影推荐榜'
  },
];
