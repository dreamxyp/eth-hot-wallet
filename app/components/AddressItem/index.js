/**
*
* AddressItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { Huc } from 'utils/constants';
// import messages from './messages';


function AddressItem(props) {
  const { address, data, onChangeFrom, exchangeRates, convertTo } = props;
  const hucData = data.get('eth');

  const balance = hucData.get('balance') !== false ? `${ethData.get('balance').div(Huc).toString(10)} HUC ` : 'n/a';

  const rate = exchangeRates.getIn([convertTo, 'rate']);
  const convertedBalance = (balance !== 'n/a' && rate) ? hucData.get('balance').div(Huc).times(rate).toFixed(2).toString(10) : '';
  const convertToName = exchangeRates.getIn([convertTo, 'name']);

  return (
    <div>
      {address} |
      Balance: {balance}
      {convertedBalance} {convertToName}
      <button onClick={() => onChangeFrom(address)}>
        Send
      </button>
    </div>
  );
}

AddressItem.propTypes = {
  address: PropTypes.string,
  data: PropTypes.object,
  onChangeFrom: PropTypes.func,
  exchangeRates: PropTypes.object,
  convertTo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default AddressItem;
