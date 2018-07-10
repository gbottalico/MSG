package com.multiserass.dao;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.multiserass.entity.Visit;

@Transactional
@Repository
public class VisitDAO implements IVisitDAO {
	@PersistenceContext
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Visit> getAllVisits() {
		String hql = "FROM Visit as visit ORDER BY visit.id";
		return (List<Visit>) entityManager.createQuery(hql).getResultList();
	}

	@Override
	public Visit getVisitById(int visitId) {
		return entityManager.find(Visit.class, visitId);
	}

	@Override
	public void addVisit(Visit visit) {
		entityManager.persist(visit);
	}

	@Override
	public void updateVisit(Visit visit) {
		Visit oldVisit = getVisitById(visit.getId());
		oldVisit.setBadgeNo(visit.getBadgeNo());
		oldVisit.setEntranceDate(visit.getEntranceDate());
		oldVisit.setEntranceTime(visit.getEntranceTime());
		oldVisit.setGuestDocumentNo(visit.getGuestDocumentNo());
		oldVisit.setGuestDocumentType(visit.getGuestDocumentType());
		oldVisit.setGuestName(visit.getGuestName());
		oldVisit.setHostName(visit.getHostName());
		oldVisit.setLeavingTime(visit.getLeavingTime());
		oldVisit.setSocialReason(visit.getSocialReason());
		oldVisit.setPlace(visit.getPlace());
		entityManager.flush();
	}

	@Override
	public void deleteVisit(int visitId) {
		entityManager.remove(getVisitById(visitId));
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Visit> getAllVisitByPlaceAndName(int placeId, String name){
		String formattedName = name.replace("'", "");
		String hql = "FROM Visit as visit "
				+ "WHERE visit.place.id="+placeId+" "
				+ "AND visit.hostName LIKE '%"+formattedName+"%' "
				+ "OR visit.guestName LIKE '%"+formattedName+"%' "
				+ "ORDER BY visit.id";
		return (List<Visit>) entityManager.createQuery(hql).getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Visit> getAllVisitByPlaceAndDate(Integer placeId, LocalDate date) {
		String hql = "FROM Visit as visit "
				+ "WHERE visit.place.id="+placeId+" "
				+ "AND visit.entranceDate= '"+date+"' "
				+ "ORDER BY visit.id";
		return (List<Visit>) entityManager.createQuery(hql).getResultList();
	}
}
