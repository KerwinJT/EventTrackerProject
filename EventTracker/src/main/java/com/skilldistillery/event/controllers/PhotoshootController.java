package com.skilldistillery.event.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.event.entities.Photoshoot;
import com.skilldistillery.event.services.PhotoshootService;

@RestController
@RequestMapping("api")
public class PhotoshootController {
	@Autowired
	private PhotoshootService photoService;

	@GetMapping("photoshoots/index")
	public List<Photoshoot> findAll() {
		return photoService.findAll();
	}

	@GetMapping("photoshoots/{id}")
	public Photoshoot findById(@PathVariable Integer id, HttpServletResponse response) {
		try {
			Photoshoot ps = photoService.findById(id);
			response.setStatus(202);
			return ps;
		} catch (Exception e) {
			response.setStatus(404);
			return null;
		}
	}

	@PostMapping("photoshoots")
	public Photoshoot createPhotoshoot(@RequestBody Photoshoot ps, HttpServletResponse response,
			HttpServletRequest request) {
		try {
			ps = photoService.createNewPhotoshoot(ps);
			response.setStatus(201);
			StringBuffer reqUrl = request.getRequestURL();
			reqUrl.append("/").append(ps.getId());
			response.setHeader("Location", reqUrl.toString());
			return ps;
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@DeleteMapping("photoshoots/{id}")
	public boolean deletePhotshoot(@PathVariable Integer id, HttpServletResponse response) {
		boolean deleted = false;
		try {
			deleted = photoService.deleteById(id);
			if (deleted) {
				response.setStatus(204);
			}
		} catch (Exception e) {
			response.setStatus(409);
			deleted = false;
		}
		return deleted;
	}

	@PutMapping("photoshoots/{id}")
	public Photoshoot replacePhotoshoot(@PathVariable Integer id, @RequestBody Photoshoot ps,
			HttpServletResponse response, HttpServletRequest request) {
		try {
			ps = photoService.updateById(id, ps);
			response.setStatus(202);
			StringBuffer reqUrl = request.getRequestURL();
			reqUrl.append("/").append(ps.getId());
			response.setHeader("Location", reqUrl.toString());
			return ps;
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@GetMapping("photoshoots/search/lenses/{keyword}") // Passes postman
	public List<Photoshoot> findByLenses(@PathVariable String keyword, HttpServletResponse response) {
		try {
			List<Photoshoot> psList = photoService.findByLenses(keyword);
			response.setStatus(200);
			return psList;
		} catch (Exception e) {
			response.setStatus(404);
			return null;

		}
	}

	@GetMapping("photoshoots/search/name/{keyword}") // Passes postman
	public List<Photoshoot> findByName(@PathVariable String keyword, HttpServletResponse response) {
		try {
			List<Photoshoot> psList = photoService.findByNameByKeyword(keyword);
			response.setStatus(200);
			return psList;
		} catch (Exception e) {
			response.setStatus(404);
			return null;

		}
	}

	@GetMapping("photoshoots/search/location/{keyword}") // Passes postman
	public List<Photoshoot> findByLocation(@PathVariable String keyword, HttpServletResponse response) {
		try {
			List<Photoshoot> psList = photoService.findByLocationKeyword(keyword);
			response.setStatus(200);
			return psList;
		} catch (Exception e) {
			response.setStatus(404);
			return null;

		}
	}

	@GetMapping("photoshoots/search/comments/{keyword}") // Passes postman
	public List<Photoshoot> findByComments(@PathVariable String keyword, HttpServletResponse response) {
		try {
			List<Photoshoot> psList = photoService.findByCommentsKeyword(keyword);
			response.setStatus(200);
			return psList;
		} catch (Exception e) {
			response.setStatus(404);
			return null;

		}
	}

//	@GetMapping("photoshoots/search/date/{date}")
//	public List<Photoshoot> findBydat(@PathVariable String data, HttpServletResponse response) {
//		try {
//			List<Photoshoot> psList = photoService.findByCommentsKeyword(keyword);
//			response.setStatus(200);
//			return psList;
//		} catch (Exception e) {
//			response.setStatus(404);
//			return null;
//
//		}
//	}

}
