import React, { Component } from 'react'
import ListUsersItem from './ListUsersItem'

export default class ListUsers extends Component {
	render() {
		return (
			<div>
				<table className="table">
					<tbody>
						<tr className="table__row" colspan="5">
							<th className="table__col--center">STT</th>
							<th className="table__col--center">Tên</th>
							<th className="table__col--center">Email</th>
							<th className="table__col--center">Trạng Thái</th>
							<th className="table__col--center">Sửa</th>
							<th className="table__col--center">Xóa</th>
						</tr>
						<ListUsersItem />
					</tbody>
				</table>
			</div>
		)
	}
}
