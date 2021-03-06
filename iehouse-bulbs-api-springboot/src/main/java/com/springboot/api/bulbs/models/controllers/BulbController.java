package com.springboot.api.bulbs.models.controllers;

import java.util.List;

import com.springboot.api.bulbs.models.entity.Bulb;
import com.springboot.api.bulbs.models.entity.Room;
import com.springboot.api.bulbs.models.entity.User;
import com.springboot.api.bulbs.models.service.IBulbService;
import com.springboot.api.bulbs.models.service.IRoomService;
import com.springboot.api.bulbs.models.service.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
public class BulbController {

    @Autowired
    public IUserService userService;
    
    @Autowired
    public IRoomService roomService;

    @Autowired
    public IBulbService bulbService;

    // @GetMapping("/bulbs")
    // public List<Bulb> list() {
    //     List<Bulb> Bulblist = bulbService.findAll();
    //     return Bulblist;
    // }

    @GetMapping("/bulbs")
    public List<Bulb> list() {
        Bulb currentBulb = new Bulb();
        List<Bulb> Bulblist = bulbService.findAll();
        for (int i = 0; i < Bulblist.size(); i++) {
            currentBulb = Bulblist.get(i);
            List<User> currentUserList = currentBulb.getUser();
            User currentUser = new User();
            for (int j = 0; j < currentUserList.size(); j++) {
                currentUser = currentUserList.get(j);
                currentUser.setBulb(null);
            }
        }
        
        
        return Bulblist;
    }

    // @GetMapping("/bulbsp")
    // public List<Integer> listP() {
    //     return bulbService.findAllP();
    // }

    @GetMapping("/bulbs/{id}")
    public Bulb findById(@PathVariable Integer id) {
        Bulb currentBulb = bulbService.findById(id);
        List<User> currentUserList = currentBulb.getUser();
        User currentUser = new User();
        for (int i = 0; i < currentUserList.size(); i++) {
            currentUser = currentUserList.get(i);
            currentUser.setBulb(null);
        }

        return currentBulb;
    }

    // @PostMapping(path="/bulbs/{idRoom}")
    // @ResponseStatus(HttpStatus.CREATED)
    // public Bulb create(@RequestBody Bulb bulb, @PathVariable Integer idRoom) {
    //     Room room = roomService.findById(idRoom);
    //     bulb.setRoom(room);
    //     return bulbService.save(bulb);
    // }

    @PostMapping(path="/bulbs/{idRoom}")
    @ResponseStatus(HttpStatus.CREATED)
    public Bulb create(@RequestBody Bulb bulb, @PathVariable Integer idRoom) {
        Room room = roomService.findById(idRoom);
        bulb.setRoom(room);
        return bulbService.save(bulb);
    }

    @PutMapping("/bulbs/{idBulb}")
    @ResponseStatus(HttpStatus.CREATED)
    public Bulb setState(@RequestBody Bulb bulb, @PathVariable Integer idBulb) {
        Bulb currentBulb = bulbService.findById(idBulb);
        currentBulb.setState(bulb.getState());
        currentBulb = bulbService.save(currentBulb);
        currentBulb.setUser(null);
        return currentBulb;
    }

    @PutMapping("/bulbs/idBulb/{idBulb}/idRoom/{idRoom}")
    @ResponseStatus(HttpStatus.CREATED)
    public Bulb update(@RequestBody Bulb bulb, @PathVariable Integer idBulb, @PathVariable Integer idRoom) {
        Room room = roomService.findById(idRoom);
        Bulb currentBulb = bulbService.findById(idBulb);
        currentBulb.setName(bulb.getName());
        // currentBulb.setState(bulb.getState());
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
