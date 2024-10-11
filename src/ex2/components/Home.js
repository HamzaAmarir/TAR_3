import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee, editEmployee } from '../redux/employeeSlice';

const Home = () => {
    const employees = useSelector(state => state.employees.employees);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
        setIsEditing(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editEmployee(currentEmployee));
        setIsEditing(false);
        setCurrentEmployee(null); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEmployee({
            ...currentEmployee,
            [name]: value,
        });
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Post</th>
                        <th>Departement</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.post}</td>
                            <td>{emp.department.nom}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                                <button className="btn btn-primary" onClick={() => handleEdit(emp)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditing && currentEmployee && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Employee</h5>
                                <button type="button" className="close" onClick={() => setIsEditing(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group">
                                        <label>Prenom:</label>
                                        <input
                                            type="text"
                                            name="fname"
                                            className="form-control"
                                            value={currentEmployee.fname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nom:</label>
                                        <input
                                            type="text"
                                            name="lname"
                                            className="form-control"
                                            value={currentEmployee.lname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Post:</label>
                                        <input
                                            type="text"
                                            name="post"
                                            className="form-control"
                                            value={currentEmployee.post}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Departement:</label>
                                        <input
                                            type="text"
                                            name="department"
                                            className="form-control"
                                            value={currentEmployee.department.nom}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
