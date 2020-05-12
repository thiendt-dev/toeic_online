import React, { Component } from 'react'
import ListQuestionsItem from './ListQuestionsItem'

class ListQuestions extends Component {
	render() {
		return (
			<div>
				<table className="table">
					<tbody>
						<tr className="table__row" colspan="5">
							<th className="table__col--center">STT</th>
							<th className="table__col--center">Câu Hỏi</th>
							<th className="table__col--center">Đề Thi</th>
							<th className="table__col--center">Sửa</th>
							<th className="table__col--center">Xóa</th>
						</tr>
						<ListQuestionsItem />
					</tbody>
				</table>
			</div>
		)
	}
}

export default ListQuestions;