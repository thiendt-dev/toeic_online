import React from 'react';
import Users from '../components/pages/Users/users';
import Exams from '../components/pages/Exams/Exams';
import Questions from '../components/pages/Questions/Questions';

const routes = [
	{
		path: "/user",
		exact: true,
		main: ({ history }) => <Users history={history} />
	},
	{
		path: "/exam",
		exact: true,
		main: ({ history }) => <Exams history={history} />
	},
	{
		path: "/question",
		exact: true,
		main: ({ history }) => <Questions history={history} />
	}
]

export default routes;