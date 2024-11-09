import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, ScrollView } from 'react-native';
import { FaqStyles } from '../../styles/Molecules/FaqStyles';
import { FaqData } from '../../services/FaqService';

export default class FAQComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openItem: null,
      animation: new Animated.Value(0),
    };
  }

  toggleAccordion = (id) => {
    const { openItem, animation } = this.state;
    
    if (openItem === id) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: false,
      }).start(() => {
        this.setState({ openItem: null });
      });
      return;
    }
  
    if (openItem !== null) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: false,
      }).start(() => {
        this.setState({ openItem: id }, () => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false,
          }).start();
        });
      });
    } else {
      this.setState({ openItem: id });
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  };

  renderFaqItem = ({ id, question, answer }) => {
    const { openItem, animation } = this.state;

    const bodyHeight = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });

    return (
      <View key={id} style={FaqStyles.faqItem}>
        <TouchableOpacity
          style={FaqStyles.questionContainer}
          onPress={() => this.toggleAccordion(id)}
        >
          <Text style={FaqStyles.questionText}>{question}</Text>
          <Text style={FaqStyles.arrow}>{openItem === id ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        
        {openItem === id && (
          <Animated.View 
            style={[
              FaqStyles.answerContainer, 
              { 
                height: bodyHeight,
                overflow: 'hidden'
              }
            ]}
          >
            <ScrollView 
              contentContainerStyle={FaqStyles.scrollViewContent}
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
            >
              <Text style={FaqStyles.answerText}>{answer}</Text>
            </ScrollView>
          </Animated.View>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={FaqStyles.mainContainer}>
        <View style={FaqStyles.faqContainer}>
          {FaqData.map(this.renderFaqItem)}
        </View>
        <View style={FaqStyles.footer}>
          <Text style={FaqStyles.footerText}>
            Para mais dúvidas, entre em contato:
          </Text>
          <Text style={FaqStyles.email}>unirota@email.com</Text>
        </View>
      </View>
    );
  }
}
