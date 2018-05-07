
import { React, Component } from '../../';

import {StyledDiv as HeaderLocal, StyledDiv} from './style'


// eslint-disable-next-line
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// eslint-disable-next-line
const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

/**
 * @param {Date} date
 * @return {number}
 */
const daysInMonth = (date) => (new Date(date.setDate(0))).getDate();

/**
 * @param {Date} a
 * @param {Date} b
 * @return {number}
 */
const elapsedDays = (a,b) =>
  Math.round(Math.abs((a.getTime()-b.getTime())/(86400000)));
const range = (n) => Array.apply(null, {length: n}).map(Number.call, Number)

/**
 * @param {Object} props
 * @param {} props.children
 */
class ScheduleDate extends Component {
  /**
   * @param {Object} props
   * @param {Array} props.children
   * @param {Date} props.value
   */
  constructor(props) {
    super(props);
  }
  render = () => (
    <span>
      {this.props.value}
    </span>
  );
}



/**
 * @param {Object} props
 * @param {} props.children
 */
const Days = (props) =>
  days.map((_)=><span>{_}</span>)

//{[...Array(daysInMonth(this.props.startDate)).keys()].map((v)=>(<span>{v+1}</span>))}
//{Array((this.props.startDate).getDay()+1).fill(<span hidden></span>)}
export default class extends Component {
  /**
   * @param {Object} props
   * @param {Array} props.children
   * @param {Date} props.startDate
   * @param {Date} [props.endDate]
   */
  constructor(props) {
    super(props);
  }

   data = (range(elapsedDays(this.props.startDate,this.props.endDate)).map((v)=>(
    <ScheduleDate key={v.toString()} value={v+1} />
  )));

  render = () => ([
    <HeaderLocal className="HeaderLocal">
      <Days />
    </HeaderLocal>,
    <StyledDiv>
      {Array((this.props.startDate).getDay()+1).fill(<span hidden></span>)}
      {this.data}
    </StyledDiv>
  ]);
}
