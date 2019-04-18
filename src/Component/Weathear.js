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


// <div className="ui-block">
// 				<div className="widget w-wethear">
// 					<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>

// 					<div className="wethear-now inline-items">
// 						<div className="temperature-sensor">64°</div>
// 						<div className="max-min-temperature">
// 							<span>58°</span>
// 							<span>76°</span>
// 						</div>

// 						<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
// 					</div>

// 					<div className="wethear-now-description">
// 						<div className="climate">Partly Sunny</div>
// 						<span>Real Feel: <span>67°</span></span>
// 						<span>Chance of Rain: <span>49%</span></span>
// 					</div>

// 					<ul className="weekly-forecast">

// 						<li>
// 							<div className="day">sun</div>
// 							<svg className="olymp-weather-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-sunny-icon"></use></svg>

// 							<div className="temperature-sensor-day">60°</div>
// 						</li>

// 						<li>
// 							<div className="day">mon</div>
// 							<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
// 							<div className="temperature-sensor-day">58°</div>
// 						</li>

// 						<li>
// 							<div className="day">tue</div>
// 							<svg className="olymp-weather-cloudy-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-cloudy-icon"></use></svg>

// 							<div className="temperature-sensor-day">67°</div>
// 						</li>

// 						<li>
// 							<div className="day">wed</div>
// 							<svg className="olymp-weather-rain-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-rain-icon"></use></svg>

// 							<div className="temperature-sensor-day">70°</div>
// 						</li>

// 						<li>
// 							<div className="day">thu</div>
// 							<svg className="olymp-weather-storm-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-storm-icon"></use></svg>

// 							<div className="temperature-sensor-day">58°</div>
// 						</li>

// 						<li>
// 							<div className="day">fri</div>
// 							<svg className="olymp-weather-snow-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-snow-icon"></use></svg>

// 							<div className="temperature-sensor-day">68°</div>
// 						</li>

// 						<li>
// 							<div className="day">sat</div>

// 							<svg className="olymp-weather-wind-icon-header"><use xlinkHref="icons/icons-weather.svg#olymp-weather-wind-icon-header"></use></svg>

// 							<div className="temperature-sensor-day">65°</div>
// 						</li>

// 					</ul>

// 					<div className="date-and-place">
// 						<h5 className="date">Saturday, March 26th</h5>
// 						<div className="place">San Francisco, CA</div>
// 					</div>

// 				</div>
// 			</div>

function Today(props) {
    return (<div className="wethear-now inline-items">
				<div className="temperature-sensor">{props.current}</div>
				<div className="max-min-temperature">
					<span>{props.low}</span>
					<span>{props.high}</span>
				</div>
				<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
				</div>)
}

function Description(props) {
    return (<div className="wethear-now-description">
				<div className="climate">{props.climate}</div>
				<span>Real Feel: <span>{props.current}</span></span>
				<span>Chance of Rain: <span>{props.chance}</span></span>
			</div>)
}

function Day(props) {
	return (<li>
				<div className="day">{props.day}</div>
				<svg className={props.climateclass}><use xlinkHref={props.icon}></use></svg>
				<div className="temperature-sensor-day">{props.temperature}</div>
			</li>)
}

function Forecast(props) {
// 	return (	<ul className="weekly-forecast">

// 	<li>
// 		<div className="day">sun</div>
// 		<svg className="olymp-weather-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-sunny-icon"></use></svg>

// 		<div className="temperature-sensor-day">60°</div>
// 	</li>

// 	<li>
// 		<div className="day">mon</div>
// 		<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
// 		<div className="temperature-sensor-day">58°</div>
// 	</li>

// 	<li>
// 		<div className="day">tue</div>
// 		<svg className="olymp-weather-cloudy-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-cloudy-icon"></use></svg>

// 		<div className="temperature-sensor-day">67°</div>
// 	</li>

// 	<li>
// 		<div className="day">wed</div>
// 		<svg className="olymp-weather-rain-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-rain-icon"></use></svg>

// 		<div className="temperature-sensor-day">70°</div>
// 	</li>

// 	<li>
// 		<div className="day">thu</div>
// 		<svg className="olymp-weather-storm-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-storm-icon"></use></svg>

// 		<div className="temperature-sensor-day">58°</div>
// 	</li>

// 	<li>
// 		<div className="day">fri</div>
// 		<svg className="olymp-weather-snow-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-snow-icon"></use></svg>

// 		<div className="temperature-sensor-day">68°</div>
// 	</li>

// 	<li>
// 		<div className="day">sat</div>

// 		<svg className="olymp-weather-wind-icon-header"><use xlinkHref="icons/icons-weather.svg#olymp-weather-wind-icon-header"></use></svg>

// 		<div className="temperature-sensor-day">65°</div>
// 	</li>

// </ul>)
    return (<ul className="weekly-forecast">
				<Day day='sun' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='mon' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='tue' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='wed' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='thu' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='fri' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
				<Day day='sat' climateclass="olymp-weather-sunny-icon" icon="icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°"/>
		</ul>)

}

function Date(props) {
	return (<div className="date-and-place">
				<h5 className="date">Saturday, March 26th</h5>
				<div className="place">San Francisco, CA</div>
			</div>)
}

class Weathear extends Component {
  render() {
    return (
        <div className="ui-block">
            <div className="widget w-wethear">
            	<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
				<Today current='64°' low='58°' high='76°' />
				<Description climate='Partly Sunny' current='67°' chance='49%'/>
				<Forecast />
				<Date />
			</div>
        </div>
    );
  }
}

export default Weathear;