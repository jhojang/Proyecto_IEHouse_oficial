package com.springboot.api.bulbs.models.controllers;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Bulb;
import com.springboot.api.bulbs.models.entity.Room;
import com.springboot.api.bulbs.models.service.IBulbService;
import com.springboot.api.bulbs.models.service.IRoomService;
import com.springboot.api.bulbs.models.service.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
public class BulbController {

    @Autowired
    public IUserService userService;
    
    @Autowired
    public IRoomService roomService;

    @Autowired
    public IBulbService bulbService;

    @GetMapping("/bulbs")
    public List<Bulb> list() {
        return bulbService.findAll();
    }

    @GetMapping("/bulbs/{id}")
    public Bulb findById(@PathVariable Integer id) {
        return bulbService.findById(id);
    }

    @PostMapping(path="/bulbs/{idRoom}")
    @ResponseStatus(HttpStatus.CREATED)
    public Bulb create(@RequestBody Bulb bulb, @PathVariable Integer idRoom) {
        Room room = roomService.findById(idRoom);
        bulb.setRoom(room);
        return bulbService.save(bulb);
    }

    @PutMapping("/bulbs/idBulb/{idBulb}/idRoom/{idRoom}")
    @ResponseStatus(HttpStatus.CREATED)
    public Bulb update(@RequestBody Bulb bulb, @PathVariable Integer idBulb, @PathVariable Integer idRoom) {
        Room room = roomService.findById(idRoom);
        Bulb currentBulb = bulbService.findById(idBulb);
        currentBulb.setName(bulb.getName());
        currentBulb.setState(bulb.getState());
        currentBulb.setUser(bulb.getUser());
        currentBulb.setRoom(room);
        return bulbService.save(currentBulb);
    }

    @DeleteMapping("/bulbs/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        bulbService.Delete(id);
    }

}
