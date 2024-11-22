import { StyleSheet } from 'react-native'

export const FaqStyles = StyleSheet.create({
  mainContainer: {
    height: '60%',
    flex: 1,
    position: 'relative',
  },
  groupContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  faqItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    marginLeft: 8,
  },
  answerContainer: {
    maxHeight: 200,
    overflow: 'hidden',
  },
  answerScrollView: {
    backgroundColor: '#D9D9D9',
  },
  answerText: {
    padding: 16,
    paddingTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'justify',
  },
  footer: {
    padding: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  email: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  faqScrollView: {
    flex: 1,
  },
  faqScrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
})
