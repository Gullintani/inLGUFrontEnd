import React, { Component } from 'react';
import '../css/blocks.css'
import '../Bootstrap/dist/css/bootstrap.css'
import "../Bootstrap/dist/css/bootstrap-reboot.css"
import "../Bootstrap/dist/css/bootstrap.css"
import "../Bootstrap/dist/css/bootstrap-grid.css"
import "../css/theme-styles.css"
import "../css/blocks.css"
import "../css/fonts.css"
import "../css/jquery.mCustomScrollbar.min.css"
import "../css/simplecalendar.css"
import "../css/daterangepicker.css"
import "../css/magnific-popup.css"

function Avatar(props) {
    return (<div className="author-thumb">
                <img src={require("../img/author-page.jpg")} alt="author" />
            </div>)
}

function Panel(props) {
    return (<div className="form-group with-icon label-floating is-empty">
                <label className="control-label"> Share what you are thinking here...</label>
                <textarea className="form-control" placeholder=""></textarea>
                <span className="material-input"></span>
            </div>)
}

function ToolTip(props) {
    return (<a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title={props.title} >
				<svg className={props.svgclass} data-toggle={props.dataToggle} data-target={props.dataTarget}>
                    <use xlinkHref={props.icon}></use>
                </svg>
			</a>)
}

function Option(props) {
    return (
        <div className="add-options-message">
             <ToolTip title="ADD PHOTOS" svgclassName="olymp-camera-icon" dataToggle="modal" dataTarget="#update-header-photo" icon="icons/icons.svg#olymp-camera-icon"/>
             <ToolTip title="TAG YOUR FRIENDS" svgclassName="olymp-computer-icon" icon="icons/icons.svg#olymp-computer-icon"/>
             <button className="btn btn-primary btn-md-2">Post Status</button>
             <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>
		</div>
    )
}

class NewPost extends Component {
  render() {
    return (
        <div className="ui-block">
            <div className="news-feed-form">
                <div className="tab-content">
                    <div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                        <form>
                            <Avatar />
                            <Panel />
                            <Option />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default NewPost;
