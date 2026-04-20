package com.mealsync.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mealsync.backend.Entity.EmployeeEntity;

public interface EmployeeJPA extends JpaRepository<EmployeeEntity, String>{

    EmployeeEntity findByEmail(String email);
    
}
