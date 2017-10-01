import React, { Component } from 'react';
import classNames from 'classnames';

import dataSource from '../../static/resources/dataSource'


// import { Link } from 'react-router';

class SkillSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSkillSet : dataSource.dataSkillSet,
            expanded : false,
            expandId: '',
            addClass: false
        };
        this.expandCompDetail = this.expandCompDetail.bind(this);
    }

    expandCompDetail(id){
        console.log("id :: " ,id);
        this.setState({
            expanded: true,
            expandId: id,
            addClass: false,
        })
        /*if(this.state.expandId === id){
            this.setState({
                expanded: false,
            })
        }*/
    }



    render() {
        console.log("obj.companyname:: " , JSON.stringify(this.state.dataSkillSet));
        /*var outputData = this.state.dataSkillSet.map((obj) =>{
            return obj;
        })
        console.log("obj :: " ,outputData);*/
        return (
            <div className="skillSetContainer">
                <div className="workDetails">
                    <nav>
                        <h4 className="title">Relevant Experience </h4>
                        <ul>
                            {this.state.dataSkillSet.map((obj, id) => {
                                return <li key={id} onClick={() => this.expandCompDetail(id)}
                                           className={classNames('companies_details', this.state.addClass ? 'bounceInDown animated' : '')}>
                                    <div className="title_comp_container"><h4 className="title title_comp">{obj.company} <span className="pull_right">{obj.experience} Months</span></h4></div>
                                    { this.state.expanded &&  this.state.expandId == id ? <nav className="compDesc">
                                        <ul>
                                            <li>{obj.desc1}</li>
                                            <li>{obj.desc2}</li>
                                            <li>{obj.desc3}</li>
                                            <li>{obj.desc4}</li>
                                        </ul>
                                    </nav> : null}
                                </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default SkillSet;
