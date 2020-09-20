package com.springboot.api.bulbs.models.dao;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Bulb;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BulbDao extends CrudRepository<Bulb, Integer> {
    
    @Query("select b.id from Bulb b")
    List<Integer> findAllP();

}
