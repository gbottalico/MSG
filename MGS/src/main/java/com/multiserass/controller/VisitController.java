package com.multiserass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.multiserass.entity.Visit;
import com.multiserass.service.IVisitService;

@Controller
@RequestMapping("api")
public class VisitController {
	@Autowired
	private IVisitService visitService;
	
	@GetMapping("visit/{id}")
	public ResponseEntity<Visit> getVisitById(@PathVariable("id") Integer id) {
		Visit visit = visitService.getVisitById(id);
		return new ResponseEntity<Visit>(visit, HttpStatus.OK);
	}
	@GetMapping("visits")
	public ResponseEntity<List<Visit>> getAllVisits() {
		List<Visit> list = visitService.getAllVisits();
		return new ResponseEntity<List<Visit>>(list, HttpStatus.OK);
	}
	@PostMapping("visit")
	public ResponseEntity<Void> addVisit(@RequestBody Visit visit, UriComponentsBuilder builder) {
        boolean flag = visitService.addVisit(visit);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/visit/{id}").buildAndExpand(visit.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("visit")
	public ResponseEntity<Visit> updateVisit(@RequestBody Visit visit) {
		visitService.updateVisit(visit);
		return new ResponseEntity<Visit>(visit, HttpStatus.OK);
	}
	@DeleteMapping("visit/{id}")
	public ResponseEntity<Void> deleteVisit(@PathVariable("id") Integer id) {
		visitService.deleteVisit(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}