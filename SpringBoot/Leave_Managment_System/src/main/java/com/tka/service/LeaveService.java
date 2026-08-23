package com.tka.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.tka.dao.LeaveDao;
import com.tka.entity.Leave;

@Service
public class LeaveService {

	@Autowired
	LeaveDao dao;
	
	public String insertLeave(Leave l) {
		String msg=dao.insertLeave(l);
		return msg;
	}
	
	public String deleteLeave(Integer id) {
		String msg=dao.deleteLeave(id);
		return msg;
	}
    
	public String updateLeave(Leave l, Integer id) {
		String msg=dao.updateLeave(l, id );
		return msg;
	}
    
	public Leave getSingleLeave(Integer id) {
		Leave msg=dao.getSingleLeave(id);
		return msg;
	} 
	
	public List<Leave> getAllLeave() {
		List<Leave> msg=dao.getAllLeave();
		return msg;
	}

}
