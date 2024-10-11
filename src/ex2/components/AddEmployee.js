import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeeSlice'; // Import the addEmployee action

const AddEmployee = () => {
    const dispatch = useDispatch();
    
    // State variables for the form fields
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [post, setPost] = useState('');
    const [department, setDepartment] = useState({ code: '', nom: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the new employee object
        const newEmployee = {
            fname,
            lname,
            post,
            department,
        };

        // Dispatch the action to add the employee
        dispatch(addEmployee(newEmployee));

        // Reset form fields
        setFname('');
        setLname('');
        setPost('');
        setDepartment({ code: '', nom: '' });
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prenom:</label>
                    <input
                        type="text"
                        placeholder="Enter first name..."
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        placeholder="Enter last name..."
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Post:</label>
                    <input
                        type="text"
                        placeholder="Enter position..."
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Departement:</label>
                    <select
                        value={department.code}
                        onChange={(e) => setDepartment({ code: e.target.value, nom: e.target.options[e.target.selectedIndex].text })}
                        required
                    >
                        <option value="">Select Department...</option>
                        <option value="101">Development</option>
                        <option value="102">Project Management</option>
                        <option value="103">User Experience</option>
                        <option value="104">Data Analysis</option>
                        <option value="105">Quality Assurance</option>
                    </select>
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
