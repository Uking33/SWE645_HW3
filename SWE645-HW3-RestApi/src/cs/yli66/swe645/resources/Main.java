package cs.yli66.swe645.resources;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Path("/")
public class Main {
	private static StudentDAO dao = null;
    public Main() {
        super();
        if(dao==null)
        	dao = new StudentDAO();
    }

	@GET
	@Path("list")
	@Produces("text/plain")
	public String getStudent(@QueryParam("uid")String id) throws SQLException {
		if(id==null)
			id="";
		List<StudentBean> studentList = dao.getStudent(id);
		String json = new Gson().toJson(studentList);
		return json;
	}

	@POST
	@Path("insert")
	@Consumes("application/x-www-form-urlencoded")
	public void postStudent(String json){
		//StudentBean
		System.out.println(json);
		Gson gson=new Gson();
        Map<String, Object> map = gson.fromJson(json, new TypeToken<Map<String, Object>>() {}.getType());
		StudentBean student = new StudentBean();
		String t="";
		student.setUid((String)map.get("uid"));
		student.setName((String)map.get("name"));
		student.setAddress((String)map.get("address"));
		student.setState((String)map.get("state"));
		student.setCity((String)map.get("city"));
		t = (String) map.get("zip");
		if(!t.isEmpty())
			student.setZip(Integer.parseInt(t));
		student.setEmail((String)map.get("email"));
		student.setTel((String) map.get("tel"));
		student.setUrl((String)map.get("url"));
		student.setInterested((String)map.get("interested"));
		student.setLiked((String)map.get("liked"));
		student.setMonth((String)map.get("month"));
		t = (String) map.get("year");
		if(!t.isEmpty())
			student.setYear(Integer.parseInt(t));		
		t = (String) map.get("recommending");
		if(!t.isEmpty())
			student.setRecommending(Integer.parseInt(t));		
		student.setDate((String) map.get("date"));
		dao.setStudent(student);
	}

}
