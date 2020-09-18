package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.dao.RoomDao;
import com.springboot.api.bulbs.models.entity.Room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomServiceImpl implements IRoomService {

    @Autowired
    public RoomDao roomDao;

    @Override
    public List<Room> findAll() {
        return (List<Room>) roomDao.findAll();
    }

    @Override
    public Room findById(final Integer id) {
        return roomDao.findById(id).orElse(null);
    }

    @Override
    public Room save(final Room room) {
        return roomDao.save(room);
    }

    @Override
    public void Delete(final Integer id) {
        roomDao.deleteById(id);
    }
    
}
