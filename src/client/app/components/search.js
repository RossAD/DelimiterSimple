import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import $ from 'jquery';

const callServer = (val, callback) => {
  const url = window.location.href + 'api/delimiters/' + val;
  $.ajax({
    type: 'get',
    url: url,
    contentType: 'application/json',
    success: callback,
    error: (err) => {
      console.log('Error calling Server : ', err);
    }
  });
};

const getDelimiters = (data) => {
  console.log('Delimiter Data: ', data);
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <p>Please search valid property to <b>show</b> on table</p>
        <DropdownButton title="Choose Delimiter"
          id="dropdown-basic" onSelect={function(evt) { callServer(evt, getDelimiters);} }>
          <MenuItem eventKey="quotationStart">quotationStart</MenuItem>
          <MenuItem eventKey="quotationEnd">quotationEnd</MenuItem>
          <MenuItem eventKey="alternateQuatationStart">alternateQuatationStart</MenuItem>
          <MenuItem eventKey="alternateQuotationEnd">alternateQuotationEnd</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

