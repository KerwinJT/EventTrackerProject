package com.skilldistillery.event.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Photoshoot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	
	private String location;
	private LocalDate date;
	private double latitude;
	private double longitude;
	
	@Column(name = "shots_taken")
	private int shotsTaken;
	
	@Column(name = "comment_location")
	private String commentLocation;

	@Column(name = "comment_performance")
	private String commentPerformance;
	
	@Column(name = "lenses_used")
	private String lensesUsed;

	public Photoshoot() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public int getShotsTaken() {
		return shotsTaken;
	}

	public void setShotsTaken(int shotsTaken) {
		this.shotsTaken = shotsTaken;
	}

	public String getCommentLocation() {
		return commentLocation;
	}

	public void setCommentLocation(String commentLocation) {
		this.commentLocation = commentLocation;
	}

	public String getCommentPerformance() {
		return commentPerformance;
	}

	public void setCommentPerformance(String commentPerformance) {
		this.commentPerformance = commentPerformance;
	}

	public String getLensesUsed() {
		return lensesUsed;
	}

	public void setLensesUsed(String lensesUsed) {
		this.lensesUsed = lensesUsed;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Photoshoot [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", location=");
		builder.append(location);
		builder.append(", date=");
		builder.append(date);
		builder.append(", latitude=");
		builder.append(latitude);
		builder.append(", longitude=");
		builder.append(longitude);
		builder.append(", shotsTaken=");
		builder.append(shotsTaken);
		builder.append(", commentLocation=");
		builder.append(commentLocation);
		builder.append(", commentPerformance=");
		builder.append(commentPerformance);
		builder.append(", lensesUsed=");
		builder.append(lensesUsed);
		builder.append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Photoshoot other = (Photoshoot) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
