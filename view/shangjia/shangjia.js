// pages/shangjia/shangjia.js
const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({

  /*** 页面的初始数据*/
  data: {
    // 轮播图
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    // tab切换标题
    currenttab: '0',
    tabList: ["今日特卖", "秋冬服饰", "达人美妆", "美食", "母婴", "鞋帽", "箱包", "家电"]
  },
  curSelect(e){
    //e.currentTarget.dataset.tabid
    const newSelect = e.currentTarget.dataset.tabid
    if (this.data.currenttab === newSelect){
      return;
    }else{
      this.setData({
        currenttab: newSelect
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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