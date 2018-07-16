package com.multiserass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.multiserass.entity.Visit;
import com.multiserass.service.IVisitService;

@CrossOrigin
@Controller
@RequestMapping("api")
public class VisitController {
	public static final String FORMAT = "dd-MM-yyyy";
	@Autowired
	private IVisitService visitService;
	
	@RequestMapping("visit/{id}")
	public ResponseEntity<Visit> getVisitById(@PathVariable("id") Integer id) {
		Visit visit = visitService.getVisitById(id);
		return new ResponseEntity<Visit>(visit, HttpStatus.OK);
	}
	@RequestMapping("visits")
	public ResponseEntity<List<Visit>> getAllVisits() {
		List<Visit> list = visitService.getAllVisits();
		return new ResponseEntity<List<Visit>>(list, HttpStatus.OK);
	}
	@RequestMapping(value="visit", method=RequestMethod.POST)
	public ResponseEntity<Void> addVisit(@RequestBody Visit visit, UriComponentsBuilder builder) {
        boolean flag = visitService.addVisit(visit);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/visit/{id}").buildAndExpand(visit.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@RequestMapping(value="visit", method=RequestMethod.PUT)
	public ResponseEntity<Visit> updateVisit(@RequestBody Visit visit) {
		visitService.updateVisit(visit);
		return new ResponseEntity<Visit>(visit, HttpStatus.OK);
	}
	@RequestMapping(value="visit/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteVisit(@PathVariable("id") Integer id) {
		visitService.deleteVisit(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}