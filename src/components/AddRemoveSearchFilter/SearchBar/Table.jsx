import React from 'react';

const Table = ({data}) => {
	return (
		<div>
			<table style={{ border: '1px solid black', marginTop: '10px' }}>
				<thead>
					<tr>
						<th style={{ padding: '10px' }}>Name</th>
						<th style={{ padding: '10px' }}>Surname</th>
						<th style={{ padding: '10px' }}>Email</th>
					</tr>
				</thead>
				<tbody>
					{data.map(user =>
						<tr key={user.id}>
							<td>
								{user.first_name}
							</td>
							<td>
								{user.last_name}
							</td>
							<td>
								{user.email}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
