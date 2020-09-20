package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.dao.BulbDao;
import com.springboot.api.bulbs.models.entity.Bulb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BulbServiceImpl implements IBulbService {

    @Autowired
    public BulbDao bulbDao;

    @Override
    @Transactional(readOnly = true)
    public List<Bulb> findAll() {
        return (List<Bulb>) bulbDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Bulb findById(Integer id) {
        return bulbDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Bulb save(Bulb bulb) {
        return bulbDao.save(bulb);
    }

    @Override
    @Transactional
    public void Delete(Integer id) {
        bulbDao.deleteById(id);
    }

    @Override
    public List<Integer> findAllP() {
        return (List<Integer>) bulbDao.findAllP();
    }
    
}
