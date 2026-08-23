package com.tka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tka.entity.Leave;
import com.tka.service.LeaveService;

@RestController
@RequestMapping("/leaves")
public class LeaveController {

	@Autowired
	LeaveService service;
	
	@PostMapping("/post")
	public String insertLeave(@RequestBody Leave l) {
		String msg=service.insertLeave(l);
		return msg;
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteLeave(@PathVariable  Integer id) {
		String msg=service.deleteLeave(id);
		return msg;
	}
	
	@PutMapping("/update/{id}")
	public String updateLeave(@RequestBody Leave l ,@PathVariable Integer id) {
		String msg=service.updateLeave(l, id);
		return msg;
	}
	
	@GetMapping("getSingleLeave")
	public Leave getSingleLeave(@RequestParam Integer id) {
		Leave msg=service.getSingleLeave(id);
		return msg;
	}
	
	@GetMapping("getAllLeaves")
	public List<Leave> getAllLeave() {
		List<Leave> msg=service.getAllLeave();
		return msg;
	}
}
