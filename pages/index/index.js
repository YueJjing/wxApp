Page({
  data: {
    dianpuname: '囿优精品',
    // dianpuname: getUserInfo,
    taoyue: '18.95',
    taohongbao: '28.9',
    guoqiquan: '2'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})