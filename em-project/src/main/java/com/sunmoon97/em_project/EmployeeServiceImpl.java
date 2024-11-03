package com.sunmoon97.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    List<Employee> employees=new ArrayList<>();

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        employees.add(employee);

        return "Saved Successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeesList = employeeRepository.findAll();

        List<Employee> employees = new ArrayList<>();
        for(EmployeeEntity employee : employeesList) {
            Employee emp = new Employee();
            emp.setId(employee.getId());
            emp.setName(employee.getName());
            emp.setPhone(employee.getPhone());
            emp.setEmail(employee.getEmail());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
       // employees.remove(id);
       EmployeeEntity emp = employeeRepository.findById(id).get();
       employeeRepository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id).get();
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setEmail(employee.getEmail());
        employeeRepository.save(existingEmployee);
        return "Updated Successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(emp, employee);
        return employee;
    }
}
