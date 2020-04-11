package com.skilldistillery.event.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class PhotoshootTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Photoshoot events;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		events = em.find(Photoshoot.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		events = null;
	}

	@Test
	void test() {
		assertNotNull(events);
		assertEquals("Photo", events.getName());
	}
	
	@Test
	@DisplayName("Renamed to photoshoot and added fields")
	void test2() {
		assertEquals("Argo Mills, Idaho Springs", events.getLocation());
		assertEquals("2020-01-01", events.getDate().toString());
		assertEquals(39.743722, events.getLatitude());
		assertEquals(-105.506749, events.getLongitude());
		assertEquals(243, events.getShotsTaken());
		assertEquals("Beautiful location. Old Mine", events.getCommentLocation());
		assertEquals("Come back earlier in the day.", events.getCommentPerformance());
		assertEquals("Sony 85 f1.8", events.getLensesUsed());
	}

}
