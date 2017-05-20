import React ,{Component} from 'react'



  

class Card extends Component {
  constructor(props){
    super(props)
    this.state= {transit:false}
  }
  handleClose(e){
    e.preventDefault();
    this.setState({transit:true});
    this.timeout = setTimeout(()=>{
      this.setState({transit:false})
      this.props.closeFunction();
    }, 400);
  }
  render(){
    const activeClass = this.props.active ? "active" : "";
    const transitClass = this.state.transit ? "transit" : "";
      console.log(this.props.index)
      let one=''
      if(this.props.index==="1"){
          one=<Single />
      }else if(this.props.index==="2"){
      	one=<Singlee />
      }else{
         one=<Singleee />

      }
    return(
      <div className={`card ${activeClass} ${transitClass}`} style={{'left':this.props.left, 'top':this.props.top}}>
        <h2>{this.props.title}</h2>
        <a className="btn-close" onClick={this.handleClose.bind(this)}>Close</a>
        {one}
      </div>
    );
  }
}

class Single extends Component {
  
	render(){
     return  <div><div>
      <p><b>姓名：</b><span>冯雄</span></p>
      <p><b>性别：</b><span>男</span></p>
      <p><b>年龄：</b><span>25</span></p>
      <p><b>学历：</b><span>全日制大学本科</span></p>
      <p><b>基本技能：</b><span>掌握html,js,css,jquery,ajax</span></p>
      <p><b>图片处理：</b><span>firewords基本的切图与修改像素</span></p>
      <p><b>进阶技能：</b><span>熟悉react,react-router-rudex,sass,less,common.js,es6.js,es5.js</span></p>
      <p><b>服务器类：</b><span>了解node.js</span></p>
      <p><b>环境搭建:</b><span>webpack2，express的环境基本搭建</span></p>

   </div></div>


	}
}
class Singlee extends Component {
  
	render(){
    return  <div>aaa</div>


	}
}
class Singleee extends Component{

       render(){
         return  <div>
		<p><b>作品：</b><span><a href="https://github.com/wecandothis/my-profile/tree/master/profile">作品源代码github地址</a></span></p>
		<p><b>技术栈：</b><span>react+webpack</span></p>
		<p><b>图片来源：</b><span><a href="http://www.easyicon.net/iconsearch/Five%20corner%20row/">Five corner row</a></span></p>
        <p><b>字体来源：</b><span><a href="https://www.youziku.com/">有字库</a></span></p>
        <p><b>环境搭建：</b><span>github上的<a href="https://github.com/facebookincubator/create-react-app">create-react-app</a></span></p>
        <p><b>额外的话：</b><span>接触编程大半年了，这段时间都是利用空闲时间慢慢自学，因为没有系统的学习与大神的教导，网页效果与代码质量可能没有那么专业，希望能够理解，希望在以后的日子能够得到较专业的学习提议提高</span></p>

        

		</div>

       }
 



}


export default Card