package com.rythm.mystock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rythm.mystock.model.Admin;
import com.rythm.mystock.repository.AdminRepo;

@Service
public class AdminService {
 @Autowired
 AdminRepo ar;
  public String addAdmin(Admin a)
  {
    ar.save(a);
    return "Added";
  }
  public List<Admin> getAdmin(){
    return ar.findAll();
  }
  public Optional<Admin> getAdminId(int id){
    return ar.findById(id);
  }
  public String updateAdmin(Admin a){
    ar.save(a);
    return "Updated";
  }
  public String deleteAdmin(int id){
    ar.deleteById(id);
    return "Deleted";
  }
}
