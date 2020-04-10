package com.skilldistillery.event.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EventTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Event events;

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
		events = em.find(Event.class, 1);
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

}
