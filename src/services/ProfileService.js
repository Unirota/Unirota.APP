export default new (class ProfileService {
  getMenuItems() {
    return [
      {
        id: '1',
        icon: 'people',
        title: 'Criar grupo de carona',
        imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
      },
      {
        id: '2',
        icon: 'car',
        title: 'Corridas',
        imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
      },
      {
        id: '3',
        icon: 'person',
        title: 'Minhas informações',
        imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
      },
      //   {
      //     id: '4',
      //     icon: 'settings',
      //     title: 'Configurações',
      //     imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
      //   },
      {
        id: '5',
        icon: 'help-circle',
        title: 'FAQ',
        imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
      },
    ]
  }
})()
