package com.rythm.mystock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rythm.mystock.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer>{

}