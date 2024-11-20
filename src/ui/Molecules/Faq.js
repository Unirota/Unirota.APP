import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native'
import { FaqStyles } from '../../styles/Molecules/FaqStyles'
import { FaqData } from '../../services/FaqService'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export default class FAQComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openItem: null,
    }
  }

  toggleAccordion = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState(prevState => ({
      openItem: prevState.openItem === id ? null : id,
    }))
  }

  renderFaqItem = ({ item }) => {
    const { openItem } = this.state
    const isOpen = openItem === item.id

    return (
      <View key={item.id} style={FaqStyles.faqItem}>
        <TouchableOpacity
          style={FaqStyles.questionContainer}
          onPress={() => this.toggleAccordion(item.id)}
        >
          <Text style={FaqStyles.questionText}>{item.question}</Text>
          <Text style={FaqStyles.arrow}>{isOpen ? '↑' : '↓'}</Text>
        </TouchableOpacity>

        {isOpen && (
          <View style={FaqStyles.answerContainer}>
            <ScrollView
              style={FaqStyles.answerScrollView}
              nestedScrollEnabled={true}
            >
              <Text style={FaqStyles.answerText}>{item.answer}</Text>
            </ScrollView>
          </View>
        )}
      </View>
    )
  }

  renderFooter = () => {
    return (
      <View style={FaqStyles.footer}>
        <Text style={FaqStyles.footerText}>
          Para mais dúvidas, entre em contato:
        </Text>
        <Text style={FaqStyles.email}>suporte@unirota.com</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={FaqStyles.mainContainer}>
        <FlatList
          data={FaqData}
          renderItem={this.renderFaqItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={FaqStyles.faqContainer}
          style={{ flex: 1 }}
          nestedScrollEnabled={true}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    )
  }
}
