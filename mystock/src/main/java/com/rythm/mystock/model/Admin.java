package com.rythm.mystock.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
   @Id
   private int AdminId;
   private String AdminName;
   private String AdminPassword;
   
public Admin() {
}
public Admin(int adminId, String adminName, String adminPassword) {
    AdminId = adminId;
    AdminName = adminName;
    AdminPassword = adminPassword;
}
public int getAdminId() {
    return AdminId;
}
public void setAdminId(int adminId) {
    AdminId = adminId;
}
public String getAdminName() {
    return AdminName;
}
public void setAdminName(String adminName) {
    AdminName = adminName;
}
public String getAdminPassword() {
    return AdminPassword;
}
public void setAdminPassword(String adminPassword) {
    AdminPassword = adminPassword;
}
   
}
