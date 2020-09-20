package com.springboot.api.bulbs.models.controllers;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Bulb;
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

    @GetMapping("/users")
    public List<User> findAll() {

        User currentUser = new User();
        List<User> userList = userService.findAll();
        for (int i = 0; i < userList.size(); i++) {
            currentUser = userList.get(i);
            List<Bulb> currentBulbList = currentUser.getBulb();
            Bulb currentBulb = new Bulb();
            for (int j = 0; j < currentBulbList.size(); j++) {
                currentBulb = currentBulbList.get(j);
                currentBulb.setUser(null);
            }
        }
        return userList;
    }

    @GetMapping("/users/{id}")
    public User findById(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @DeleteMapping("users/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }
    
}
