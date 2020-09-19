package com.springboot.api.bulbs.models.controllers;

import java.util.List;

import com.springboot.api.bulbs.models.entity.User;
import com.springboot.api.bulbs.models.service.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    public IUserService userService;

    @GetMapping("/users/{id}")
    public User findById(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @GetMapping("/users")
    public List<User> findAll() {
        return userService.findAll();
    }

    @DeleteMapping("users/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }
    
}
