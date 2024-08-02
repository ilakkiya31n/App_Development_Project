package com.rythm.mystock.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee{
   @Id
   private int EmployeeId;
   private String EmployeeName;
   private String EmployeePassword;
  private String EmployeeEmail;
   private String EmployeePhoneNo;
   
public Employee() {
}
public Employee(int employeeId, String employeeName,String employeePassword, String employeeEmail, String employeePhoneNo) {
    EmployeeId = employeeId;
    EmployeeName = employeeName;
    EmployeePassword = employeePassword;
    EmployeeEmail = employeeEmail;
    EmployeePhoneNo = employeePhoneNo;
}
public String getEmployeePassword() {
    return EmployeePassword;
}
public void setEmployeePassword(String employeePassword) {
    EmployeePassword = employeePassword;
}
public int getEmployeeId() {
    return EmployeeId;
}
public void setEmployeeId(int employeeId) {
    EmployeeId = employeeId;
}
public String getEmployeeName() {
    return EmployeeName;
}
public void setEmployeeName(String employeeName) {
    EmployeeName = employeeName;
}
public String getEmployeeEmail() {
    return EmployeeEmail;
}
public void setEmployeeEmail(String employeeEmail) {
    EmployeeEmail = employeeEmail;
}
public String getEmployeePhoneNo() {
    return EmployeePhoneNo;
}
public void setEmployeePhoneNo(String employeePhoneNo) {
    EmployeePhoneNo = employeePhoneNo;
}

}