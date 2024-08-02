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

import com.rythm.mystock.model.Supplier;
import com.rythm.mystock.service.SupplierService;

@RestController
public class SupplierController {
       @Autowired
       SupplierService ss;
        @PostMapping("/post/supplier")
          public String createSupplier(@RequestBody Supplier s){
            return ss.addSupplier(s);
          }
          @GetMapping("/get/supplier")
          public List<Supplier> readSupplier(){
            return ss.getSupplier();
          }
          @GetMapping("/get/supplier/{id}")
          public Optional<Supplier> readSupplierById(@PathVariable String id ){
            return ss.getSupplierId(id);
          }
          @PutMapping("/put/supplier")
          public String updateSup(@RequestBody Supplier s){
            return ss.updateSupplier(s);
          }
          @DeleteMapping("/delete/supplier/{id}")
          public String deleteSup(@PathVariable("id") String id){
            return ss.deleteSupplier(id);
          }
}
