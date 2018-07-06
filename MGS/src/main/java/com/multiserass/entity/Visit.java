package com.multiserass.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="visit")
public class Visit implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int id;
	@Column(name="badge_no")
	private String badgeNo;
	@Column(name="host_name")
	private String hostName;
	@Column(name="guest_name")
	private String guestName;
	@Column(name="guest_document_type")
	private String guestDocumentType;
	@Column(name="guest_document_no")
	private String guestDocumentNo;
	@Column(name="entrance_date")
	private LocalDate entranceDate;
	@Transient
	private LocalDate leavingDate;
	@Column(name="entrance_time")
	private LocalTime entranceTime;
	@Column(name="leaving_time")
	private LocalTime leavingTime;
	@Column(name="social_reason")
	private String socialReason;
	@ManyToOne
	@JoinColumn(name = "place_id")
	private Place place;
	
	public Visit() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBadgeNo() {
		return badgeNo;
	}
	public void setBadgeNo(String badgeNo) {
		this.badgeNo = badgeNo;
	}
	public String getHostName() {
		return hostName;
	}
	public void setHostName(String hostName) {
		this.hostName = hostName;
	}
	public String getGuestName() {
		return guestName;
	}
	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}
	public String getGuestDocumentType() {
		return guestDocumentType;
	}
	public void setGuestDocumentType(String guestDocumentType) {
		this.guestDocumentType = guestDocumentType;
	}
	public String getGuestDocumentNo() {
		return guestDocumentNo;
	}
	public void setGuestDocumentNo(String guestDocumentNo) {
		this.guestDocumentNo = guestDocumentNo;
	}
	public LocalDate getEntranceDate() {
		return entranceDate;
	}
	public void setEntranceDate(LocalDate entranceDate) {
		this.entranceDate = entranceDate;
	}
	public LocalDate getLeavingDate() {
		return leavingDate;
	}
	public void setLeavingDate(LocalDate leavingDate) {
		this.leavingDate = leavingDate;
	}
	public LocalTime getEntranceTime() {
		return entranceTime;
	}
	public void setEntranceTime(LocalTime entranceTime) {
		this.entranceTime = entranceTime;
	}
	public LocalTime getLeavingTime() {
		return leavingTime;
	}
	public void setLeavingTime(LocalTime leavingTime) {
		this.leavingTime = leavingTime;
	}
	public String getSocialReason() {
		return socialReason;
	}
	public void setSocialReason(String socialReason) {
		this.socialReason = socialReason;
	}
	public Place getPlace() {
		return place;
	}
	public void setPlace(Place place) {
		this.place = place;
	}
	public Visit clone() {
		Visit newVisit = new Visit();
		newVisit.setBadgeNo(this.getBadgeNo());
		newVisit.setEntranceDate(this.getEntranceDate());
		newVisit.setEntranceTime(this.getEntranceTime());
		newVisit.setGuestDocumentNo(this.getGuestDocumentNo());
		newVisit.setGuestDocumentType(this.getGuestDocumentType());
		newVisit.setGuestName(this.getGuestName());
		newVisit.setHostName(this.getHostName());
		newVisit.setLeavingTime(this.getLeavingTime());
		newVisit.setPlace(this.getPlace());
		newVisit.setSocialReason(this.socialReason);
		return newVisit;
	}
	@Override
	public String toString() {
		return "Visit [id=" + id + ", badgeNo=" + badgeNo + ", hostName=" + hostName + ", guestName=" + guestName
				+ ", guestDocumentType=" + guestDocumentType + ", guestDocumentNo=" + guestDocumentNo
				+ ", entranceDate=" + entranceDate + ", leavingDate=" + leavingDate + ", entranceTime=" + entranceTime
				+ ", leavingTime=" + leavingTime + ", place=" + place + "]";
	}
	
}
