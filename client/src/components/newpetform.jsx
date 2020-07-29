import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link } from '@reach/router';

const PetForm = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const CreatePet = e => {
        e.preventDefault();
        const NewestPet = {name, type, description, skill1, skill2, skill3};
        axios.post('http://localhost:8000/api/pets', NewestPet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }else{
                    navigate('/');
                }
            }).catch(err => console.log(err));
    }

    return(
        <div className="container">
            <Link className="btn btn-outline-primary" to="/">Home</Link>
            <h3 className="mt-3">Do you know a pet who needs a home?</h3>
            <div className="row">
                <form className="col-sm-8" onSubmit={CreatePet}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)}/>
                        {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" onChange={e => setType(e.target.value)}/>
                        {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                        {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <h4>Skills: (Optional)</h4>
                        <label>Skill 1</label>
                        <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 2</label>
                        <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 3</label>
                        <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)}/>
                    </div>
                    <input type="submit" className="btn btn-success btn-block mt-3" value="Add New Pet"/>
                </form>
            </div>
        </div>
    );
}   
export default PetForm;