import { StyleSheet } from 'react-native';

export const FaqStyles = StyleSheet.create({
  faqContainer: {
    flex: 1,
    paddingHorizontal: 16,

  },
  faqItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  arrow: {
    fontSize: 18,
    marginLeft: 8,
  },
  answerContainer: {
    overflow: 'hidden',
  },
  answerText: {
    padding: 16,
    paddingTop: 0,
    fontSize: 14,
    color: '#666',
    backgroundColor: '#D9D9D9'
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
  },
  email: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 4,
  },
});