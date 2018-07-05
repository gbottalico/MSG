package com.multiserass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.multiserass.entity.Visit;
import com.multiserass.service.IVisitService;

@Controller
@RequestMapping("api")
public class FilterController {
	@Autowired
	private IVisitService visitService;
	
	@GetMapping("visit_by_place_and_name/{place_id}/{name}")
	public ResponseEntity<List<Visit>> getVisitById(@PathVariable("place_id") Integer placeId,@PathVariable("name") String name) {
		List<Visit> visits = visitService.getAllVisitByPlaceAndName(placeId, name);
		return new ResponseEntity<List<Visit>>(visits, HttpStatus.OK);
	}
}
