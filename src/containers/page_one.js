import React, {Component} from 'react';
import classNames from 'classnames';

import "./work/work.scss";
// import anime from 'animejs';
// import charming from 'charming';
// import $ from "jquery";


// const items = Array.from(document.querySelectorAll('.menu > .menu__item'));

const data = ["Portfolio", "abc" ,"asdasdad", "rrrrr"];


class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state ={
            wrapContent : [],
            jumpLetter: '',
            hovered: false,
            mouseLeave: false,
        };

        this.hoverAnimate =this.hoverAnimate.bind(this);
        this.mouseLeaveAnimate =this.mouseLeaveAnimate.bind(this);

    }
    hoverAnimate(content,id){
        // console.log(content , "asdasd : " , id);
        let wrapContent = Array.from(content);
        // console.log("wrapContent :: " ,wrapContent);
        this.setState({
            wrapContent : wrapContent,
            hovered : true,
        });
        console.log("wrapContent ssss:: " ,this.state.wrapContent);
        this.setState({
                jumpLetter : 'jump__letters'
        })
    }
    mouseLeaveAnimate(){
        this.setState({
            mouseLeave: true,
        })
    }
    componentDidMount(){

    }

    render() {
        const x = this.state.wrapContent.map((letters,i) => {
            return <span className={classNames('jumpLetter', this.state.jumpLetter+i)}>{letters}</span>
        });
        return (
            <div className="menu--container">
                <nav id="abc" className="menu menu--ama">

                    <span id="menu__item-name1">Portfolio</span>
                    {data.map((content,id) => {
                        return (<a key={id} onMouseEnter={()=> this.hoverAnimate(content,id)} onMouseLeave={ ()=> this.mouseLeaveAnimate() } className="menu__item" href="#">
                            {this.state.hovered && !this.state.mouseLeave ? <span className="menu__item-name">{x}</span> : <span className="menu__item-name">{content}</span>}
                        </a>)
                    })}
                    {x}
                </nav>

                <div className="wrappers"></div>
            </div>
        );
    }
}

export default PageOne;
