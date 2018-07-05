package com.multiserass.dao;

import java.util.List;

import com.multiserass.entity.Visit;


public interface IVisitDAO {
    List<Visit> getAllVisits();
    Visit getVisitById(int visitId);
    void addVisit(Visit visit);
    void updateVisit(Visit visit);
    void deleteVisit(int visitId);
    
    List<Visit> getAllVisitByPlaceAndName(int placeId, String name);
}
