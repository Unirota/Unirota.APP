export default new (class RequestService {
    groups = [
      {
        id: 1,
        nome: 'Grupo da Folha',
        destino: 'UniCesumar',
        nota: 4.5,
        horaInicio: '07:30',
        onAccept: () => console.log('Convite aceito'),
        onReject: () => console.log('Convite rejeitado')
      },
      {
        id: 2,
        nome: 'Grupo Alpha',
        destino: 'UEM',
        nota: 4,
        horaInicio: '08:30',
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