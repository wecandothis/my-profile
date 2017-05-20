import React, { Component } from 'react';
import './css/App.css';
import Fixed from './title'
import Card from './card'

//引用图片的基本信息
var items=require('./data.json')
   


class Gallery extends Component{
  constructor(props){
    super(props);
    this.items = items;
    this.defaultCardPos = {top:'-200%', left:0}
    this.state={activeItem: false,information:false, cardTop:this.defaultCardPos.top, cardLeft:this.defaultCardPos.left, cardActive:false}
  }
  //单一点击后获取数据
  handleItemClick(name, item,key){
    this.setState({activeItem: name,information:key})
    let oTop = item.offsetTop,
        oLeft = item.offsetLeft;
    this.setState({cardTop:oTop, cardLeft:oLeft});
    this.cardTimeout = setTimeout(()=>{
      this.setState({cardActive: true});
    }, 100)
  }
  getBackgroundImage(itemName){
    let imageItem = this.items.reduce((ov, nv)=>{
      return nv.name === itemName ? nv : ov;
    });
    return imageItem.image;
  }
  handleCardClick(){
    if(!this.state.activeItem) return false;
    this.setState({cardActive: false, activeItem:false, cardTop:this.defaultCardPos.top, cardLeft:this.defaultCardPos.left});
  }
  renderGallery(){
    return this.items.map( item=>{
      const activeClass = this.state.cardActive ? 'active' : '';//this.state.activeItem == item.name ? 'active' : '';
      return <GalleryItem name={item.name} key={item.index} information={item.index} background={item.image} active={activeClass} clickFunction={this.handleItemClick.bind(this)}>
        <h2>{item.name}</h2>
        <div className="item-mask" />
      </GalleryItem>
    });
  }
  render(){
    const maskActive = '';//this.state.activeItem ? "active" : "";
    const galleryBackground = this.state.activeItem ? this.getBackgroundImage(this.state.activeItem) : '';
    return (<div className="containdiv">
    <Fixed />
    <div className="gallery"> 
      {this.renderGallery()}
      <Card title={this.state.activeItem} index={this.state.information} ref="card" top={this.state.cardTop} left={this.state.cardLeft} active={this.state.cardActive} closeFunction={this.handleCardClick.bind(this)} />
      <div className={`gallery-mask ${maskActive}`} />
      <div className={`backdrop ${this.state.activeItem ? 'active' : ''}`} style={{'backgroundImage': `url(${galleryBackground})`}} onClick={this.handleCardClick.bind(this)}/>
    </div></div>)
  }
}

class GalleryItem extends Component{
  constructor(props){
    super(props);
    console.log(this.props.background)
  }
  handleClick(e){
    e.preventDefault();
    this.props.clickFunction(this.props.name, this.refs.el,this.props.information)
  }
  render(){
    const style ={'backgroundImage': `url(${this.props.background})`};
    return <div ref="el" className={`gallery-item ${this.props.active}`} style={style} onClick={this.handleClick.bind(this)}>{this.props.children}</div>
  }
}





export default Gallery;
