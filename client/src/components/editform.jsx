import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link } from '@reach/router';


const EditPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        console.log(props._id);
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            }).catch(err => console.log(err));
    }, [props._id]);

    const UpdatePet = e => {
        e.preventDefault();
        const updatedPet = {name, type, description, skill1, skill2, skill3};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, updatedPet)
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
            <h3 className="mt-3">Edit {name}</h3>
            <div className="row">
                <form className="col-sm-8" onSubmit={UpdatePet}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                        {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" value={type} onChange={e => setType(e.target.value)}/>
                        {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Skill 1</label>
                        <input type="text" className="form-control" value={skill1} onChange={e => setSkill1(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 2</label>
                        <input type="text" className="form-control" value={skill2} onChange={e => setSkill2(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 3</label>
                        <input type="text" className="form-control" value={skill3} onChange={e => setSkill3(e.target.value)}/>
                    </div>
                    <input type="submit" className="btn btn-success btn-block mt-3" value="Update Pet Info"/>
                </form>
            
            </div>
        </div>
    );
}   
export default EditPet;