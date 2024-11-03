import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log("Saved employee:", response);
                navigate("/");
            })
            .catch((error) => {
                console.log("Error saving employee:", error);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            name: '',
            phone: '',
            email: '',
        });
    };

    return (
        <div className='max-w-xl mx-auto bg-white shadow-lg rounded-lg my-20 p-8'>
            <h2 className='text-3xl font-semibold text-center text-slate-800 mb-6'>Add New Employee 🧑🏼‍💻</h2>
            <form onSubmit={saveEmployee}>
                <div className='flex flex-col space-y-4'>
                    <input
                        type='text'
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        className="border border-slate-300 rounded-lg py-2 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder='Name'
                        required
                    />
                    <input
                        type='tel'
                        name='phone'
                        value={employee.phone}
                        onChange={handleChange}
                        className="border border-slate-300 rounded-lg py-2 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder='Phone'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        value={employee.email}
                        onChange={handleChange}
                        className="border border-slate-300 rounded-lg py-2 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder='Email'
                        required
                    />
                </div>
                <div className='flex justify-between my-6'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200'>
                        Save
                    </button>
                    <button 
                        type='button'
                        onClick={reset}
                        className='bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition duration-200'>
                        Clear
                    </button>
                    <button 
                        type='button'
                        onClick={() => navigate("/")}
                        className='bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
