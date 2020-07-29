import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';


const ViewPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [likes, setLikes] = useState(0);
    

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

    const remove = () => {
        // console.log(_id);
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    const increaseLikes = (e) => {
        setLikes((likes+1));
    }
    
    return(
        <div className="conainer">
            <Link className="btn btn-outline-primary" to="/">Home</Link>
           <h2 className="mt-3 mb-3">Details about {name}!!!</h2> 
                    <h4>Type: {type}</h4>
                    <h4>Description: {description}</h4>
                    <h4>Skills:</h4>
                        <ul>
                            <li>{skill1}</li>
                            <li>{skill2}</li>
                            <li>{skill3}</li>
                        </ul>
                {
                likes===0 ?
                <button className="btn btn-success text-light" onClick={increaseLikes}> &#128077; Likes: {likes}</button>:
                <button disabled className="btn btn-success text-light"> &#128077; Likes: {likes}</button>
                
                }
                <button className="btn btn-danger text-light" onClick={remove} >Adopt {name}!!</button>
        </div>
            

    );
    
}

export default ViewPet;