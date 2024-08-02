package com.rythm.mystock.model;

import jakarta.persistence.*;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Supplier {
    @Id
    private String SupplierId;
    private String SupplierName;
    private String SupplierEmailAddress;
    private String SupplierPhoneNo;
    private String SupplierAddress;
    
    @OneToMany(mappedBy = "supplier", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<Product> products;
    @OneToMany(mappedBy = "supplier", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<HelpSupport> helpsupports;

    public Supplier(String supplierId, String supplierName, String supplierEmailAddress, String supplierPhoneNo, String supplierAddress) {
        SupplierId = supplierId;
        SupplierName = supplierName;
        SupplierEmailAddress = supplierEmailAddress;
        SupplierPhoneNo = supplierPhoneNo;
        SupplierAddress = supplierAddress;
    }

    public Supplier() {
    }

    public String getSupplierId() {
        return SupplierId;
    }

    public void setSupplierId(String supplierId) {
        SupplierId = supplierId;
    }

    public String getSupplierName() {
        return SupplierName;
    }

    public void setSupplierName(String supplierName) {
        SupplierName = supplierName;
    }

    public String getSupplierEmailAddress() {
        return SupplierEmailAddress;
    }

    public void setSupplierEmailAddress(String supplierEmailAddress) {
        SupplierEmailAddress = supplierEmailAddress;
    }

    public String getSupplierPhoneNo() {
        return SupplierPhoneNo;
    }

    public void setSupplierPhoneNo(String supplierPhoneNo) {
        SupplierPhoneNo = supplierPhoneNo;
    }

    public String getSupplierAddress() {
        return SupplierAddress;
    }

    public void setSupplierAddress(String supplierAddress) {
        SupplierAddress = supplierAddress;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    public Set<HelpSupport> getHelpsupports() {
        return helpsupports;
    }

    public void setHelpsupports(Set<HelpSupport> helpsupports) {
        this.helpsupports = helpsupports;
    }
}
