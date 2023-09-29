import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pagesize: 8,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    // Define capitalizeFirstLetter function
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    async componentDidMount() {
        let response = await fetch(`
      https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}`);
        this.setState({ loading: true });
        let data = await response.json();
        console.log(data);
        this.setState({ articles: data.articles, totalResults: data.totalResults, loading: false });
    }


    // var fetchApi = async () => {
    //     try {    
    //         const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-08-23&sortBy=publishedAt&apiKey=${this.props.apikey}");
    //         console.log(response);
    //         const data = await response.json();
    //         console.log(data); // Handle the fetched data here
    //     } catch (error) x = x-1
    //         console.error('Error:', error);
    //     }
    //     fetchApi()
    // }
    clickonprevious = async () => {
        let response = await fetch(`
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`)
        this.setState({ loading: true });
        let data = await response.json()

        this.setState({ page: this.state.page - 1, articles: data.articles, loading: false })

    }
    clickOnNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {


            let response = await fetch(`
            https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`)
            this.setState({ loading: true });
            let data = await response.json()
            console.log(data)
            this.setState({ page: this.state.page + 1, articles: data.articles, loading: false })
        }


    }


    render() {
        return (
            <div className="main-content">
                <div className="container mx-11">
                    <div className="container my-3">
                        <h2 className='text-center'>News Bang - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                        {this.state.loading && <Spinner />}
                        <div className="row">
                            {this.state.articles && this.state.articles.map((element) => {
                                return <div className="col-md-3" key={element.url} >
                                    <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} auther={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="container d-flex justify-content-around my-3">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.clickonprevious}>&laquo;Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.clickOnNext}>Next &raquo; </button>

                    </div>
                </div>
            </div>

        )
    }
}

export default News
