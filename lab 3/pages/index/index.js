function getRandomColor(){
  let rgb = []
  for (let i=0;i<3;i++){
    let color =Math.floor(Math.random()*256).toString(16)
    color=color.length==1?'0'+color:color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuTxt:'',

    list:[
      {
        id:'299371',
        title:'杨国宜先生口述校史实录',
        videoUrl:'https://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
      },
      {
        id:'299396',
        title:'陆同兴先生口述校史实录',
        videoUrl:'https://arch.ahnu.edu.cn/__local/9/4A/42/E7DA5E0F64C14512E2C6811328E_D42D2D15_925A208.mp4?e=.mp4'
      },
      {
        id:'299378',
        title:'顾也萍先生口述校史实录',
        videoUrl:'https://arch.ahnu.edu.cn/__local/D/81/77/5AD57214BF66E4CB9F6796DE25F_60B85E89_70273DCB.mp4?e=.mp4'
      },
      {
        id:'299392',
        title:'黄翠华先生口述校史实录',
        videoUrl:'https://arch.ahnu.edu.cn/__local/8/9E/42/FEA2A20570AAB38AE1D8F4C8B6B_DECADDDE_60ACABD6.mp4?e=.mp4'
      }
    ]
  },
  playVideo:function(e){
    this.videoCtx.stop()
    this.setData({
      src:e.currentTarget.dataset.url
    })
    this.videoCtx.play()
  },
  // 更新弹幕内容
  getDanmu:function(e){
    this.setData({
      danmuTxt:e.detail.value
    })
  },

  // 发送弹幕
  sendDanmu:function(e){
    let text =this.data.danmuTxt;
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomColor()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('myVideo')
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