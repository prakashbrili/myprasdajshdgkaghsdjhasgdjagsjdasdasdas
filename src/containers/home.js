import React, { Component } from 'react';
import classNames from 'classnames';

import SkillSet from './home/skillSet';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialBtn: false,
        };
    }
    socialBtn(n) {
        this.setState({
            socialBtn: !this.state.socialBtn,
        });
    }
    render() {
      return (
          <div>
              <div className={classNames('homePage bounceInDown animated')}>
                  <h1 className="shine-always">Creating things Since <span>2010</span> </h1>
                  <a className="button mainButton btn-2"><span>Know More</span></a>
                  <div className="socialNav">
                      <ul>
                          <li><a href="https://www.facebook.com/prakashsprathap" target="_blank" onClick={() => this.socialBtn(1) }
                                 className={classNames('facebook', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                          <li><a href="https://www.instagram.com/prakashsprathap/" target="_blank" onClick={() => this.socialBtn(4) }
                                 className={classNames('instagram', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                          <li><a href="https://twitter.com/prakash689" target="_blank" onClick={() => this.socialBtn(2) }
                                 className={classNames('twitter', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                          <li><a href="https://dribbble.com/prakashbrili" target="_blank" onClick={() => this.socialBtn(3) }
                                 className={classNames('dribble', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                          <li><a href="https://www.linkedin.com/in/prakash-s-75682660/" target="_blank"
                                 onClick={() => this.socialBtn(5) }
                                 className={classNames('linkedin', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                          <li><a href="https://github.com/prakashbrili" target="_blank" onClick={() => this.socialBtn(6) }
                                 className={classNames('github', this.state.socialBtn ? 'rotate' : '')}> </a></li>
                      </ul>
                  </div>
              </div>
              <div>
                  <nav className="my_skills">
                      <ul>
                          <li>
                              <div><i className="fa fa-star" aria-hidden="true"></i><p>Designing Website, interfaces and graphic design.</p></div>
                          </li>
                          <li>
                              <div><i className="fa fa-star" aria-hidden="true"></i><p>Visual support of projects</p></div>
                          </li>
                          <li>
                              <div><i className="fa fa-star" aria-hidden="true"></i><p>jQuery, Responsive Web develpoment.</p></div>
                          </li>
                          <li>
                              <div><i className="fa fa-star" aria-hidden="true"></i><p>React and React Native mobile application development.</p></div>
                          </li>
                      </ul>
                  </nav>
              </div>
              <SkillSet />
          </div>
      );
  }
}

export default Home;
