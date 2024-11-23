import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoContainer: {
    marginLeft: 12,
    flex: 1,
    marginTop: -4
  },
  rightContent: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  acceptButton: {
    padding: 8,
    marginRight: 8,
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
  },
  rejectButton: {
    padding: 8,
    backgroundColor: '#FFEBEE',
    borderRadius: 20,
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginBottom: 4
  }
});