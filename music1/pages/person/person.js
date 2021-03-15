// pages/person/person.js
let startY = 0;//手指起始的坐标
let moveY = 0;//手指移动的坐标
let moveDistance = 0;//手指移动的距离
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coveTransform:"translateY(0)",
    coveTransition:"",
    userInfo:{}//用户信息
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 读取用户的基本信息
    let userInfo = wx.getStorageSync('userInfo');
    if(userInfo){
      this.setData({
        userInfo:JSON.parse(userInfo)
      })
    }
  },
  handlerTouchStart(e){
    //去除掉下拉时的过渡效果
    this.setData({
      coveTransition: ""
    })
    //开始位置
    startY = e.touches[0].clientY;
  },
  handlerTouchMove(e){
    //移动的位置
    moveY = e.touches[0].clientY;
    //移动的距离
    moveDistance = moveY - startY;
    if(moveDistance <= 0){
      moveDistance = 0
    }
    if(moveDistance >= 80){
      moveDistance = 80
    }
    //设置移动的距离
    this.setData({
      coveTransform:`translateY(${moveDistance}rpx)`
    })
  },
  handlerTouchEnd(){
    this.setData({
      coveTransform:`translateY(0rpx)`,
      coveTransition:`transform 1s linear`
    })
  },
  // 跳转至toLogin
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
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