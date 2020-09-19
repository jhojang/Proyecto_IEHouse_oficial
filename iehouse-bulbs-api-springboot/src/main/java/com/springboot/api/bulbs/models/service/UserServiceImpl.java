package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.dao.UserDao;
import com.springboot.api.bulbs.models.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    public UserDao userDao;

    @Override
    public User findById(Integer id) {
        return userDao.findById(id).orElse(null);
    }

    @Override
    public List<User> findAll() {
        return (List<User>) userDao.findAll();
    }

    @Override
    public void delete(Integer id) {
        userDao.deleteById(id);
    }
    
}
