import React from 'react';
import Pagination from './Pagination';

const Table = ({ data }) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
                        <th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Gender</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{data && data.length > 0
						? data.map(user =>
								<tr key={user.id}>
                                    <td>
										{user.id}
									</td>
									<td>	
										{user.first_name}
									</td>
									<td>
										{user.last_name}
									</td>
									<td>
										{user.gender}
									</td>
									<td>
										{user.email}
									</td>
								</tr>,
							)
						: 'Data not found'}
				</tbody>
			</table>
            <Pagination  itemPerPage={10} items={data.length}/>
		</div>
	);
};

export default Table;
