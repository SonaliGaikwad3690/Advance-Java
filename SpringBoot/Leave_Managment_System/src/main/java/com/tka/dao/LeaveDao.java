package com.tka.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tka.entity.Leave;

@Repository
public class LeaveDao {

	@Autowired
	SessionFactory session;
	public String insertLeave(Leave l) {
		Session ss = session.openSession();
		Transaction tr = ss.beginTransaction();
		
		ss.persist(l);
		tr.commit();
		ss.close();
		
		return "Leave is Inserted";
		
	}
	
	public String deleteLeave(Integer id ) {
		Session ss = session.openSession();
		Transaction tr = ss.beginTransaction();
		Leave ll = ss.get(Leave.class, id);
		
		ss.remove(ll);
		tr.commit();
		ss.close();
		return "Leave is Deleted Successfully.....!";
		
	}
	public String updateLeave(Leave l , Integer id ) {
		Session ss = session.openSession();
		Transaction tr = ss.beginTransaction();
		
		Leave ll = ss.get(Leave.class, id);
		ll.setEmployeeName(l.getEmployeeName());
		ll.setDepartment(l.getDepartment());
		ll.setLeaveType(l.getLeaveType());
		ll.setStatus(l.getStatus());
		ll.setToDate(l.getToDate());
		ll.setTotalDays(l.getTotalDays());
		
		ss.merge(ll);
		tr.commit();
		ss.close();
		return "Leave is Update Successfully.....!";
	
      }
	
	  public  Leave getSingleLeave(Integer id ) {
		  Session ss = session.openSession();
		  Transaction tr = ss.beginTransaction();
		  Leave l = ss.get(Leave.class, id);
		  tr.commit();
		  ss.close();
		  return l;
	}
	  
	  public List<Leave> getAllLeave() {
		  Session ss = session.openSession();
		  Transaction tr = ss.beginTransaction();
		  String hqlQuery = "from Leave";
		 Query<Leave> q =  ss.createQuery(hqlQuery,Leave.class);
		 List<Leave> l = q.getResultList();
		  
		  tr.commit();
		  ss.close();
		  return l;
	}
}
