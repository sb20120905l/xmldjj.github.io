Page({
  data: {
    gameId: '',
    gameInfo: {},
    priceOptions: [],
    coaches: [],
    selectedPrice: null
  },
  onLoad(options) {
    const gameId = options.gameId || 'pubg';
    this.setData({ gameId });
    this.loadGameData(gameId);
  },
  loadGameData(id) {
    const gamesData = {
      pubg: {
        name: '和平精英',
        icon: '🪖',
        desc: '顶级护航',
        priceOptions: [
          { label: '300w', price: '¥8.88' },
          { label: '500w', price: '¥9.99' },
          { label: '1000w', price: '¥29.99' }
        ],
        coaches: [
          { id: 1, name: '黑鱼电竞-树叶', avatarEmoji: '🦅', stats: 'KD 8.5 · 100%胜率' },
          { id: 2, name: '黑鱼电竞-海葵', avatarEmoji: '🔥', stats: '王牌30星' }
        ]
      },
      delta: {
        name: '三角洲行动',
        icon: '🔫',
        desc: '顶级护航',
        priceOptions: [
          { label: '300w', price: '¥8.88' },
          { label: '500w', price: '¥16.99' },
          { label: '800w', price: '¥42.99' }
        ],
        coaches: [
          { id: 3, name: '黑鱼电竞-sj', avatarEmoji: '🎯', stats: '大肘子' }
        ]
      }
    };
    const data = gamesData[id] || gamesData.pubg;
    this.setData({
      gameInfo: data,
      priceOptions: data.priceOptions,
      coaches: data.coaches
    });
  },
  selectPrice(e) {
    const selected = e.currentTarget.dataset.price;
    this.setData({ selectedPrice: selected });
    wx.showToast({ title: `已选 ${selected.label} ${selected.price}`, icon: 'none' });
  },
  placeOrder() {
    if (!this.data.selectedPrice) {
      wx.showToast({ title: '请先选择价格', icon: 'none' });
      return;
    }
    wx.showModal({
      title: '确认下单',
      content: `游戏：${this.data.gameInfo.name}\n价格：${this.data.selectedPrice.label} ${this.data.selectedPrice.price}`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '下单成功', icon: 'success' });
          wx.switchTab({ url: '/pages/order/index/index' });
        }
      }
    });
  }
});