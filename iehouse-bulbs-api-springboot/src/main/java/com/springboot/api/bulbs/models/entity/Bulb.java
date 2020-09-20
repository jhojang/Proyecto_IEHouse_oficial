package com.springboot.api.bulbs.models.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="bombillo")
public class Bulb implements Serializable {
    
    private static final long serialVersionUID = -5718841281527438381L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;
    private boolean state;

	@ManyToOne
	@JoinColumn(name = "id_room")
	Room room;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name = "bombillo_user",
				joinColumns = @JoinColumn(name = "id_bombillo"),
				inverseJoinColumns = @JoinColumn(name = "id_user"))
	public List<User> user;

	public Integer getId() {
		return id;
	}
	public void setId(final Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(final String name) {
		this.name = name;
	}
	public boolean getState() {
		return state;
	}
	public void setState(final boolean state) {
		this.state = state;
	}
	public Room getRoom() {
		return room;
	}
	public void setRoom(final Room room) {
		this.room = room;
	}
	public List<User> getUser() {
		return user;
	}
	public void setUser(final List<User> user) {
		this.user = user;
	}

}
