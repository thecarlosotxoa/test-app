/*
File: UserController.java
Purpose: Handles user login and registration routes for the backend API
*/

package com.example.backend_java;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    // === Registration endpoint ===
    @PostMapping("/register")
    public String register(@RequestParam String username, @RequestParam String password) {
        System.out.println("Registered user: " + username + " / " + password);
        return "User registered: " + username;
    }

    // === Login endpoint ===
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        System.out.println("Login user: " + username + " / " + password);
        return "Login OK for: " + username;
    }
}


/*  
 * Python FastAPI equivalent:
 * from fastapi import FastAPI, Form

# initialize the app
app = FastAPI()

# === Registration endpoint ===
@app.post("/api/users/register")
async def register(username: str = Form(...), password: str = Form(...)):
    print(f"Registered user: {username} / {password}")
    return {"message": f"User registered: {username}"}

# === Login endpoint ===
@app.post("/api/users/login")
async def login(username: str = Form(...), password: str = Form(...)):
    print(f"Login user: {username} / {password}")
    return {"message": f"Login OK for: {username}"}
 */