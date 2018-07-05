package com.multiserass.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.multiserass.entity.Place;

@Transactional
@Repository
public class PlaceDAO implements IPlaceDAO{
	@PersistenceContext
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Place> getAllPlaces() {
		String hql = "FROM Place as place ORDER BY place.id";
		return (List<Place>) entityManager.createQuery(hql).getResultList();
	}

	@Override
	public Place getPlaceById(int placeId) {
		return entityManager.find(Place.class, placeId);
	}

	@Override
	public void addPlace(Place place) {
		entityManager.persist(place);
	}

	@Override
	public void updatePlace(Place place) {
		Place oldPlace = getPlaceById(place.getId());
		oldPlace.setAddress(place.getAddress());
		oldPlace.setEmail(place.getEmail());
		oldPlace.setLocation(place.getLocation());
		oldPlace.setName(place.getName());
		oldPlace.setPostalNo(place.getPostalNo());
		oldPlace.setTelephone(place.getTelephone());
		entityManager.flush();
	}

	@Override
	public void deletePlace(int placeId) {
		entityManager.remove(getPlaceById(placeId));
	}

	@Override
	public boolean placeExists(String name) {
		String hql = "FROM Place as place WHERE place.name='"+name+"'";

		int count = entityManager.createQuery(hql).getResultList().size();
		return count > 0 ? true : false;
	}

}
