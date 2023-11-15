const ContactRow = ({contact, setSelected}) => {
	return (
	<tr onClick={() => {setSelected(contact.id)}}>
		<td>{contact.name}</td>
		<td>{contact.email}</td>
		<td>{contact.phone}</td>
	</tr>
	);
};

export default ContactRow;