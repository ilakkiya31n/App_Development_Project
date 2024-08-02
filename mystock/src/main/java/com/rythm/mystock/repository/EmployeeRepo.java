package com.rythm.mystock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rythm.mystock.model.Employee;
@Repository
public interface EmployeeRepo  extends JpaRepository<Employee,Integer>{

    
}