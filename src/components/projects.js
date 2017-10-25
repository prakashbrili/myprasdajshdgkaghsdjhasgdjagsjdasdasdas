/**
 * Created by prakash.shivanna on 24/10/17.
 */
import React, {Component} from 'react';

// import classNames from 'classnames';

import dataSource from '../static/resources/dataSource';
import {Link} from 'react-router';
import classNames from 'classnames'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource.project,
            dataSourceLength: dataSource.project.length,
            initialData: [],
            data: [],
            count: 10,
            popAnimation: '',
            showMore: false,
            loadMoreButton: false,
            countToShow : props.countToShow,
        };
        this.onLoadMoreAction = this.onLoadMoreAction.bind(this);
    }

    componentDidMount() {
        this.onLoadMoreAction();
        console.log("countToShow :: " ,this.state.countToShow);
    }

    initialLoad(count) {
        const initialData = this.state.dataSource.slice(0, count);
        this.setState({
            data: initialData,
        })
    }

    onLoadMoreAction() {
        console.log("show all");
        if (this.state.count < this.state.dataSourceLength) {
            if(this.state.countToShow){
                this.setState({
                    count: this.state.countToShow + 10,
                    popAnimation: 'scale-in-ver-top',
                })
            }else{
                this.setState({
                    count: this.state.count + 10,
                    popAnimation: 'scale-in-ver-top',
                });
            }

        } else {
            this.setState({
                // count: this.state.count - 10,
                // showMore: !this.state.showMore,
                loadMoreButton: !this.state.loadMoreButton,
            })
        }
        this.initialLoad(this.state.count);
    }

    render() {
        const dataname = this.state.data.map((ele, id) => {
            return (<li key={id} className="projects--items">
                <div className={classNames("projects-item", this.state.popAnimation)}>
                    <h2 className="title title-web">{ele.name}</h2>
                    <div>
                        <a href={ele.url} className="url url__link" target="_blank">Go</a>
                    </div>
                </div>
            </li>);
        });

        const loadMoreButton = ( <div className="button--center" onMouseOver={ () => {
            return;
            this.onLoadMoreAction()
        }}>
            <button onClick={() => {this.onLoadMoreAction()}}
                    className="btn btn-5 btn-5a icon-cart">
                <span>{ !this.state.showMore ? 'show more' : ' completed'}</span></button>
        </div>);
        return (
            <div className="projects wrapper clearfix">
                <nav className='projects--nav'>
                    <ul>
                        {dataname}
                    </ul>
                    {!this.state.loadMoreButton ? loadMoreButton : null}
                </nav>
            </div>
        );
    }

}

export default Projects;
