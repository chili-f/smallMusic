import request from '../../utils/request'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList:[],
    topList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // wx.request({
    //   url: 'http://localhost:3000/banner',
    //   data: { type : 2 },
    //   success:(res)=>{
    //     console.log('请求成功',res);
    //   },
    //   fail:(err)=>{
    //     console.log('请求失败',err);
    //   }
    // })
    //轮播图
    let bannerList = await request('/banner',{ type : 2 })
    this.setData({
      bannerList:bannerList.banners
    })
    //推荐歌单
    let recommendList = await request('/personalized',{limit:10})
    this.setData({
      recommendList:recommendList.result
    })
    //排行榜
    // 需求分析：根据idx的值获取对应的数据
    // idx的取值范围：0-20 我们需要0-4
    // 需要发送5次请求
    let index = 0;
    let listArr = [];
    while(index < 5){
      let topListData = await request('/top/list',{idx:index++})
      let topListItem = {
        name : topListData.playlist.name,
        tracks : topListData.playlist.tracks
      }
      listArr.push(topListItem);
      this.setData({
        topList : listArr
      })
    }
    //更新toplist的状态值，放在这里更新会导致发送请求的过程中页面长时间白屏
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})