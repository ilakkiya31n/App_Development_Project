package com.rythm.mystock.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class HelpSupport {
    @Id
    private String Problem;
    private String ProblemDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
    
    public HelpSupport() {
    }
    public HelpSupport(String problem, String problemDescription) {
        Problem = problem;
        ProblemDescription = problemDescription;
    }
    public String getProblem() {
        return Problem;
    }
    public void setProblem(String problem) {
        Problem = problem;
    }
    public String getProblemDescription() {
        return ProblemDescription;
    }
    public void setProblemDescription(String problemDescription) {
        ProblemDescription = problemDescription;
    }
    public Supplier getSupplier() {
        return supplier;
    }
    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }
    
    
}
