import React, { Component } from 'react';
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline';
import IosCreate from 'react-ionicons/lib/IosCreate';

class ListQuestionsItem extends Component {

  handleDeleteQuestion = (id) => {
    this.props.handleDelete(id)
  }

  render() {
    const { question } = this.props
    return (
      <React.Fragment>
        <tr className="table__row">
          <td className="table__col table__col--center table__col--fix-width">{question.id}</td>
          <td className="table__col">{question.answer}</td>
          <td className="table__col table__col--center">{question.exam}</td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer"><IosCreate color="#007ab5" /></td>
          <td className="table__col table__col--center table__col--fix-width table__col--pointer">
            <button onClick={() => this.handleDeleteQuestion(question.id)}>
              <IosTrashOutline color="red" />
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default ListQuestionsItem;