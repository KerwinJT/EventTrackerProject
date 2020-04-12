package com.skilldistillery.event.services;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.event.entities.Photoshoot;

public interface PhotoshootService {
	//
	List<Photoshoot> findAll();
	//find by id - List
	Photoshoot findById(Integer id);
	
	//update by id, using a unmanaged photoshoot- Single
	Photoshoot updateById(Integer id, Photoshoot unmanaged);
	
	//delete by id - Single
	boolean deleteById(Integer id);
	
	//create new Single
	Photoshoot createNewPhotoshoot(Photoshoot unmanaged);
	
	//find by lenses - List
	List<Photoshoot> findByLenses(String keyword); 
	
	//find by name keyword - List
	List<Photoshoot> findByNameByKeyword(String keyword);
	
	//find by location keyword - List
	List<Photoshoot> findByLocationKeyword(String keyword);
	
	//find by both comments keyword - List
	List<Photoshoot> findByCommentsKeyword(String keyword);
	
	//find by date - List
//	List<Photoshoot> findByData(LocalDate date);
}
