import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:9090/employees';

const EmployeeService = {
    getEmployees: async () => {
        return await axios.get(EMPLOYEE_API_BASE_URL);
    },
    getEmployeeById: async (id) => {
        return await axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
    },
    saveEmployee: async (employee) => {
        return await axios.post(EMPLOYEE_API_BASE_URL, employee);
    },
    updateEmployee: async (id, employee) => {
        return await axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
    },
    deleteEmployeeById: async (id) => {
        return await axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
    },
};

export default EmployeeService;
