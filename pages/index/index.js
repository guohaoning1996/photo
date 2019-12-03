
Page({
  data: {
    imgPath: '',
    face: null
  },
  upFile () {
    var that = this;
    wx.chooseImage({
      success (res) {
        wx.showLoading({
          title: '正在分析...'
        })
        // console.log(res)
        wx.uploadFile({
          url: 'https://ai.qq.com/cgi-bin/appdemo_detectface?g_tk=5381',
          filePath: res.tempFiles[0].path,
          name: 'image_file',
          success (info) {
            // console.log(info.data);
            var data = JSON.parse(info.data);
            // console.log(data.data.face[0])
            that.setData({
              imgPath: res.tempFiles[0].path,
              face: data.data.face[0]
            });
            wx.hideLoading();

          }
        })
      }
    })
  }
})