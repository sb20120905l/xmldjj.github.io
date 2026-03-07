Page({
  data: {
    menus: [
      { icon: '📦', name: '我的订单', url: '/pages/order/index/index' },
      { icon: '👤', name: '个人信息', url: '' },
      { icon: '⚙️', name: '设置', url: '' },
      { icon: '💬', name: '联系客服', url: '' }
    ]
  },
  gotoPage(e) {
    const url = e.currentTarget.dataset.url;
    if (!url) {
      wx.showToast({ title: '功能开发中', icon: 'none' });
      return;
    }
    const tabBarPages = ['/pages/order/index/index', '/pages/index/index', '/pages/game/list/list', '/pages/user/index/index'];
    if (tabBarPages.includes(url)) {
      wx.switchTab({ url });
    } else {
      wx.navigateTo({ url });
    }
  }
});