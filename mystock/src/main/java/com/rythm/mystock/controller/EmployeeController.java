package com.rythm.mystock.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.rythm.mystock.model.Employee;
import com.rythm.mystock.service.EmployeeService;
@RestController
public class EmployeeController {
          @Autowired
          EmployeeService es;
          @PostMapping("/post/employee")
          public String create(@RequestBody Employee e){
            return es.addEmployee(e);
          }
          @GetMapping("/get/employee")
          public List<Employee> read(){
            return es.getEmployee();
          }
          @GetMapping("/get/employee/{id}")
          public Optional<Employee> readById(@PathVariable int id ){
            return es.getEmployeeId(id);
          }
          @PutMapping("/put/employee")
          public String update(@RequestBody Employee e){
            return es.updateEmployee(e);
          }
          @DeleteMapping("/delete/employee/{id}")
          public String delete(@PathVariable("id") int id){
            return es.deleteEmployee(id);
          }

}
