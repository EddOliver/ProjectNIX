import React, { Component } from "react";
import './index.css';
import {isMobile} from "react-device-detect";
import List from "./assets/list.jpg"
import IoT from "./assets/iot.jpg"
import MyNavBar from "./components/navbar"

import Emoji from "react-emoji-render";

import {
  Button,
  CardText,
  CardTitle,
  CardBody,
  Card,
  CardImg,
  CardImgOverlay,
  CardGroup
} from "reactstrap";

var iphone;

if(window.innerWidth < 322){
  iphone=["exampleiphone1","exampleiphone7"]
}
else{
  iphone=["example1","example7"]
}

console.log(window.innerWidth)

const recs=[
  "Go for ",
  " foods as much as possible  🥗",
  "Never eat large meals close to bedtime  😴",
  "If you have to have a little something closer to bedtime, avoid sugars and processed grains  🍞",
]

const forever=
[
  "Don't forget to do 30 minutes of exercise!  🏃‍♀️",
  "Don't eat a lot of high sugar meals  🥦"
]

const recsiot=[
  "Set the lights before and after bed  💡",
  "Set music before and after bed  🎧",
  "Turn ON mask  💤"
]

var now = new Date();
var day = now.getDay();

class Reco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light:0,
      music:0,
      mask:0,
      acts1:"Activate",
      acts2:"Activate",
      acts3:"Activate"
    };
  }

  myControl(ligt,mus,mas){
    let _this = this
    var req;
    var unirest = require('unirest');
    req = unirest('GET', 'https://ob55kpie5f.execute-api.us-east-1.amazonaws.com/postMenopause')
    .headers({
    'control': ligt.toString()+","+mus.toString()+","+mas.toString()
    })
    .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    if(ligt){
      _this.setState({
        acts1:"Deactivate"
      })
    }
    else{
      _this.setState({
        acts1:"Activate"
      })
    }
    if(mus){
      _this.setState({
        acts2:"Deactivate"
      })
    }
    else{
      _this.setState({
        acts2:"Activate"
      })
    }
    if(mas){
      _this.setState({
        acts3:"Deactivate"
      })
    }
    else{
      _this.setState({
        acts3:"Activate"
      })
    }
  });
  }

  control1(){
    var mylig;
    if(this.state.light===0)
    {
      mylig=1
      this.setState({
        light:1
      })
    }
    else{
      mylig=0
      this.setState({
        light:0
      })
    }
    this.myControl(mylig,this.state.music,this.state.mask)
  }
  control2(){
    var mylig;
    if(this.state.music===0)
    {
      mylig=1
      this.setState({
        music:1
      })
    }
    else{
      mylig=0
      this.setState({
        music:0
      })
    }
    this.myControl(this.state.light,mylig,this.state.mask)
  }
  control3(){
    var mylig;
    if(this.state.mask===0)
    {
      mylig=1
      this.setState({
       mask:1
      })
    }
    else{
      mylig=0
      this.setState({
        mask:0
      })
    }
    this.myControl(this.state.light,this.state.music,mylig)
  }

  componentWillMount(){
    var _this=this
    var req;
    var unirest = require('unirest');
    req = unirest('GET', 'https://menopause-hackster.s3.amazonaws.com/control.json')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    var myarray=res.raw_body.replace('"',"").replace('"',"").split(",")
    _this.setState({
      light:parseInt(myarray[0]),
      music:parseInt(myarray[1]),
      mask:parseInt(myarray[2])
    });
    if(_this.state.light===1)
    {
      _this.setState({
        light:1,
        acts1:"Deactivate"
      })
    }
    else{
      _this.setState({
        light:0,
        acts1:"Activate"
      })
    }
    if(_this.state.music===1)
    {
      _this.setState({
        music:1,
        acts2:"Deactivate"
      })
    }
    else{
      _this.setState({
        music:0,
        acts2:"Activate"
      })
    }
    if(_this.state.mask===1)
    {
      _this.setState({
       mask:1,
       acts3:"Deactivate"
      })
    }
    else{
      _this.setState({
        mask:0,
        acts3:"Activate"
      })
    }
  });


  }

  componentDidMount(){

  }

  render() {

    if(isMobile){
      return (
        <div id="group">
          <MyNavBar />
          <CardGroup>
            <Card id={iphone[1]} inverse color="dark">
              <CardImg id={iphone[0]} src={List} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle id="example10" >&nbsp;<p />Physical Recommendations</CardTitle>
                  <CardBody>
                  <CardText id="example9">
                      <Emoji text={recs[0]} />
                      <a style={{color:"lime",textDecoration: "underline overline"}} target="_blank" href="https://www.health.harvard.edu/blog/menopause-and-insomnia-could-a-low-gi-diet-help-2020011718710"> 
                      low-GI
                      </a>
                      <Emoji text={recs[1]} />
                    </CardText>
                    <CardText id="example9"><Emoji text={recs[2]} /></CardText>
                    <CardText id="example9"><Emoji text={recs[3]} /></CardText>
                    <CardText id="example9"><Emoji text={forever[0]} /></CardText>
                    <CardText id="example9"><Emoji text={forever[1]} /></CardText>
                  </CardBody>
                </CardImgOverlay>
            </Card>
            <Card id={iphone[1]} inverse color="dark">
              <CardImg id={iphone[0]} src={IoT} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle id="example10">&nbsp;<p />Automation Recommendations </CardTitle>
                  <CardBody>
                  <CardText id="example9"><Emoji text={recsiot[0]} /></CardText>
                    <Button id="example9" onClick={() => this.control1()} color="info">
                      {this.state.acts1}
                    </Button>
                    <CardText id="example9"><Emoji text={recsiot[1]} /></CardText>
                    <Button  id="example9" onClick={() => this.control2()} color="info">
                    {this.state.acts2}
                    </Button>
                    <CardText id="example9"><Emoji text={recsiot[2]} /></CardText>
                    <Button  id="example9" onClick={() => this.control3()} color="info">
                    {this.state.acts3}
                    </Button>
                  </CardBody>
                </CardImgOverlay>
            </Card>
          </CardGroup>
      </div>
        )
    }
    else{
      return (
        <div id="group">
          <MyNavBar />
          <CardGroup>
            <Card id="example7" inverse color="dark">
              <CardImg id="example1" src={List} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle >&nbsp;<p />Physical Recommendations <p />&nbsp;<p /></CardTitle>
                  <CardBody>
                    <CardText >
                      <Emoji text={recs[0]} />
                      <a style={{color:"lime",textDecoration: "underline overline"}} target="_blank" href="https://www.health.harvard.edu/blog/menopause-and-insomnia-could-a-low-gi-diet-help-2020011718710"> 
                      low-GI
                      </a>
                      <Emoji text={recs[1]} />
                    </CardText>
                    <CardText ><Emoji text={recs[2]} /></CardText>
                    <CardText ><Emoji text={recs[3]} /></CardText>
                    <CardText ><Emoji text={forever[0]} /></CardText>
                    <CardText ><Emoji text={forever[1]} /></CardText>
                  </CardBody>
                </CardImgOverlay>
            </Card>
            <Card id="example7" inverse color="dark">
              <CardImg id="example1" src={IoT} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle >&nbsp;<p />Automation Recommendations <p /> &nbsp;<p /></CardTitle>
                  <CardBody>
                    <CardText ><Emoji text={recsiot[0]} /></CardText>
                    <Button id="example8" onClick={() => this.control1()} color="info">
                      {this.state.acts1}
                    </Button>
                    <CardText ><Emoji text={recsiot[1]} /></CardText>
                    <Button  id="example8" onClick={() => this.control2()} color="info">
                    {this.state.acts2}
                    </Button>
                    <CardText ><Emoji text={recsiot[2]} /></CardText>
                    <Button  id="example8" onClick={() => this.control3()} color="info">
                    {this.state.acts3}
                    </Button>
                  </CardBody>
                </CardImgOverlay>
            </Card>
          </CardGroup>
      </div>
        )
    }
    
    }
  
}

export default Reco;