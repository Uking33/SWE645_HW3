package cs.yli66.swe645.resources;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class DB {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "stuid")
	private String stuid;
    @Column(name = "name")
	private String name;
    @Column(name = "address")
	private String address;
    @Column(name = "state")
	private String state;
    @Column(name = "city")
	private String city;
    @Column(name = "zip")
	private int zip;
    @Column(name = "email")
	private String email;
    @Column(name = "tel")
	private String tel;
    @Column(name = "url")
	private String url;
    @Column(name = "interested")
	private String interested;
    @Column(name = "liked")
	private String liked;
    @Column(name = "month")
	private String month;
    @Column(name = "year")
	private int year;
    @Column(name = "recommending")
	private int recommending;
    @Column(name = "subdate")
	private String subdate;	

    @Override
    public String toString() {
    	return this.stuid + this.name;
    }
	public String getStuid() {
		return stuid;
	}
	public void setStuid(String stuid) {
		this.stuid = stuid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getZip() {
		return zip;
	}
	public void setZip(int zip) {
		this.zip = zip;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getInterested() {
		return interested;
	}
	public void setInterested(String interested) {
		this.interested = interested;
	}
	public String getLiked() {
		return liked;
	}
	public void setLiked(String liked) {
		this.liked = liked;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getRecommending() {
		return recommending;
	}
	public void setRecommending(int recommending) {
		this.recommending = recommending;
	}
	public String getSubdate() {
		return subdate;
	}
	public void setSubdate(String subdate) {
		this.subdate = subdate;
	}
}

