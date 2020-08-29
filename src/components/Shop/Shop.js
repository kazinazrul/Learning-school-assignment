import React from 'react';

const Shop = (props) => {
    const {img, title, description, price, rating} = props.course

    return (
        <div className="course-item">
            <div>
                <img src={img} alt=""/>
                <h4 className="course-title">{title}</h4>
                <p className="course-description">{description}</p>
                <h5>{rating}</h5>
            </div>
            <div>
                <h5 className="course-price">Price: ${price}</h5>
                <button className="btn btn-sm btn-success enroll-button" onClick={()=>props.enrollHandler(props.crouse)}>Enroll Course</button>
            </div>
        </div>
    );
};

export default Shop;