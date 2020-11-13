import React, {useState, useEffect} from 'react';
import users from '../../util/users.json';
import useFormattedData from '../../hooks/useFormattedData'
import { makeStyles } from "@material-ui/core/styles";


const useStyles:any = makeStyles(() => ({
	container: {
	  flex: 4,
	  flexDirection: 'column',
	  backgroundColor: 'transparent',
	  padding: 5,
	  margin: 5,
	},
	item: {
	  flex: 1,
	  flexDirection: 'column',
	  marginTop: 5,
	  minHeight: 10,
	  minWidth: 300,
	  listStyleType: 'none',
	  padding: 10,
	  margin: 3,
	  backgroundColor: 'white',
	  borderRadius: 15,
	  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
	  shadowOpacity: 0.25,
	  elevation: 5,
	  cursor: 'pointer',
	}
  }));

const UseFormattedPage = () => {
	const [ formatted, sortBy, filter, search ] = useFormattedData(users);
	const styles = useStyles();

	useEffect(() => {
		search('Erastus');
		filter(({ zip }:any) => zip > 550);
		sortBy('firstName');
	}, []);

	return (
		<div  className={styles.container}>
			{formatted.map(({ id, firstName, lastName, birthdate }:any) => (
				<div className={styles.item} key={id}>
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