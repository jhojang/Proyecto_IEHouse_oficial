package com.springboot.api.bulbs.models.dao;

import com.springboot.api.bulbs.models.entity.Room;

import org.springframework.data.repository.CrudRepository;

public interface RoomDao extends CrudRepository<Room, Integer> {
    
}
