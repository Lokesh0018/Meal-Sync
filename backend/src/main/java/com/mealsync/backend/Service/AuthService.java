package com.mealsync.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.task.TaskExecutionProperties.Simple;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.mealsync.backend.Entity.EmployeeEntity;
import com.mealsync.backend.Repository.EmployeeJPA;

@Service
public class AuthService {

    @Autowired
    private EmployeeJPA employeeRepository;

    @Autowired
    private JavaMailSender mailSender;

    public void sendOtp(String email) {
        EmployeeEntity employee = employeeRepository.findByEmail(email);
        if (employee == null) {
            throw new RuntimeException("Employee not found with email: " + email);
        }
        String otp = generateOtp();
        employee.setOtp(otp);
        employeeRepository.save(employee);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP code is: " + otp);
        mailSender.send(message);
    }

    public String generateOtp() {
        return String.valueOf((int)(Math.random() * 900000) + 100000);
    }

    public boolean verifyOtp(String email, String otp) {
        EmployeeEntity employee = employeeRepository.findByEmail(email);
        if (employee == null) {
            throw new RuntimeException("Employee not found with email: " + email);
        }
        return otp.equals(employee.getOtp());
    }

}
