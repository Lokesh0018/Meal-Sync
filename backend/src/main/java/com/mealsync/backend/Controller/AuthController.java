package com.mealsync.backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mealsync.backend.DTO.AuthDTO;
import com.mealsync.backend.Service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RequestMapping("/auth")
@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/send-otp")
    public ResponseEntity<String> postMethodName(@RequestBody String email) {
        try {
            authService.sendOtp(email);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending OTP: " + e.getMessage());
        }
        return ResponseEntity.ok().body("OTP sent successfully");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody AuthDTO otpRequest) {
        try {
            boolean isValid = authService.verifyOtp(otpRequest.getEmail(), otpRequest.getOtp());
            if (isValid) {
                return ResponseEntity.ok().body("OTP verified successfully");
            } else {
                return ResponseEntity.status(400).body("Invalid OTP");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error verifying OTP: " + e.getMessage());
        }
    }
    
}
