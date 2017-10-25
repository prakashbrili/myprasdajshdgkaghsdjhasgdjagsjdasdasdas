import React, {Component} from 'react';
import classNames from 'classnames';
import './home.scss';
import SkillGraph from '../../components/skill';
import Projects from '../../components/projects';
// import dataSource from '../../static/resources/dataSource';

const aboutme = "I am a Creative, passionate, and proactive Front End Developer focusing mainly on web interfaces, user interactions and experiences. Career spans more than 4 years of hands-on  experience as an UI developer, mobile application development and various web  development projects from inception to conclusion which made me learn quickly and apply  that knowledge in interesting ways to the projects.";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    pageScroll() {
        console.log("scroll");
        // window.scrollBy(0,300); // horizontal and vertical scroll increments
        // let scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
        // clearTimeout(scrolldelay);

        window.scrollBy({
            top: 600, // could be negative value
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="homepagecontainer">
                <div className="homePage">
                    <div className="homePage__container">
                        <div className={classNames('tagline bounceInDown animated')}>
                            <h1 className="tagline__title shine-always">Creating things Since <span>2012</span></h1>
                            <div className="social__container  bounceInDown animated">
                                <div className="social__container social__media">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/prakashsprathap" target="_blank">
                                                <div className="icon icons8-Facebook"></div>
                                            </a>
                                            <a href="https://www.instagram.com/prakashsprathap/" target="_blank">
                                                <div className="icon icons8-Instagram"></div>
                                            </a>
                                            <a href="https://twitter.com/prakash689" target="_blank">
                                                <div className="icon icons8-Twitter"></div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/prakash-s-75682660/" target="_blank">
                                                <div className="icon icons8-LinkedIn"></div>
                                            </a>
                                            <a href="https://dribbble.com/prakashbrili" target="_blank">
                                                <div className="icon icons8-Dribbble"></div>
                                            </a>
                                            <a href="https://github.com/prakashbrili" target="_blank">
                                                <div className="icon icons8-GitHub"></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="button--center">
                                <button onClick={() => this.pageScroll()}
                                        className="btn btn-5 btn-5a icon-cart"><span>Show More</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="down__arrow" onClick={() => this.pageScroll()}>
                        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="bgWhite  wrapper clearfix">
                    <div className="aboutme center wrapper">
                        <h2 className="title">About me </h2>
                        <p>{ aboutme }</p>
                    </div>
                </div>
                <div className="skills--container bgWhite ">
                    <SkillGraph />
                </div>

                <div className="work">
                    <Projects />
                </div>
            </div>
        );
    }
}

export default Home;
