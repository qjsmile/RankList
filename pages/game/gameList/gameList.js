// pages/game/gameList/gameList.js
import { iosGameList } from '../../../common/iosGame'
import { andGameList } from '../../../common/andGame'
import { onlineGameList } from '../../../common/onlineGame'

const alldata = [iosGameList, andGameList, onlineGameList]
Page({
  data: {
    gameList: iosGameList,
    currentData : 0,
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }
  },

  onLoad: function (options) {

  },

  //获取当前滑块的index
  bindChange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current,
      gameList: alldata[e.detail.current]
    });
  },
  
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;

    if (that.data.currentData === e.target.dataset.current){
        return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current,
        gameList: alldata[e.target.dataset.current],
        'scrollTop.scroll_top': 0
      });
    }
  },

  //分享文案
  onShareAppMessage: function () {
    return {
      title: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      desc: '周末无聊？进来找部电影、找首歌、找本书、找款游戏，打发时间吧！',
      path: 'pages/home/home'
    }
  },

  //返回顶部
  returnTop: function (e) {
    var scroll_top = this.data.scrollTop.scroll_top;
    if (scroll_top == 1) {
      scroll_top = 0;
    } else {
      scroll_top = 1;
    }
    this.setData({
      'scrollTop.scroll_top': scroll_top
    });
  },

  //获取返回顶部出现的条件，以及控制其显示状态
  scrollTopFun: function (e) {
    if (e.detail.scrollTop > 300) {//触发gotop的显示条件 
      this.setData({
        'scrollTop.goTop_show': true
      });
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },
})
