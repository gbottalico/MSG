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

import com.multiserass.entity.Place;
import com.multiserass.service.IPlaceService;

@Controller
@RequestMapping("api")
public class PlaceController {
	@Autowired
	private IPlaceService placeService;
	
	@GetMapping("place/{id}")
	public ResponseEntity<Place> getPlaceById(@PathVariable("id") Integer id) {
		Place place = placeService.getPlaceById(id);
		return new ResponseEntity<Place>(place, HttpStatus.OK);
	}
	@GetMapping("places")
	public ResponseEntity<List<Place>> getAllPlaces() {
		List<Place> list = placeService.getAllPlaces();
		return new ResponseEntity<List<Place>>(list, HttpStatus.OK);
	}
	@PostMapping("place")
	public ResponseEntity<Void> addPlace(@RequestBody Place place, UriComponentsBuilder builder) {
        boolean flag = placeService.addPlace(place);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/place/{id}").buildAndExpand(place.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("place")
	public ResponseEntity<Place> updatePlace(@RequestBody Place place) {
		placeService.updatePlace(place);
		return new ResponseEntity<Place>(place, HttpStatus.OK);
	}
	@DeleteMapping("place/{id}")
	public ResponseEntity<Void> deletePlace(@PathVariable("id") Integer id) {
		placeService.deletePlace(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	} 
}
