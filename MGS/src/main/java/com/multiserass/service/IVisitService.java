package com.multiserass.service;

import java.time.LocalDate;
import java.util.List;

import com.multiserass.entity.Visit;

public interface IVisitService {
    List<Visit> getAllVisits();
    Visit getVisitById(int visitId);
    boolean addVisit(Visit visit);
    void updateVisit(Visit visit);
    void deleteVisit(int visitId);
    
    List<Visit> getAllVisitByPlaceAndName(int placeId, String name);
	List<Visit> getAllVisitByPlaceAndDate(Integer placeId, LocalDate date);
}
