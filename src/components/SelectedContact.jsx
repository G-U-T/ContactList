import {useState, useEffect} from 'react'

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

const SelectedContact = ({selectedContactID, setSelectedContactID}) => {

	const [contact, setContact] = useState(null);

	useEffect(() => {
		const fetchContact = async () => {
			try {
				const response = await fetch(API_URL + `/${selectedContactID}`);
				const json = await response.json();
				setContact(json);
			}
			catch(error) {
				console.log(`OH NO: ${error}`);
			}
		};

		fetchContact();
	}, []);

	return (
		contact ? (
		<>
			<button onClick={() => {setSelectedContactID(null)}}>Back</button>
			<table>
				<thead>
				<tr>
					<td>Name</td>
					<td>Username</td>
					<td>Email</td>
					<td>Phone</td>
					<td>Website</td>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>{contact.name}</td>
					<td>{contact.username}</td>
					<td>{contact.email}</td>
					<td>{contact.phone}</td>
					<td>{contact.website}</td>
				</tr>
				</tbody>
			</table>
		</>
		) : (
			<div>...</div>
		)
	);
};

export default SelectedContact;