import React, { Component } from 'react'
import ListExamsItem from './ListExamsItem'

class ListExams extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr className="table__row" colspan="5">
              <th className="table__col--center">STT</th>
              <th className="table__col--center">Đề Thi</th>
              <th className="table__col--center">Thời Gian Làm Bài</th>
              <th className="table__col--center">Sửa</th>
							<th className="table__col--center">Xóa</th>
            </tr>
            <ListExamsItem />
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListExams;
