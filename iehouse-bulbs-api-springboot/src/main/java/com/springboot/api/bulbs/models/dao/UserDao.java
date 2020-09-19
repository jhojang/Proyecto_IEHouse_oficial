package com.springboot.api.bulbs.models.dao;

import com.springboot.api.bulbs.models.entity.User;

import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<User, Integer> {
    
}
