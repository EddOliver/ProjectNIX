import React, { Component } from "react";
import './index.css';
import {isMobile} from "react-device-detect";
import MyNavBar from "./components/navbar"
import ReactPlayer from "react-player"

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
  } from "react-share";

import {
  Button,
  CardText,
  CardTitle,
  CardBody,
  Card,
  CardImg,
  CardImgOverlay,
  CardGroup,
  Row,
  Col
} from "reactstrap";

const video="https://www.youtube.com/watch?v=iWLylHnFDnE"


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {

    if(isMobile){
      return (
    <div id="group">
        <MyNavBar />
            <CardGroup>
                    <ReactPlayer
                    url={video}
                    id="border"
                    width="100vw"
                    height="60vh"
                    />
            </CardGroup>
            <div style={{ color:"white"}}>Share the App!</div>
        <FacebookShareButton  
        url={video}
        quote={"Check this excellent App"}
        className="Demo__some-network__share-button">
        <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton
              url={video}
              title={"Check this excellent App"}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon />
         </TwitterShareButton>
        <EmailShareButton
        url={video}
        subject="Project Nyx App"
        body={"Check this excellent App"}
        className="Demo__some-network__share-button"
        >
        <EmailIcon />
        </EmailShareButton>
    </div>
        )
    }
    else{
      return (
        <div id="group">
        <MyNavBar />
            <Row md="1">
                <Col style={{marginLeft:"10vw"}}>
                    <ReactPlayer
                    id="border"
                    url={video}
                    width="80vw"
                    height="70vh"
                    />
                </Col>                
                </Row>
            <div style={{ color:"white"}}>Share the App!</div>
        <FacebookShareButton  
        url={video}
        quote={"Check this excellent App"}
        className="Demo__some-network__share-button">
        <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton
              url={video}
              title={"Check this excellent App"}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon />
         </TwitterShareButton>
        <EmailShareButton
        url={video}
        subject="Project Nyx App"
        body={"Check this excellent App"}
        className="Demo__some-network__share-button"
        >
        <EmailIcon />
        </EmailShareButton>
    </div>)
    }
    
    }
  
}

export default Video;