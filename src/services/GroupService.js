export default new (class GroupService {
    getMenuItems() {
      return [
        {
          id: '1',
          icon: 'group',
          title: 'Grupo Alpha',
          imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
        },
        {
          id: '2',
          icon: 'time',
          title: '7:30',
          imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
        },
        {
          id: '3',
          icon: 'location',
          title: 'Unicesumar',
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
          icon: 'info',
          title: 'INFORMAÇÕES',
          imageUrl: require('../../assets/images/unicesumarImage.jpeg'),
        },
      ]
    }
  })()