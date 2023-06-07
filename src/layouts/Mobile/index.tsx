import React, { Component } from 'react'

import StatusBar from '../../components/StatusBar'
import SwiperApp from '../../components/SwiperApp'
import BottomBar from '../../components/BottomBar'
import ActionSheet from '../../components/ActionSheet'
import './index.scss'

export default class Mobile extends Component {
  render() {
    return (
      <>
        <div id="mobile">
          <StatusBar />
          <SwiperApp />
          <BottomBar />
          <ActionSheet />
        </div>
      </>
    )
  }
}