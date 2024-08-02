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
import com.rythm.mystock.model.Admin;
import com.rythm.mystock.service.AdminService;
@RestController
public class AdminController {
   @Autowired
   AdminService as;
    @PostMapping("/post/admin")
          public String createAdmin(@RequestBody  Admin a){
            return as.addAdmin(a);
          }
          @GetMapping("/get/admin")
          public List<Admin> readAdmin(){
            return as.getAdmin();
          }
          @GetMapping("/get/admin/{id}")
          public Optional<Admin> readAdminById(@PathVariable int id ){
            return as.getAdminId(id);
          }
          @PutMapping("/put/admin")
          public String updateAd(@RequestBody Admin a){
            return as.updateAdmin(a);
          }
          @DeleteMapping("/delete/admin/{id}")
          public String deleteAd(@PathVariable("id") int id){
            return as.deleteAdmin(id);
          }

}
