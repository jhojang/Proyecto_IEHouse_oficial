package com.springboot.api.bulbs.models.controllers;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Room;
import com.springboot.api.bulbs.models.service.IRoomService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
public class RoomController {

    @Autowired
    public IRoomService roomService;

    @GetMapping("/rooms")
    public List<Room> listRooms() {
        return roomService.findAll();
    }

    @GetMapping("/rooms/{id}")
    public Room findById(@PathVariable Integer id) {
        return roomService.findById(id);
    }

    @PostMapping("/rooms")
    @ResponseStatus(HttpStatus.CREATED)
    public Room create(@RequestBody Room room) {
        return roomService.save(room);
    }

    @PutMapping("/rooms/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Room update(@RequestBody Room room, @PathVariable Integer id) {
        Room currentRoom = roomService.findById(id);
        currentRoom.setName(room.getName());
        return roomService.save(currentRoom);
    }

    @DeleteMapping("/rooms/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        roomService.Delete(id);
    }
    
}
