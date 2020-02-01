import React , {Component}from 'react';
import ToolStaff from './components/nav/toolbar/Toolbar';
import Foot from './components/footer/Foot';
import SliderCont from './components/slider/Slidercont';
import Card from './components/cards/Card';
import './App.css';
class App extends React.Component{
  data = [
    {
      src : "featurs/f1.jpg",
      pg : "first react task"
    },
    {
      src : "featurs/f2.jpg",
      pg : "our team"
    },
    {
      src : "featurs/f3.jpg",
      pg : "A r2yk ya hooba :)"
    }
  ];
  state = {
    defIdx : 0
  }
  fix = (idx) => {
    return((idx + this.data.length) % this.data.length);
  }
  onNxt = () => {
    let x = this.state.defIdx;
    x += 1;
    x = this.fix(x);
    console.log(x);
   return (
     this.setState({defIdx : x})
   ) 
  }
  onPrv = () => {
    let x = this.state.defIdx;
    x -= 1;
    x = this.fix(x);
    console.log(x);
   return (
     this.setState({defIdx : x})
   ) 
  }
  change = () => {
    let x = this.state.defIdx;
    x++;
    x = this.fix(x);
    this.setState({defIdx : x})
    return (
      setTimeout(()=>(
        this.change()
      ) , 10000)
    )
  }
  cards = [
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    },
    {
      hdLines : "this the first react task",
      subScript : "full stack dev"
    }
  ]
  render() {
    window.onload = this.change;
    return (
      <div style = {{height : "100%" }} className="App">
          <ToolStaff/>
          <SliderCont src = {this.data[this.state.defIdx].src} 
          pg = {this.data[this.state.defIdx].pg} 
          onnxt = {this.onNxt} 
          onprv = {this.onPrv}/>

          <div className = "cards-content">
            {this.cards.map((item , i) => {
              return (
                <Card key = {i} {...item}/>
              )
            })}
          </div>

          <Foot/>
      </div>
    );
  }
}

export default App;
