export default new (class DriverProfileService {
  getMenuItems() {
    return [
      {
        id: '1',
        icon: 'people',
        title: 'Criar grupo de carona',
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
      {
        id: '5',
        icon: 'exit-outline',
        title: 'Sair'
      }
    ]
  }
})()
