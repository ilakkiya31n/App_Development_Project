package com.rythm.mystock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rythm.mystock.model.Employee;
import com.rythm.mystock.repository.EmployeeRepo;

@Service
public class EmployeeService {
  @Autowired
  EmployeeRepo er;
  public String addEmployee(Employee e)
  {
    er.save(e);
    return "Added";
  }
  public List<Employee> getEmployee(){
    return er.findAll();
  }
  public Optional<Employee> getEmployeeId(int id){
    return er.findById(id);
  }
  public String updateEmployee(Employee e){
    er.save(e);
    return "Updated";
  }
  public String deleteEmployee(int id){
    er.deleteById(id);
    return "Deleted";
  }
}
