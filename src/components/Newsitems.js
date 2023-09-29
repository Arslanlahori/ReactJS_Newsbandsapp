import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, description, imageurl, newsurl, auther, date, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%', zIndex: 1 }}>{source}
                    </span>
                    <img src={!imageurl ? "https://www.macworld.com/wp-content/uploads/2023/09/Limink-Al-Alloy-Portable-Triple-Monitor-on-stand.jpg?quality=50&strip=all&w=1024&" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!auther ? "Unknown" : auther} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitems
