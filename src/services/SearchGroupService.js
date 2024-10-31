export default new (class SearchGroupService {
    getGroups() {
      return [
        {
          name: 'Grupo Alpha',
          institution: 'Unicesumar',
          rating: 4.9,
          time: '7:30',
          onInfoPress: () => console.log('Info pressed for Grupo Alpha')
        },
        {
          name: 'Grupo Beta',
          institution: 'UEM',
          rating: 3.5,
          time: '9:30',
          onInfoPress: () => console.log('Info pressed for Grupo Beta')
        }
      ]
    }
  })()