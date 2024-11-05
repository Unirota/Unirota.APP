export default new (class SearchGroupService {
  groups = [
    {
      name: 'Grupo Alpha',
      institution: 'UniCesumar',
      rating: 4.9,
      time: '07:30',
      onInfoPress: () => console.log('Info pressed for Grupo Alpha')
    },
    {
      name: 'Grupo Beta',
      institution: 'UEM',
      rating: 3.5,
      time: '09:30',
      onInfoPress: () => console.log('Info pressed for Grupo Beta')
    },
    {
      name: 'Grupo Charlie',
      institution: 'UniCV',
      rating: 1.5,
      time: '20:30',
      onInfoPress: () => console.log('Info pressed for Grupo Charlie')
    },
    {
      name: 'Grupo Delta',
      institution: 'Uningá',
      rating: 5.0,
      time: '12:30',
      onInfoPress: () => console.log('Info pressed for Grupo Delta')
    },
    {
      name: 'Grupo Echo',
      institution: 'Feitep',
      rating: 3,
      time: '16:25',
      onInfoPress: () => console.log('Info pressed for Grupo Echo')
    }
  ];

  getGroups(filters = {}) {
    if (!filters || Object.keys(filters).length === 0) {
      return this.groups;
    }

    return this.groups.filter(group => {
      const { startTime, destination, rating } = filters;
      
      if (startTime) {
        const filterTimeMinutes = this.convertToMinutes(startTime);
        const groupTimeMinutes = this.convertToMinutes(group.time);
        
        if (groupTimeMinutes < filterTimeMinutes) {
          return false;
        }
      }

      if (destination && group.institution !== destination) return false;

      if (rating && group.rating < rating) return false;

      return true;
    });
  }

  convertToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }
})();