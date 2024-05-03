import React from 'react';
import './cards.css';

const Cards = (props) => {
    return (
        <div className='col-lg-4'>
            <article className='card mb-5 mb-lg-0'>
                <div className='card-body'>
                    <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
                    <h6 className="card-price text-center">{props.cardData.price}<span className="period"></span></h6>
                    <hr />
                    <ul className='fa-ul'>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.cardData.user}</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.cardData.storage}</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.cardData.project}</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.cardData.access}</li>
                        <li className={props.cardData.private_icon === "fa-solid fa-xmark" ? "t-icon text-muted" : ""}><span className="fa-li"><i className={props.cardData.private_icon}></i></span>{props.cardData.private}</li>
                        <li className={props.cardData.support_icon === "fa-solid fa-xmark" ? "t-icon text-muted" : ""}><span className="fa-li"><i className={props.cardData.support_icon}></i></span>{props.cardData.support}</li>
                        <li className={props.cardData.domain_icon === "fa-solid fa-xmark" ? "t-icon text-muted" : ""}><span className="fa-li"><i className={props.cardData.domain_icon}></i></span>{props.cardData.domain}</li>
                        <li className={props.cardData.report_icon === "fa-solid fa-xmark" ? "t-icon text-muted" : ""}><span className="fa-li"><i className={props.cardData.report_icon}></i></span>{props.cardData.report}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Cards;
