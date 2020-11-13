import React, {useState, useEffect} from 'react';
import users from '../../util/users.json';
import useFormattedData from '../../hooks/useFormattedData'

const UseFormattedPage = () => {
	const [ formatted, sortBy, filter, search ] = useFormattedData(users);

	useEffect(() => {
		search('Erastus');
		filter(({ zip }:any) => zip > 550);
		sortBy('firstName');
	}, []);

	return (
		<div>
			{formatted.map(({ id, firstName, lastName, birthdate }:any) => (
				<div key={id}>
					<div>
						{firstName} {lastName}
					</div>
					<div>{birthdate}</div>
				</div>
			))}
		</div>
	);
};


export default UseFormattedPage;