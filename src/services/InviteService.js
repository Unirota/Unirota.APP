export default new (class InviteService {
  groups = [
    {
      id: 1,
      nome: 'Grupo da Manhã',
      destino: 'UniCesumar',
      nota: 4.5,
      horaInicio: '07:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    {
      id: 2,
      nome: 'Grupo da Tarde',
      destino: 'UEM',
      nota: 4,
      horaInicio: '08:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    {
      id: 3,
      nome: 'Grupo da Noite',
      destino: 'UNIFEI',
      nota: 4.2,
      horaInicio: '09:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    {
      id: 4,
      nome: 'Grupo do Verstappen',
      destino: 'F1 Winner',
      nota: 5,
      horaInicio: '00:30',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    {
      id: 5,
      nome: 'Grupo do Dando Mollis',
      destino: 'F1 Looser',
      nota: 1,
      horaInicio: '12:49',
      onAccept: () => console.log('Convite aceito'),
      onReject: () => console.log('Convite rejeitado')
    },
    
  ];

  getGroups(filters = {}) {
    if (!filters || Object.keys(filters).length === 0) {
      return this.groups;
    }

    return this.groups.filter(group => {
      const { startTime, destination } = filters;
      
      if (startTime) {
        const filterTimeMinutes = this.convertToMinutes(startTime);
        const groupTimeMinutes = this.convertToMinutes(group.time);
        
        if (groupTimeMinutes < filterTimeMinutes) {
          return false;
        }
      }

      if (destination && group.institution !== destination) return false;

      return true;
    });
  }

  convertToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }
})();