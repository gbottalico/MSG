package com.multiserass.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.multiserass.entity.Visit;
import com.multiserass.service.IVisitService;

@Controller
@CrossOrigin(origins = Constants.CROSS_ORIGIN_URL, maxAge=86400)
@RequestMapping("api")
public class FilterController {
	@Autowired
	private IVisitService visitService;
	
	@GetMapping("visit_by_place_and_name")
	public ResponseEntity<List<Visit>> getVisitByPlaceAndName(@RequestParam("place_id") Integer placeId,@RequestParam("name") String name) {
		List<Visit> visits = visitService.getAllVisitByPlaceAndName(placeId, name);
		return new ResponseEntity<List<Visit>>(visits, HttpStatus.OK);
	}
	
	@GetMapping("visit_by_place_and_date")
	public ResponseEntity<List<Visit>> getVisitByPlaceAndDate(@RequestParam("place_id") Integer placeId,@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
		List<Visit> visits = visitService.getAllVisitByPlaceAndDate(placeId, date);
		return new ResponseEntity<List<Visit>>(visits, HttpStatus.OK);
	}
}
