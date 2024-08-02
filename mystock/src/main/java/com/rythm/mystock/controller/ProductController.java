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

import com.rythm.mystock.model.Product;
import com.rythm.mystock.service.ProductService;

@RestController
public class ProductController {
  @Autowired
  ProductService ps;
   @PostMapping("/post/product")
          public String createProduct(@RequestBody Product p){
            return ps.addProduct(p);
          }
          @GetMapping("/get/product")
          public List<Product> readProduct(){
            return ps.getProduct();
          }
          @GetMapping("/get/product/{id}")
          public Optional<Product> readProductById(@PathVariable String id ){
            return ps.getProductId(id);
          }
          @PutMapping("/put/product")
          public String updatePro(@RequestBody Product p){
            return ps.updateProduct(p);
          }
          @DeleteMapping("/delete/product/{id}")
          public String deletePro(@PathVariable("id") String id){
            return ps.deleteProduct(id);
          }
  
}
