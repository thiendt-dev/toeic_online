import React from 'react';
import Users from '../pages/admin/users/index';
import Exams from '../pages/admin/exams/index';
import Questions from '../pages/admin/questions/index';
import AddNewUser from '../components/pages/Users/AddNewUser';
import ExamForm from '../components/pages/Exams/ExamForm';

const routes = [
	{
		path: "/user",
		exact: true,
		main: ({ history }) => <Users history={history} />
	},
	{
		path: "/user/add",
		exact: true,
		main: ({ history }) => <AddNewUser history={history} />
	},
	{
		path: "/user/edit/:id",
		exact: true,
		main: ({ history, data }) => <AddNewUser data={data} history={history} />
	},
	{
		path: "/exam",
		exact: true,
		main: ({ history }) => <Exams history={history} />
	},
	{
		path: "/exam/add",
		exact: true,
		main: ({ history }) => <ExamForm history={history} />
	},
	{
		path: "/exam/edit/:id",
		exact: true,
		main: ({ history, data }) => <ExamForm data={data} history={history} />
	},
	{
		path: "/question",
		exact: true,
		main: ({ history }) => <Questions history={history} />
	},
]

export default routes;