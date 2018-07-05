package com.multiserass.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multiserass.dao.IPlaceDAO;
import com.multiserass.entity.Place;

@Service
public class PlaceService implements IPlaceService{
	@Autowired
	private IPlaceDAO placeDAO;
	
	@Override
	public List<Place> getAllPlaces() {
		return placeDAO.getAllPlaces();
	}

	@Override
	public Place getPlaceById(int placeId) {
		return placeDAO.getPlaceById(placeId);
	}

	@Override
	public boolean addPlace(Place place) {
		if (placeDAO.placeExists(place.getName())) {
	    	   return false;
		} else {
			placeDAO.addPlace(place);
			return true;
		}
	}

	@Override
	public void updatePlace(Place place) {
		placeDAO.updatePlace(place);
	}

	@Override
	public void deletePlace(int placeId) {
		placeDAO.deletePlace(placeId);
	}
}
