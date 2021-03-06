'use strict';
import React, { Component } from 'react';



function SideMenu(props) {
    return (
        <div className="ui-block">
            <div className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your PROFILE</h6>
                </div>
                <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" id="headingOne" role="tab">
                            <h6 className="mb-0">
                                <a aria-expanded="true" aria-controls="collapseOne" href="#collapseOne" data-toggle="collapse" data-parent="#accordion">
                                    Profile Settings
              <svg xmlns="http://www.w3.org/2000/svg" className="olymp-dropdown-arrow-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon" /></svg>
                                </a>
                            </h6>
                        </div>
                        <div className="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                            <ul className="your-profile-menu">
                                <li>
                                    <a href="#">Personal Information</a>
                                </li>
                                <li>
                                    <a href="#">Account Settings</a>
                                </li>
                                <li>
                                    <a href="#">Change Password</a>
                                </li>
                                <li>
                                    <a href="#">Hobbies and Interests</a>
                                </li>
                                <li>
                                    <a href="#">Education and Employement</a>
                                </li>
                            </ul>

                            <div className="card-header" id="headingOne" role="tab">
                                <h6 className="mb-0">
                                    <a aria-expanded="true" aria-controls="collapseOne" href="#collapseOne" data-toggle="collapse" data-parent="#accordion">
                                        System Settings
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-dropdown-arrow-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon" /></svg>
                                    </a>
                                </h6>
                            </div>
                            <div className="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                <ul className="your-profile-menu">
                                    <li>
                                        <a href="#">Personal Information</a>
                                    </li>
                                    <li>
                                        <a href="#">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Change Password</a>
                                    </li>
                                    <li>
                                        <a href="#">Hobbies and Interests</a>
                                    </li>
                                    <li>
                                        <a href="#">Education and Employement</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Setting(props) {
    return (
        <div className="ui-block">
            <div className="ui-block-title">
                <h6 className="title">Personal Information</h6>
            </div>
            <div className="ui-block-content">
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group label-floating">
                                <label className="control-label">First Name</label>
                                <input className="form-control" type="text" placeholder defaultValue="James" />
                                <span className="material-input" /></div>
                            <div className="form-group label-floating">
                                <label className="control-label">Your Email</label>
                                <input className="form-control" type="email" placeholder defaultValue="jspiegel@yourmail.com" />
                                <span className="material-input" /></div>
                            <div className="form-group date-time-picker label-floating">
                                <label className="control-label">Your Birthday</label>
                                <input name="datetimepicker" defaultValue="10/24/1984" />
                                <span className="input-group-addon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-month-calendar-icon icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-month-calendar-icon" /></svg>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group label-floating">
                                <label className="control-label">Last Name</label>
                                <input className="form-control" type="text" placeholder defaultValue="Spiegel" />
                                <span className="material-input" /></div>
                            <div className="form-group label-floating">
                                <label className="control-label">Your Website</label>
                                <input className="form-control" type="email" placeholder defaultValue="daydreamzagency.com" />
                                <span className="material-input" /></div>
                            <div className="form-group label-floating is-empty">
                                <label className="control-label">Your Phone Number</label>
                                <input className="form-control" type="text" placeholder />
                                <span className="material-input" /></div>
                        </div>
                        
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group with-icon label-floating">
                                <label className="control-label">Your Facebook Account</label>
                                <input className="form-control" type="text" defaultValue="www.facebook.com/james-spiegel95321" />
                                <i className="fa fa-facebook c-facebook" aria-hidden="true" />
                                <span className="material-input" /></div>
                            <div className="form-group with-icon label-floating">
                                <label className="control-label">Your Twitter Account</label>
                                <input className="form-control" type="text" defaultValue="www.twitter.com/james_spiegelOK" />
                                <i className="fa fa-twitter c-twitter" aria-hidden="true" />
                                <span className="material-input" /></div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Your RSS Feed Account</label>
                                <input className="form-control" type="text" />
                                <i className="fa fa-rss c-rss" aria-hidden="true" />
                                <span className="material-input" /></div>
                            <div className="form-group with-icon label-floating">
                                <label className="control-label">Your Dribbble Account</label>
                                <input className="form-control" type="text" defaultValue="www.dribbble.com/thecowboydesigner" />
                                <i className="fa fa-dribbble c-dribbble" aria-hidden="true" />
                                <span className="material-input" /></div>
                            <div className="form-group with-icon label-floating is-empty">
                                <label className="control-label">Your Spotify Account</label>
                                <input className="form-control" type="text" />
                                <i className="fa fa-spotify c-spotify" aria-hidden="true" />
                                <span className="material-input" /></div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <button className="btn btn-secondary btn-lg full-width">Restore all Attributes</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
                        <Setting />
                    </div>
                    <div className="col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                        <SideMenu />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
