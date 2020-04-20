package com.skilldistillery.event.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.event.entities.Photoshoot;
import com.skilldistillery.event.repositories.PhotoshootRepository;

@Service
public class PhotoshootServiceImpl implements PhotoshootService {

	@Autowired
	private PhotoshootRepository repo;
	
	@Override
	public List<Photoshoot> findAll(){
		return repo.findAll();
	}

	@Override
	public Photoshoot findById(Integer id) {
		Optional<Photoshoot> found = repo.findById(id);
		Photoshoot byId = found.get();
		if (byId != null) {
			return byId;
		}
		return null;
	}

	@Override
	public Photoshoot updateById(Integer id, Photoshoot unmanaged) {
		Photoshoot managed = findById(id);
		if (managed != null && unmanaged != null) {
			if (unmanaged.getName() != null && unmanaged.getName().length() > 0) {
				managed.setName(unmanaged.getName());
			} else {
				managed.setName("Unspecified Name");
			}
			if (unmanaged.getLocation() != null && unmanaged.getLocation().length() > 0) {
				managed.setLocation(unmanaged.getLocation());
			} else { 
				managed.setLocation("Unspecified Location");
			}
			if (unmanaged.getDate() != null) {
				managed.setDate(unmanaged.getDate());
			} else {
				managed.setDate(LocalDate.parse("1970-01-01"));
			}
			if (unmanaged.getLatitude() != null) {
				managed.setLatitude(unmanaged.getLatitude());
			}
			if (unmanaged.getLongitude() != null) {
				managed.setLongitude(unmanaged.getLongitude());
			}
			if (unmanaged.getShotsTaken() != null) {
				managed.setShotsTaken(unmanaged.getShotsTaken());
			}
			if (unmanaged.getCommentLocation() != null) {
				managed.setCommentLocation(unmanaged.getCommentLocation());
			}
			if (unmanaged.getCommentPerformance() != null) {
				managed.setCommentPerformance(unmanaged.getCommentPerformance());
			}
			if (unmanaged.getLensesUsed() != null) {
				managed.setLensesUsed(unmanaged.getLensesUsed());
			}
			managed = repo.save(managed);
		}
		return managed;
	}

	@Override
	public boolean deleteById(Integer id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			deleted = true;
			repo.delete(findById(id));
		}
		return deleted;
	}

	@Override
	public Photoshoot createNewPhotoshoot(Photoshoot unmanaged) {
		Photoshoot toSave = null;
		if (unmanaged != null) {
			if (unmanaged.getName() == null || unmanaged.getName().trim().length() == 0) {
				unmanaged.setName("Unspecified Name");
			}
			if (unmanaged.getLocation() == null || unmanaged.getLocation().trim().length() == 0) {
				unmanaged.setLocation("Location was not specified");
			}
			if (unmanaged.getDate() == null) {
				unmanaged.setDate(LocalDate.now());
			}
			toSave = repo.save(unmanaged);

		}
		return toSave;
	}

	@Override
	public List<Photoshoot> findByLenses(String keyword) {
		if (keyword != null) {
			List<Photoshoot> photoshoots = repo.findByLensesUsedContaining(keyword);
			if(photoshoots.size() > 0) {
				return photoshoots;
			}
		}
		return null;
	}

	@Override
	public List<Photoshoot> findByNameByKeyword(String keyword) {
		if (keyword != null) {
			List<Photoshoot> photoshoots = repo.findByNameContaining(keyword);
			if(photoshoots.size() > 0) {
				return photoshoots;
			}
		}
		return null;
	}

	@Override
	public List<Photoshoot> findByLocationKeyword(String keyword) {
		if (keyword != null) {
			List<Photoshoot> photoshoots = repo.findByLocationContaining(keyword);
			if(photoshoots.size() > 0) {
				return photoshoots;
			}
		}
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Photoshoot> findByCommentsKeyword(String keyword) {
		if(keyword != null) {
			List<Photoshoot> photoshoots = repo.findByCommentLocationContainingOrCommentPerformanceContaining(keyword, keyword);
			if(photoshoots.size() > 0) {
				return photoshoots;
			}
		}
		return null;
	}

//	@Override
//	public List<Photoshoot> findByData(LocalDate date) {
//		if (date != null) {
//			
//		}
//		return null;
//	}

}
