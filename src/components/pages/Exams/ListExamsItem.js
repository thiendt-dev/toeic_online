import React, { Component } from 'react';
import IosTrashOutline from '../../../../node_modules/react-ionicons/lib/IosTrashOutline';
import IosCreate from '../../../../node_modules/react-ionicons/lib/IosCreate';

class ListExamsItem extends Component {
  render() {
    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">1</td>
          <td className="table__col table__col--center">Đề 1</td>
          <td className="table__col table__col--center">120</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosTrashOutline color="red" /></td>
        </tr>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">1</td>
          <td className="table__col table__col--center">Đề 2</td>
          <td className="table__col table__col--center">120</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosTrashOutline color="red" /></td>
        </tr>
      </React.Fragment>
    )
  }
}

export default ListExamsItem;
