import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const EmployeeList = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log("Error fetching employees:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = async (e, id) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                await EmployeeService.deleteEmployeeById(id);
                setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
            } catch (error) {
                console.log("Error deleting employee:", error);
            }
        }
    };

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

    return (
        <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                <button
                    onClick={() => navigate("/addEmployee")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-200">
                    Add Employee 👨🏼‍💻
                </button>
            </div>

            <div>
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left uppercase font-semibold">Name</th>
                            <th className="px-6 py-3 text-left uppercase font-semibold">Phone</th>
                            <th className="px-6 py-3 text-left uppercase font-semibold">Email</th>
                            <th className="px-6 py-3 text-left uppercase font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading ? (
                            employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-black">{employee.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-black">{employee.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-black">{employee.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        <button 
                                            onClick={(e) => editEmployee(e, employee.id)}
                                            className='text-blue-500 hover:text-blue-700 mr-4'>
                                            Edit 📝
                                        </button>
                                        <button 
                                            onClick={(e) => deleteEmployee(e, employee.id)}
                                            className='text-red-500 hover:text-red-700'>
                                            Delete 🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
