/*
备注
count: 每次请求数量
musicRankDate: 音乐排行榜页面数据
原创音乐排行榜：https://api.jackielee.cn/wxrank/music/originTopMusic?start=0&limit=10
抖音音乐排行榜：https://api.jackielee.cn/wxrank/music/douYinTopMusic?start=0&limit=10
热歌排行榜：https://api.jackielee.cn/wxrank/music/hotTopMusic?start=0&limit=10
新歌排行榜：https://api.jackielee.cn/wxrank/music/newTopMusic?start=0&limit=10
*/
export const count = 21;

export const musicRankDate = [
  { imgUrl: "http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg",
    api: 'https://api.jackielee.cn/wxrank/music/originTopMusic',
    type: '音乐原创榜'
  },
  { imgUrl: "http://p1.music.126.net/bZvjH5KTuvAT0YXlVa-RtQ==/109951163326845001.jpg",
    api: 'https://api.jackielee.cn/wxrank/music/douYinTopMusic',
    type: '抖音排行榜'
  },
  { imgUrl: "http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg",
    api: 'https://api.jackielee.cn/wxrank/music/hotTopMusic',
    type: '音乐热歌榜'
  },
  { imgUrl: "http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg",
    api: 'https://api.jackielee.cn/wxrank/music/newTopMusic',
    type: '音乐新歌榜'
  },
]
