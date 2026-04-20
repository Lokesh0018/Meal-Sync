package com.mealsync.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EmployeeEntity {
    @Id
    private String email;
    private String name;
    private String meal;
    private String otp;

    public EmployeeEntity() {
    }

    public EmployeeEntity(String email,String name,String meal, String otp) {
        this.email = email;
        this.name = name;
        this.meal = meal;
        this.otp = otp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMeal(){
        return meal;
    }

    public void setMeal(String meal) {
        this.meal = meal;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}
