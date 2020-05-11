import React, { Component } from "react";
import './index.css';
import {isMobile} from "react-device-detect";
import Wall from "./assets/wall.jpg"
import MyNavBar from "./components/navbar"
import ReactStoreIndicator from 'react-score-indicator'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import {
  Col,
  Row,
  Card,
  CardImg,
  CardImgOverlay,
  CardGroup
} from "reactstrap";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
score:100,
message:"Excellent"
    };
  }

  componentWillMount(){

    let _this=this
    var reqq;
    var unirestt = require('unirest');
    reqq = unirestt('GET', 'https://menopause-hackster.s3.amazonaws.com/sleep_datas.json')
      .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        var my_array = res.raw_body.replace("[", "").replace("]", "").split(",");
        var number = parseFloat(my_array[1].replace("'", "").replace("'", ""))
        var hour = Math.round(number)
        var minute = (Math.round((number + Number.EPSILON) * 100) / 100)-hour
        console.log(number)
        minute = Math.round(60*minute)
        _this.setState({
          hours:hour,
          minutes:minute
        })
        var quality = parseFloat(my_array[0].replace("'", "").replace("'", ""))
        console.log(quality)
        if(hour>=8){
          hour=8
        }
        var myscore = Math.round(((number*100)/8)*(quality/3))
        var label =""
        if(myscore<20){
          label= "Awful"
        }
        else if(myscore<40){
          label= "Bad"
        }
       else if(myscore<60){
          label= "Regular"
        }
        else if(myscore<80){
          label= "Good"
        }
        else if(myscore<100){
          label= "Excellent"
        }

        _this.setState({
          score:myscore,
          message:label
        })
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
         <Card id="example3" inverse color="dark">
       <CardImg id="example5" src={Wall} alt="Card image cap" />
        <CardImgOverlay>
        <div id="marks">
          Nothing is IMPOSSIBLE...
          <br />
          even the word says
          <br />
          "I'M POSSIBLE".
          </div>
          </CardImgOverlay>
        </Card>
        <div style={{color:"white"}}>My score today is:</div>
        <div>
        <ReactStoreIndicator
          value={this.state.score}
          maxValue={100}
          className="box"
        />
        <div style={{color:"white",position: "relative",bottom:"130px"}}>
          {this.state.message}
        </div>
        </div>
        <div style={{fontSize:"20px", color:"white"}}>Share your score!</div>
        <FacebookShareButton  
        url="https://github.com/EddOliver/ProjectNIX"
        quote={"My score today is: " + this.state.score}
        className="Demo__some-network__share-button">
        <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton
              url="https://github.com/EddOliver/ProjectNIX"
              title={"My score today is: " + this.state.score}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon />
         </TwitterShareButton>
        <EmailShareButton
        url="https://github.com/EddOliver/ProjectNIX"
        subject="Project Nyx result"
        body={"My score today is: " + this.state.score}
        className="Demo__some-network__share-button"
        >
        <EmailIcon />
        </EmailShareButton>
      </CardGroup>
      
      </div>
        )
    }
    else{
      return (
        <div id="group">
          <MyNavBar />
      <CardGroup>
        <Row>
        <Card id="example3" inverse color="dark">
       <CardImg id="example6" src={Wall} alt="Card image cap" />
        <CardImgOverlay>
        <div id="marks">
          Nothing is IMPOSSIBLE...
          <br />
          even the word says
          <br />
          "I'M POSSIBLE".
          </div>
          </CardImgOverlay>
        </Card>
        
        <Col>
        <div style={{ margin: "0 auto",color:"white"}}>My score today is:</div>
        <div>
        <ReactStoreIndicator
          value={this.state.score}
          maxValue={100}
          className="box"
        />
        <div style={{color:"white",position: "relative",bottom:"130px"}}>
          {this.state.message}
        </div>
        </div>
        </Col>
        <Col>
        <div style={{ color:"white"}}>Share your score!</div>
        <FacebookShareButton  
        url="http://menopause-hackster.s3-website-us-east-1.amazonaws.com"
        quote={"My score today is: " + this.state.score}
        className="Demo__some-network__share-button">
        <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton
              url="http://menopause-hackster.s3-website-us-east-1.amazonaws.comX"
              title={"My score today is: " + this.state.score}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon />
         </TwitterShareButton>
        <EmailShareButton
        url="http://menopause-hackster.s3-website-us-east-1.amazonaws.com"
        subject="Project Nyx result"
        body={"My score today is: " + this.state.score}
        className="Demo__some-network__share-button"
        >
        <EmailIcon />
        </EmailShareButton>
        </Col>
        </Row>
      </CardGroup>
      
      </div>
        )
    }
    
    }
  
}

export default Index;