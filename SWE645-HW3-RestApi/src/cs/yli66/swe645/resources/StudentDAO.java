package cs.yli66.swe645.resources;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class StudentDAO {
	private static EntityManagerFactory factory;
	private static EntityManager em;
	StudentDAO(){
	}
	//Set
	public void setStudent(StudentBean student) {
		if (student==null)
			return;
		DB stu = new DB();
		stu.setStuid(student.getUid());
		stu.setName(student.getName());
		stu.setAddress(student.getAddress());
		stu.setState(student.getState());
		stu.setCity(student.getCity());
		stu.setZip(student.getZip());
		stu.setEmail(student.getEmail());
		stu.setTel(student.getTel());
		stu.setUrl(student.getUrl());
		stu.setInterested(student.getInterested());
		stu.setLiked(student.getLiked());
		stu.setMonth(student.getMonth());
		stu.setYear(student.getYear());
		stu.setRecommending(student.getRecommending());
		stu.setSubdate(student.getDate());

		System.out.println("stu:"+stu);		
		
		factory = Persistence.createEntityManagerFactory("SWE645");
		em =factory.createEntityManager();
		em.getTransaction().begin();
		try {
			em.persist(stu);
			em.getTransaction().commit();
		} catch (Exception e) {
            e.printStackTrace();
            em.getTransaction().rollback();
        }
		em.close();
		factory.close();
	}
	
	//Get
    public List<StudentBean> getStudent(String uid) throws SQLException {
		factory = Persistence.createEntityManagerFactory("SWE645");
		em =factory.createEntityManager();		
    	//SQL
		String sql = "from DB";
    	if(uid!=null && !uid.isEmpty())
    		sql += " where stuid LIKE '%"+uid+"%'";
    	//Connect
		Query q = em.createQuery(sql);
		System.out.println(sql);
		List<DB> dbList = q.getResultList();
		List<StudentBean> studentList = new ArrayList<StudentBean>();
		for (DB stu: dbList) {
			StudentBean student = new StudentBean();
			student.setUid(stu.getStuid());
			student.setName(stu.getName());
			student.setAddress(stu.getAddress());
			student.setState(stu.getState());
			student.setCity(stu.getCity());
			student.setZip(stu.getZip());
			student.setEmail(stu.getEmail());
			student.setTel(stu.getTel());
			student.setUrl(stu.getUrl());
			student.setInterested(stu.getInterested());
			student.setLiked(stu.getLiked());
			student.setMonth(stu.getMonth());
			student.setYear(stu.getYear());
			student.setRecommending(stu.getRecommending());
			student.setDate(stu.getSubdate());
			studentList.add(student);			
		}
		em.close();
		factory.close();
		return studentList;
    }
    //Create table
    /*private void checkTable() {
		String sql = "create table student(stuid varchar(100), name varchar(100), address varchar(1000), state varchar(100), city varchar(100), zip int, email varchar(100), tel varchar(20), url varchar(1000), interested varchar(20), liked varchar(20), month varchar(10), year int, recommending varchar(1000), subdate varchar(20));";
		Query q = em.createNativeQuery(sql);
		System.out.println(q);
    }*/
}
