Page({
  data: {
    games: [
      { id: 'pubg', name: '和平精英', icon: '🪖', desc: '地铁单局300w', price: '¥8.88/局', status: '接单中', statusClass: 'online' },
      { id: 'delta', name: '三角洲行动', icon: '🔫', desc: '300w保底', price: '¥8.88/局', status: '火爆', statusClass: 'hot' }
    ]
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/game/detail/detail?gameId=${id}` });
  }
});