import React from 'react';

import Card from './Card';
import AnimeBlog from '../assets/images/AnimeBlog.png';
import Connect4U from '../assets/images/Connect4U.png';
import RNNews from '../assets/images/RNNews.jpg';
import adminpanel from '../assets/images/adminpanel.png';
import Covid19 from '../assets/images/Covid19.png';
import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

class Carousel extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      windowWidth: window.innerWidth,
      items: [
        {
          id:0,
          title: 'Anime Blog',
          subTitle: 'A blog for Anime and Manga Lovers',
          imgSrc: AnimeBlog,
          link: 'https://anime-blog.vercel.app/',
          selected: false,
          type: 'website'
        },
        {
          id: 1,
          title: 'Connect4U',
          subTitle: 'Connect with like minded people',
          imgSrc: Connect4U,
          link: 'https://connect4-u.vercel.app/',
          selected: false,
          type: 'website'
        },
        {
          id: 2,
          title: 'Admin Panel',
          subTitle: "Administrator's Workplace",
          imgSrc: adminpanel,
          link: 'https://admin-panel.aarshoza.vercel.app',
          selected: false,
          type: 'website'
        },
        {
          id: 3,
          title: 'COVID-19',
          subTitle: "The pandemic situation all over the world",
          imgSrc: Covid19,
          link: 'https://covid-19-sand.vercel.app/',
          selected: false,
          type: 'website'
        },
        {
          id: 4,
          title: 'RN News',
          subTitle: "Stay updated with latest news for all countries in local languages",
          imgSrc: RNNews,
          // link: 'https://aarshoza.github.io/AdminPanel/index.html',
          selected: false,
          type: 'app'
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    this.setState({ isOpen: true, photoIndex: id })
    console.log(id, this.state.photoIndex)
  }

  makeItems = (item) => {
      return<Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
  }

  render() {
    const images = [
      AnimeBlog,
      Connect4U,
      adminpanel,
      Covid19,
      RNNews,
    ];
    return(
      <Container fluid={true}>
        <h2>
          Websites:
        </h2>
        <div>

          <Row  className="justify-content-around">
        { this.state.items.map((item) =>{
          if (item.type ==='website') {
          return(
            <Col>
                {this.makeItems(item)}
            </Col>
          )}
        })
        }
          </Row>
        </div>
        <h2>
          Applications:
        </h2>
        <div>

          <Row  className="justify-content-around">
        { this.state.items.map((item) => {
          if (item.type === 'app') {
            return (
                  <Col>
                    {this.makeItems(item)}
                  </Col>
            )
          }

        })
        }
          </Row>
        </div>

        <div>

          {this.state.isOpen && (
            <Lightbox
              discourageDownloads={false}
              imagePadding={30}
              enableZoom={true}
              imageTitle={this.state.items[this.state.photoIndex].title}
              imageCaption={this.state.items[this.state.photoIndex].subTitle}
              mainSrc={images[this.state.photoIndex]}
              nextSrc={images[(this.state.photoIndex + 1) % images.length]}
              prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (this.state.photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>

      </Container>
    );
  }
}

export default Carousel;