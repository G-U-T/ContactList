import {React, useState, useEffect} from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
	{ id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
	{ id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
	{ id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

const ContactList = () => {
	const [contacts, setContacts] = useState(dummyContacts);

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await fetch(API_URL);
				const json = await response.json();
				setContacts(json);
				console.log(contacts);
			}
			catch(error) {
				console.log(`OH NO: ${error}`);
			}
		};

		fetchContacts();
	}, []);

	return (
		<table>
			<thead>
				<tr><th colSpan="3">
					Contact List	
				</th></tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
				{
					dummyContacts.map((contact) => {
						return (
						<ContactRow contact={contact} key={`Contact` + contact.id}></ContactRow>
						);
					})
				}
			</tbody>
		</table>
	);
};

export default ContactList;