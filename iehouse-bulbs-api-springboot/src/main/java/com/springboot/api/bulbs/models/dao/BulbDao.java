package com.springboot.api.bulbs.models.dao;

import com.springboot.api.bulbs.models.entity.Bulb;

import org.springframework.data.repository.CrudRepository;

public interface BulbDao extends CrudRepository<Bulb, Integer> {
    
}
