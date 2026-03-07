Page({
  data: {
    games: [
      { id: 'pubg', name: '和平精英', icon: '🪖', desc: '地铁单局300w保底', price: '¥8.88/局', status: '接单中', statusClass: 'online' },
      { id: 'delta', name: '三角洲行动', icon: '🔫', desc: '单局300w保底', price: '¥8.88/局', status: '火爆', statusClass: 'hot' }
    ],
    showTechSupport: false  // 控制技术支持提示显示
  },
  onShow() {
    // 每次进入页面显示技术支持提示，3秒后消失
    this.setData({ showTechSupport: true });
    setTimeout(() => {
      this.setData({ showTechSupport: false });
    }, 3000);
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/game/detail/detail?gameId=${id}&gameName=${name}`
    });
  },
  onContact() {
    wx.showToast({
      title: '客服小姐姐正在连线~',
      icon: 'none',
    });
  },
  onBook() {
    wx.showToast({
      title: '预约功能即将开放',
      icon: 'none',
    });
  }
});