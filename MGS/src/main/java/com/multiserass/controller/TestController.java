package com.multiserass.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TestController {

	private static final String esitoOk = "Applicativo online";
	
	@RequestMapping("testPage")
	public String testPage(){
		return esitoOk;
	}
	
}
