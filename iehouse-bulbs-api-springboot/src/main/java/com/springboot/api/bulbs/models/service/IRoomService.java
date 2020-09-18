package com.springboot.api.bulbs.models.service;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Room;

public interface IRoomService {
    
    public List<Room> findAll();

    public Room findById(Integer id);

    public Room save(Room room);

    public void Delete(Integer id);

}
