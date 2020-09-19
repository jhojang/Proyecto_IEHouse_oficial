package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.entity.User;

public interface IUserService {

    public List<User> findAll();
    
    public User findById(Integer id);

    public void delete(Integer id);

}
