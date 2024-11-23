export default new (class ProfileService {
  getMenuItems() {
    return [
      {
        id: '1',
        icon: 'people',
        title: 'Quero ser motorista',
      },
      {
        id: '2',
        icon: 'car',
        title: 'Corridas',
      },
      {
        id: '3',
        icon: 'person',
        title: 'Minhas informações',
      },
      {
        id: '4',
        icon: 'help-circle',
        title: 'FAQ',
      },
    ]
  }
})()
