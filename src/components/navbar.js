import React, { Component } from 'react';
import classNames from 'classnames';

// import React from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false,
        };
    }

    menuButton() {
        this.setState({
            navigationOpen: !this.state.navigationOpen,
        });
    }
    navigationBtnClick(n){
        this.setState({
            navigationOpen: !this.state.navigationOpen,
        })
    }
    render() {
        const navigationContainer = (<div className={classNames('navigation')}>
            <div className="navigationContent">
                <ul>
                    <li><Link to="/" className="about effect-shine" onClick={ () => this.navigationBtnClick('home')}>Home</Link></li>
                    {/*<li><Link to="pageOne" className="about effect-shine" onClick={ () => this.navigationBtnClick('home')}>About</Link></li>*/}
                    <li><a href="/resume.pdf" className="resume effect-shine" target="_blank" onClick={ () => this.navigationBtnClick('home')}>Resume</a></li>
                     <li><Link to="Work" className="work effect-shine" onClick={ () => this.navigationBtnClick('work')}>Work</Link></li>
                    {/*<li><Link href="/blog/" to="pageTwo" className="work effect-shine" onClick={ () => this.navigationBtnClick('home')}>pageTow</Link></li>*/}
                    <li><a href="/blog/" target="_blank" className="work effect-shine" onClick={ () => this.navigationBtnClick('blog')}>Blog</a></li>
                    {/*<li href="#"><Link to="Contact" className="contact effect-shine" onClick={ () => this.navigationBtnClick('contact')}>Contact</Link></li>*/}
                </ul>
            </div>
        </div>);

        return (

                <header className="headerWrap App-content clearfix">
                    { this.state.navigationOpen ? navigationContainer : null}
                    <div className="mobileWrapper"></div>
                    <div className={classNames('brandContainer', this.state.navigationOpen ? '' : '')}>
                        <Link to="/" href="#" className="brand">
                            <span>PSP</span>
                        </Link>
                    </div>
                    <div className="menuBtn">
                        <div onClick={() => this.menuButton()}
                             id="menu-icon"
                             className={classNames('menu-closed jul', this.state.navigationOpen ? 'open' : '')}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
        );
    }
}
export default NavBar;

/*
export default (props) => {
  return (
    <nav className="navbar navbar-default navbar-lms navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            HOME
          </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="pageOne">Page One</Link></li>
            <li><Link to="pageTwo">Page Two</Link></li>
            <li><a target="_blank" href="https://twitter.com/deshatom">Twitter</a></li>
            <li><a target="_blank" href="https://lk.linkedin.com/in/deshan-madurajith-600129108">LinkedIn</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to="about">About<span className="sr-only">(current)</span></Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
*/
