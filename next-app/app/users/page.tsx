import React from 'react'

interface User {
	id: number;
	name: string;
	email: string;
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users',
		{
			cache: 'no-cache',
		});
	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<p>Generated on {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
			<table className='table table-zebra'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>email</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email.toLocaleLowerCase()}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default UsersPage