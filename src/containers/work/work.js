/**
 * Created by prakash.shivanna on 25/10/17.
 */

import React, {Component} from 'react';
import Projects from '../../components/projects'


class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    render() {
        return(
            <Projects countToShow={30}/>
        );
    }

}

export default Work;
