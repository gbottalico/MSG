package com.multiserass.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multiserass.dao.IVisitDAO;
import com.multiserass.entity.Visit;
import com.multiserass.utils.DateUtils;

@Service
public class VisitService implements IVisitService {
	@Autowired
	private IVisitDAO visitDAO;
	
	@Override
	public List<Visit> getAllVisits() {
		return visitDAO.getAllVisits();
	}

	@Override
	public Visit getVisitById(int visitId) {
		return visitDAO.getVisitById(visitId);
	}

	@Override
	public boolean addVisit(Visit visit) {
		if(visit.getLeavingDate()!=null) {
			List<LocalDate> dates = DateUtils.getDatesInPeriod(visit.getEntranceDate(), visit.getLeavingDate().plusDays(1));
			dates.forEach(date -> {
				Visit newVisit = visit.clone();
				newVisit.setEntranceDate(date);
				newVisit.setLeavingTime(null);
				if(!visit.getEntranceDate().isBefore(newVisit.getEntranceDate())) {
					newVisit.setEntranceTime(null);
				}
				visitDAO.addVisit(newVisit);
			});
		} else {
			visitDAO.addVisit(visit);
		}
		
		return true;
	}
	@Override
	public void updateVisit(Visit visit) {
		visitDAO.updateVisit(visit);
	}

	@Override
	public void deleteVisit(int visitId) {
		visitDAO.deleteVisit(visitId);
	}

	@Override
	public List<Visit> getAllVisitByPlaceAndName(int placeId, String name) {
		return visitDAO.getAllVisitByPlaceAndName(placeId, name);
	}

	@Override
	public List<Visit> getAllVisitByPlaceAndDate(Integer placeId, LocalDate date) {
		return visitDAO.getAllVisitByPlaceAndDate(placeId, date);
	}
}
