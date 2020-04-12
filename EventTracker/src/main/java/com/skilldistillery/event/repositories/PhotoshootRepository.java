package com.skilldistillery.event.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.event.entities.Photoshoot;

public interface PhotoshootRepository extends JpaRepository<Photoshoot, Integer> {

	List<Photoshoot> findByDate(LocalDate date);
	List<Photoshoot> findByLocationContaining(String keyword);
	List<Photoshoot> findByNameContaining(String keyword);
	List<Photoshoot> findByCommentLocationContainingOrCommentPerformanceContaining(String keyword, String keyword2);
	List<Photoshoot> findByLensesUsedContaining(String keyword);
}
