import React,{Component} from 'react'
import p1 from './images/p1.ico'
import {StyleSheet,css} from 'aphrodite'
import {tinRightIn} from 'react-magic'

const styles=StyleSheet.create({
	magic:{
		animationName:tinRightIn,
		animationDuration:"3s",
	}
})

 export default class Fixed extends Component {
	render(){
    return <div className={`topdiv ${css(styles.magic)}`}>     
      <img src={p1} alt="图片"/>
      <h1>生活本来就如此多娇</h1>
    </div>

	}
}
