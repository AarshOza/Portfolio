import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {

  return (
    <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
      { props.item.type === 'app' ? (
        <img className="g-card-image-app" src={props.item.imgSrc} alt={props.item.imgSrc} />
      ) : (
        <div className="image-container">
          <img className="g-card-image-website" src={props.item.imgSrc} alt={props.item.imgSrc} />
          <span className="display-inline">
            Visit {props.item.title}
            <a className='' style={{ textDecoration: 'none' }} href={props.item.link} target='_blank' rel="noopener noreferrer">
              {' here'}
            </a>
          </span>
        </div>
      )
      }
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
    </div >
  );
}

export default Card;