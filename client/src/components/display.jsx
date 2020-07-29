import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Display = props => {

    const [pets, setPets] = useState([]);

    const fetchPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res);
                setPets(res.data);
                
            }).catch(err => console.log(err));
            
    }

    useEffect( () => {
       fetchPets();
    }, []);


    return(
        <div>
            <h3 className="mt-3">These pets are looking for a good home!</h3>
            <Link className="btn btn-outline-primary mt-3" to="/new">Add a Pet</Link>
           {pets.map( (pet, i) =>
                 <table className="table mt-4" key={i}>
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{pet.name}</th>
                            <td>{pet.type}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={`/edit/${pet._id}`}>Edit</Link>
                                <Link className="btn btn-outline-primary" to={`/view/${pet._id}`}>Details</Link>
                            </td>
                        </tr>
                    </tbody>
               </table>
            )}
        </div>
    );
}

export default Display;