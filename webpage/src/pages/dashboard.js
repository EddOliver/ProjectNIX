import React, { Component } from "react";
import './index.css';
import Heart from "./assets/heart.gif"
import Lux from "./assets/lux.gif"
import Hum from "./assets/hum.gif"
import Temp from "./assets/temp.gif"
import Run from "./assets/run.gif"
import Sleep from "./assets/sleep.gif"
import MyNavBar from "./components/navbar"

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardGroup,
  CardBody,
  CardTitle, 
  CardText,
  Progress
} from "reactstrap";

var iphone=""

if(window.innerWidth < 322){
  iphone=["exampleiphone1","exampleiphone3","exampleiphone4"]
}
else{
  iphone=["example1","example3","example4"]
}


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hr: 75,
      hum:60,
      temp:27,
      lux:500,
      hours:8,
      minutes:0,
      hourscolor:"primary",
      humcolor:"primary",
      tempcolor:"primary",
      luxcolor:"primary",
      sleep:0,
      sleepcolor:"primary",
      fadedisplay:false,
      rec1:"",
      rec2:"",
      step:100,
      mete:200
    };
  }
  refreshData()
  {
    var req;
    let _this=this
    var unirest = require('unirest');
    req = unirest('GET', 'https://menopause-hackster.s3.amazonaws.com/data.json')
    .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    const input=JSON.parse(res.raw_body)
    _this.setState({
      hr:input["hr"],
      hum:input["hum"],
      temp:input["temp"],
      lux:input["lux"],
      step:input["step"],
      mete:input["meter"]
    })
    if(input["lux"]<400)
    {
      _this.setState({
        luxcolor:"info",
      })
    }
    else if(input["lux"]<600)
    {
      _this.setState({
        luxcolor:"success",
      })
    }
    else if(input["lux"]<800)
    {
      _this.setState({
        luxcolor:"warning",
      })
    }
    else if(input["lux"]<1024)
    {
      _this.setState({
        luxcolor:"danger",
      })
    }
    if(input["temp"]<14)
    {
      _this.setState({
        tempcolor:"info",
      })
    }
    else if(input["temp"]<30)
    {
      _this.setState({
        tempcolor:"success",
      })
    }
    else if(input["temp"]<40)
    {
      _this.setState({
        tempcolor:"warning",
      })
    }
    else if(input["temp"]<50)
    {
      _this.setState({
        tempcolor:"danger",
      })
    }
    if(input["hum"]<40)
    {
      _this.setState({
        humcolor:"info",
      })
    }
    else if(input["hum"]<60)
    {
      _this.setState({
        humcolor:"success",
      })
    }
    else if(input["hum"]<80)
    {
      _this.setState({
        humcolor:"warning",
      })
    }
    else if(input["hum"]<100)
    {
      _this.setState({
        humcolor:"danger",
      })
    }
  });
  }

  componentWillMount(){

    let _this=this;
    var reqq;
    var unirestt = require('unirest');
    reqq = unirestt('GET', 'https://menopause-hackster.s3.amazonaws.com/sleep_datas.json')
      .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        var my_array = res.raw_body.replace("[", "").replace("]", "").split(",");
        var number = parseFloat(my_array[1].replace("'", "").replace("'", ""))
        var hour = Math.round(number)
        var minute = (Math.round((number + Number.EPSILON) * 100) / 100)-hour
        console.log(minute)
        minute = Math.round(60*minute)
        _this.setState({
          hours:hour,
          minutes:minute
        })
        var quality = parseFloat(my_array[0].replace("'", "").replace("'", ""))

        if(quality===0)
        {
          _this.setState({
            sleep:3,
            sleepcolor:"success",
            rec1:"Your sleep is efficient"
          })
        }
        else if(quality===1)
        {
          _this.setState({
            sleep:2,
            sleepcolor:"warning",
            rec1:"Don't eat anything at least 2 hours before sleeping"
          })
        }
        else if(quality===2)
        {
          _this.setState({
            sleep:1,
            sleepcolor:"danger",
            rec1:"Relax before sleeping today"
          })
        }
        if(hour<2)
        {
          _this.setState({
            hourscolor:"dark",
            rec2:"Sleep at least 6 hours today, URGENT"
          })
        }
        else if(hour<4)
        {
          _this.setState({
            hourscolor:"danger",
            rec2:"Sleep at least 6 hours today"
          })
        }
        else if(hour<6)
        {
          _this.setState({
            hourscolor:"warning",
            rec2:"You should sleep a little bit more today"
          })
        }
        else if(hour<8)
        {
          _this.setState({
            hourscolor:"success",
            rec2:"Keep sleeping like today"
          })
        }
        else if(hour<10)
        {
          _this.setState({
            hourscolor:"success",
            rec2:"Keep sleeping like today"
          })
        }
        else if(hour<12)
        {
          _this.setState({
            hourscolor:"warning",
            rec2:"You should sleep a little less today"
          })
        }  
      });

    var unirest = require('unirest');
    var req = unirest('GET', 'https://menopause-hackster.s3.amazonaws.com/data.json')
    .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    const input=JSON.parse(res.raw_body)
    _this.setState({
      hr:input["hr"],
      hum:input["hum"],
      temp:input["temp"],
      lux:input["lux"],
      step:input["step"],
      mete:input["meter"]
    })

    if(input["step"]<2000)
    {
      _this.setState({
        stepcolor:"danger",
      })
    }
    else if(input["step"]<4000)
    {
      _this.setState({
        stepcolor:"warning",
      })
    }
    else if(input["step"]<6000)
    {
      _this.setState({
        stepcolor:"info",
      })
    }
    else if(input["step"]<8000)
    {
      _this.setState({
        stepcolor:"success",
      })
    }

    if(input["lux"]<400)
    {
      _this.setState({
        luxcolor:"info",
      })
    }
    else if(input["lux"]<600)
    {
      _this.setState({
        luxcolor:"success",
      })
    }
    else if(input["lux"]<800)
    {
      _this.setState({
        luxcolor:"warning",
      })
    }
    else if(input["lux"]<1024)
    {
      _this.setState({
        luxcolor:"danger",
      })
    }
    if(input["temp"]<14)
    {
      _this.setState({
        tempcolor:"info",
      })
    }
    else if(input["temp"]<30)
    {
      _this.setState({
        tempcolor:"success",
      })
    }
    else if(input["temp"]<40)
    {
      _this.setState({
        tempcolor:"warning",
      })
    }
    else if(input["temp"]<50)
    {
      _this.setState({
        tempcolor:"danger",
      })
    }
    if(input["hum"]<40)
    {
      _this.setState({
        humcolor:"info",
      })
    }
    else if(input["hum"]<60)
    {
      _this.setState({
        humcolor:"success",
      })
    }
    else if(input["hum"]<80)
    {
      _this.setState({
        humcolor:"warning",
      })
    }
    else if(input["hum"]<100)
    {
      _this.setState({
        humcolor:"danger",
      })
    }

  });
  }

  componentDidMount(){
    let counter;
    counter = setInterval(() => this.refreshData() , 1000)

  }

  toggle(){
    console.log("Hello")
    this.setState({
      fadedisplay:!this.state.fadedisplay
    })
  }

  render() {
    return (
      <div id="group">
        <MyNavBar />
        <CardGroup>
       <Card id={iphone[1]} inverse color="dark">
     <CardImg id={iphone[0]} src={Heart} alt="Card image cap" />
      <CardImgOverlay>
      <CardTitle >&nbsp;<p />Heart Rate</CardTitle>
        <CardBody>
          <CardText >{this.state.hr} BPM</CardText>
        </CardBody>
        </CardImgOverlay>
      </Card>
        <Card id={iphone[1]} inverse color="dark">
     <CardImg id={iphone[0]} height="100%" src={Lux} alt="Card image cap" />
      <CardImgOverlay>
      <div style={{padding:"10%"}}>
      <CardTitle >Luminosity</CardTitle>
      <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.luxcolor} max="1024" value={this.state.lux} />
      </Card>
        <CardBody>
          <CardText >{this.state.lux} Lux </CardText>
        </CardBody>
        </div>
        </CardImgOverlay>
      </Card>
         <Card id={iphone[1]} inverse color="dark">
     <CardImg id={iphone[0]} height="100%" src={Hum} alt="Card image cap" />
      <CardImgOverlay>
      <div style={{padding:"10%"}}>
      <CardTitle >Humidity</CardTitle>
      <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.humcolor} value={this.state.hum} />
      </Card>
        <CardBody>
          <CardText >{this.state.hum} %</CardText>
        </CardBody>
        </div>
        </CardImgOverlay>
      </Card>
         <Card id={iphone[1]} inverse color="dark">
     <CardImg id={iphone[0]} height="100%" src={Temp} alt="Card image cap" />
      <CardImgOverlay>
      <div style={{padding:"10%"}}>
      <CardTitle  >Temperature</CardTitle>
      <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.tempcolor} max="50" value={this.state.temp} />
      </Card>
        <CardBody>
          <CardText >°{this.state.temp}</CardText>
        </CardBody>
        </div>
        </CardImgOverlay>
      </Card>
    </CardGroup>
    <CardGroup>
    <Card id={iphone[2]} inverse color="dark">
      <CardImg id="example2" height="100%" src={Run} alt="Card image cap" />
      <CardImgOverlay>
      <div style={{padding:"10%"}}>
      <CardTitle > Physical Activity</CardTitle>
      <Card style={{padding:"1%"}} inverse color="dark" >
    <CardTitle >Total Steps: {this.state.step}/8000</CardTitle>
    <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.stepcolor} max="8000" value={this.state.step} />
      </Card>
      <p />
      <CardTitle >Total distance: </CardTitle>
      {this.state.mete} meters
      <p />
      </Card>
      </div>
      </CardImgOverlay>
      </Card>
       <Card id={iphone[2]} inverse color="dark">
      <CardImg id="example2" height="100%" src={Sleep} alt="Card image cap" />
      <CardImgOverlay>
      <div style={{padding:"10%"}}>
      <CardTitle >Sleep Quality</CardTitle>
      <Card style={{padding:"1%"}} inverse color="dark" >
    <CardTitle >Total: {this.state.hours} hours and {this.state.minutes} minutes</CardTitle>
    <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.hourscolor} max="12" value={this.state.hours} />
      </Card>
      <CardTitle >Quality</CardTitle>
      <Card style={{padding:"1%"}} inverse color="ligth" >
      <Progress animated color={this.state.sleepcolor} max="3" value={this.state.sleep} />
      </Card>
      </Card>
      </div>
      </CardImgOverlay>
      </Card>
    </CardGroup>

    </div>
      )
    }
  
}

export default Dashboard;