package com.rythm.mystock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rythm.mystock.model.Supplier;
import com.rythm.mystock.repository.SupplierRepo;

@Service
public class SupplierService {
    @Autowired
    SupplierRepo sr;
  public String addSupplier(Supplier s)
  {
    sr.save(s);
    return "Added";
  }
  public List<Supplier> getSupplier(){
    return sr.findAll();
  }
  public Optional<Supplier> getSupplierId(String id){
    return sr.findById(id);
  }
  public String updateSupplier(Supplier s){
    sr.save(s);
    return "Updated";
  }
  public String deleteSupplier(String id){
    sr.deleteById(id);
    return "Deleted";
  }
}
