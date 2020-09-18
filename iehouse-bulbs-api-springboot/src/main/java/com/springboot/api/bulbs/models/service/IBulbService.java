package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Bulb;

public interface IBulbService {
    
    public List<Bulb> findAll();

    public Bulb findById(Integer id);

    public Bulb save(Bulb bulb);

    public void Delete(Integer id);

}
