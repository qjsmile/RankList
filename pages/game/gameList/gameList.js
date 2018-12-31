// pages/game/gameList/gameList.js
import { iosGameList } from '../../../common/iosGame'
import { andGameList } from '../../../common/andGame'
import { onlineGameList } from '../../../common/onlineGame'

const alldata = [iosGameList, andGameList, onlineGameList]
Page({
  data: {
    gameList: iosGameList,
    currentData : 0,
  },

  onLoad: function (options) {

  },

  //获取当前滑块的index
  bindChange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current,
      gameList: alldata[e.detail.current]
    })
  },
  
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;

    if (that.data.currentData === e.target.dataset.current){
        return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current,
        gameList: alldata[e.target.dataset.current]
      })
    }
  }
})
