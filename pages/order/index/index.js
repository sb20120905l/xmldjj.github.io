Page({
  data: {
    orders: [
      { id: 1, gameName: '和平精英', coach: '黑鱼电竞-海葵', amount: '8.88', status: '已完成', time: '2025-03-01 20:30' },
      { id: 2, gameName: '三角洲行动', coach: '黑鱼电竞-sj', amount: '¥100', status: '进行中', time: '2025-03-02 15:00' }
    ]
  },
  contactCoach() {
    wx.showToast({ title: '正在联系教练...', icon: 'none' });
  }
});