/**
 * Created by prakash.shivanna on 26/10/17.
 */
import React, {Component} from 'react';
import classNames from 'classnames';

import email from '../static/resources/svg/email.svg'
import upArrow from '../static/resources/svg/up-arrow.svg'

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNo: '',
            emailId: '',
            description: '',
            errorMessage: '',
            onSubmitMessage: '',
            isError: false,
            showForm: false,
            isFormSubmitted: true,
            formAnimate: 'hide'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
        console.log(" lenght phone ",this.state.phoneNo.length);
        if (this.state.phoneNo.length > 9) {
            this.setState({
                isError: true,
                errorMessage: 'Phone number is not Valid'
            })
        }else{
            this.setState({
                isError: false,
                errorMessage: ''
            })
        }
    }

    submitForm() {
        let formData = {
            "fname": this.state.firstName,
            "lname": this.state.lastName,
            "phone": this.state.phoneNo,
            "emailid": this.state.emailId,
            "description": this.state.description,
        };
        this.validation();
        let onSubmitMessage = "Thank you for contacting me, we will get back to you soon as possible.";
        this.setState({
           onSubmitMessage: onSubmitMessage,
           isFormSubmitted: true,
        });
        this.showForm();
        console.log("formData ", formData);
    }


    validation(){
        if(this.state.firstName.length === 0 && this.state.firstName == " "){
            this.setState({
                isError: true,
                errorMessage: 'Enter all the input fields.'
            })
        }
    }
    showForm() {
        if (this.state.showForm === true) {
            this.setState({
                formAnimate: 'scale-out-center',
            });
            setTimeout(() => {
                this.setState({
                    showForm: !this.state.showForm,

                });
            }, 1000);
        }
        else {
            this.setState({
                showForm: !this.state.showForm,
                formAnimate: 'scale-in-center'
            });
        }

    }

    pageScroll() {
        console.log("scroll");
        window.scrollBy({
            top: -2000, // could be negative value
            left: 0,
            behavior: 'smooth'
        });
    }

    closeForm(){
        this.showForm();
    }
    render() {
        const showForm = (<div className={classNames('form emailform', this.state.formAnimate)}>
            <div className="form--list">
                <ul>
                    <li className="form--content">
                        <input
                            type="text"
                            name="firstName"
                            className="input--name"
                            placeholder="First Name"
                            value={ this.state.firstName }
                            onChange={ this.handleChange }
                        />

                    </li>
                    <li className="form--content"><input
                        type="text"
                        name="lastName"
                        className="input--name"
                        placeholder="Last Name"
                        value={ this.state.lastName }
                        onChange={ this.handleChange }
                    /></li>
                    <li className="form--content"><input
                        type="number"
                        name="phoneNo"
                        className="input--name"
                        placeholder="Phone Number"
                        value={ this.state.phoneNo }
                        onChange={ this.handleChange }
                    /></li>
                </ul>
                <div className="form--content">
                    <input
                        type="email"
                        name="emailId"
                        className="input--name"
                        placeholder="Email ID"
                        value={ this.state.emailId }
                        onChange={ this.handleChange }
                    />
                </div>
                <div className="form--content">
                            <textarea
                                type="text"
                                name="description"
                                className="input--description"
                                placeholder="Description"
                                value={ this.state.description }
                                onChange={ this.handleChange }
                            />
                </div>
                <div className="error error-message">{this.state.errorMessage}</div>
                <div className="button--center button--form--submit">
                    <button onClick={() => this.submitForm()}
                            className="btn btn-5 btn-5a icon-cart"><span>Submit</span></button>
                </div>
            </div>
        </div>);
        const closeButton = (<button
            className={classNames('button--close button--right', this.state.formAnimate)} onClick={()=> this.closeForm()}>
            <i className="fa fa-times" aria-hidden="true"></i>
        </button>);
        return (
            <div className="bottom bottom-button-container">
                {this.state.showForm ? closeButton : null}
                { this.state.showForm ? showForm : null }
                <div className="mail mail-container">
                    <nav className="mail__bottom_nav">
                        <ul>
                            <li onClick={ () => {
                                this.showForm()
                            }}><img className="svg svg--email" alt="Contact Me " src={email}></img></li>
                            <li onClick={()=> this.pageScroll()}><img className="svg svg--email" alt="scroll to top" src={upArrow}></img></li>
                        </ul>
                    </nav>
                </div>
                {this.state.isFormSubmitted ? <div className="pop pop-in-out tracking-in-expand-fwd">{this.state.onSubmitMessage}</div> : <div>bbb</div>}
            </div>
        );
    }
}
export default Mail;
