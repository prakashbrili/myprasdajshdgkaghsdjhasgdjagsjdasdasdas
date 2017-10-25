/**
 * Created by prakash.shivanna on 18/10/17.
 */
import React, { Component } from 'react';

// import classNames from 'classnames';
// import * as d3 from "d3";

import dataSource from '../static/resources/dataSource';

class SkillGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const dataname =  dataSource.skillSetData.map((ele,id) => {
            return  (<li key={id}>
                <div className="flex1">
                    <div className="width100 full--progress">

                        <h4 className="pull--left title--small">{ele.name}</h4>
                        <h4 className="pull-right title--small">{ele.proficiency}%</h4>
                        <div className="progressed--status" style={{width: ele.proficiency+'%'}}></div>
                    </div>
                    {/*
                    <div className="skills--title">{ele.name}</div>
                    <div className="progress__container">
                        <div className="progressed" style={{width: ele.proficiency+'%'}} >
                            <span className="prof--value float--right">{ele.proficiency}%</span>
                        </div>
                    </div>*/}
                </div>
            </li>);
        });
        return (
            <div className="skills wrapper">
                <nav className="skills--nav">
                    <ul>
                        {dataname}
                    </ul>
                </nav>
            </div>
        );
    }

}

export default SkillGraph;
