import axios from "axios";
import { react, useEffect, useState } from "react";
import './crud.css'


export default function Kontakdata() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/binari-harish/user/').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    
    return (
        <>
        <h1>List data</h1>
    <div class="crud">
        
	<table>
		<thead>
			<tr>
				<th>Nama</th>
				<th>No Telp</th>
				<th>Email</th>
				<th>Opsi</th>
				<th>Pesan</th>
			</tr>
		</thead>
		<tbody>
        {users.map((user, key) => 
            <tr key={key} className="text-center">
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.option}</td>
                <td>{user.message}</td>
            </tr>

        )}
        </tbody>
    </table>
    </div>
        
        </>
        
    )
}