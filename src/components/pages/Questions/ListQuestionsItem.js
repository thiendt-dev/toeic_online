import React, { Component } from 'react';
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline';
import IosCreate from 'react-ionicons/lib/IosCreate';

class ListQuestionsItem extends Component {
    render() {
        return (
            <React.Fragment>
                <tr className="table__row">
                    <td className="table__col table__col--center table__col--fix-width">1</td>
                    <td className="table__col">Nội dung câu hỏi 1</td>
                    <td className="table__col table__col--center">Đề 1</td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosTrashOutline color="red" /></td>
                </tr>
                <tr className="table__row">
                    <td className="table__col table__col--center table__col--fix-width">1</td>
                    <td className="table__col">Nội dung câu hỏi 2</td>
                    <td className="table__col table__col--center">Đề 2</td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosTrashOutline color="red" /></td>
                </tr>
                <tr className="table__row">
                    <td className="table__col table__col--center table__col--fix-width">1</td>
                    <td className="table__col">Nội dung câu hỏi 3</td>
                    <td className="table__col table__col--center">Đề 3</td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
                    <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosTrashOutline color="red" /></td>
                </tr>
            </React.Fragment>
        )
    }
}

export default ListQuestionsItem;