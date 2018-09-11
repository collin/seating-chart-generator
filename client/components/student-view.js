import React from 'react'
import { Base64 } from 'js-base64'
import {GeneratedSeats, SeatingChart} from './index';


/*
  Generates student view layout from the url pathname.
  Url is generated from admin-view.
*/
export default class StudentView extends React.Component {
  componentDidMount() {
    Base64.extendString();
    const encodedUrl = (window.location.pathname).slice(1);
    const decodedStudents= encodedUrl.fromBase64();
    GeneratedSeats(decodedStudents, '-');
  }

  render() {
    return (
    <div className="mainContent">
      <h1 id="teacherDesks">Fellows' Desks</h1>
      <SeatingChart />
      <h1 id="bathrooms">Bathrooms</h1>
    </div>)
  }
};
