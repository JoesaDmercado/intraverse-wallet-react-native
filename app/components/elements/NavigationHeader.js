import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import images from './../../commons/images'
import AppStyle from '../../commons/AppStyle'

export default class NavigationHeader extends Component {
  static propTypes = {
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    headerItem: PropTypes.object,
    titleStyle: PropTypes.object,
    rightView: PropTypes.object,
    action: PropTypes.func
  }

  static defaultProps = {
    style: {},
    containerStyle: {},
    headerItem: {
      title: '',
      icon: null,
      button: images.backButton
    },
    rightView: {
      rightViewIcon: null,
      rightViewAction: () => { },
      rightViewTitle: null,
      styleTitle: {}
    },
    titleStyle: {},
    action: () => { }
  }

  render() {
    const {
      style,
      containerStyle,
      titleStyle,
      headerItem,
      rightView,
      action
    } = this.props
    const {
      title,
      icon,
      button
    } = headerItem
    const {
      rightViewIcon,
      rightViewAction = () => { },
      rightViewTitle,
      styleTitle
    } = rightView
    return (
      <View style={{}}>
        <TouchableOpacity
          style={containerStyle}
          onPress={() => { action() }}
        >
          <View style={[styles.container, style]}>
            <Image
              source={button}
            />
            {icon &&
              <Image
                style={{
                  width: 20,
                  height: 30,
                  marginLeft: 18
                }}
                source={icon}
              />
            }
            {title &&
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={[styles.titleStyle, { marginLeft: icon ? 10 : 20 }, titleStyle]}
              >
                {title}
              </Text>
            }
          </View>
        </TouchableOpacity>
        {rightViewIcon &&
          <TouchableWithoutFeedback
            onPress={rightViewAction}
          >
            <View
              style={styles.rightView}
            >
              <Image source={rightViewIcon} />
              {rightViewTitle &&
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={[styles.rightTitle, styleTitle]}>{rightViewTitle}</Text>
              }
            </View>
          </TouchableWithoutFeedback>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    width: '50%'
  },
  titleStyle: {
    fontSize: 20,
    color: AppStyle.mainTextColor,
    fontFamily: 'OpenSans-Bold'
  },
  rightView: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: '40%'
  },
  rightTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 18,
    color: AppStyle.mainColor,
    marginLeft: 4
  }
})
