package com.multiserass.service;

import java.util.List;

import com.multiserass.entity.Place;

public interface IPlaceService {
    List<Place> getAllPlaces();
    Place getPlaceById(int placeId);
    boolean addPlace(Place place);
    void updatePlace(Place place);
    void deletePlace(int placeId);
}
