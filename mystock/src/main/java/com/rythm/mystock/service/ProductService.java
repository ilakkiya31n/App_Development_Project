package com.rythm.mystock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.rythm.mystock.model.Product;
import com.rythm.mystock.repository.ProductRepo;

@Service
public class ProductService {
    @Autowired
    ProductRepo pr;
     public String addProduct(Product p)
  {
    pr.save(p);
    return "Added";
  }
  public List<Product> getProduct(){
    return pr.findAll();
  }
  public Optional<Product> getProductId(String id){
    return pr.findById(id);
  }
  public String updateProduct(Product p){
    pr.save(p);
    return "Updated";
  }
  public String deleteProduct(String id){
    pr.deleteById(id);
    return "Deleted";
  }
}
