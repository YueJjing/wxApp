// pages/dianpu/dianpu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    hotlist:[]
  },
  loaderMore(e) {
    ++this.data.page
    this.setData({
      page : this.data.page
    })
    console.log(this.data.page)
    this.getRequest()
    // var id=e.currentTarget.dataset.id
    // id.push(thml)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    //内容
    this.getRequest()
  },
  //请求数据
  getRequest(){
    var that = this;
    wx.request({
      url: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&' ,
      data: {page: this.data.page},
      method: 'GET',
      success: function (res) {
        //设置data中hotlist数据
        that.setData({
          hotlist:that.data.hotlist.concat(res.data.result)
        })
      }
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