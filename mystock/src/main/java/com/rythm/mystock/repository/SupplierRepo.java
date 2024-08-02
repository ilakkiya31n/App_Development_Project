package com.rythm.mystock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rythm.mystock.model.Supplier;

@Repository
public interface SupplierRepo extends JpaRepository<Supplier,String> {

}
