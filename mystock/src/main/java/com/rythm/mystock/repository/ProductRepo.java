package com.rythm.mystock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rythm.mystock.model.Product;
@Repository
public interface ProductRepo extends JpaRepository<Product,String>{

}
