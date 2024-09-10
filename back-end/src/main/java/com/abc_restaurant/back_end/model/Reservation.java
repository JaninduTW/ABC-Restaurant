package com.abc_restaurant.back_end.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ReservationId;

    @Column(columnDefinition = "DATE", nullable = false)
    private LocalDate reservationDate;                  // stored as YYYY-MM-DD


    @Column(columnDefinition = "TIME", nullable = false)
    private LocalTime reservationTime;                  // stored as HH:mm:ss


    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String note;

    @Column(nullable = false)
    private String status = "PENDING"; // PENDING, APPROVED, DECLINED



    @ManyToOne
    @JoinColumn( name="table_id", nullable = false)
    private ResTable table;

    @ManyToOne
    @JoinColumn( name="user_id",  nullable = false)
    private User customer;

    @Column(nullable = false)
    private String contact;

    @Column(nullable = false)
    private String reserveUnder;

    @Column(columnDefinition = "TIMESTAMP", nullable = false, updatable = false)
    private LocalDateTime timestamp = LocalDateTime.now(); // Auto-generated timestamp




    //Getters and Setters


    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Long getReservationId() {
        return ReservationId;
    }

    public void setReservationId(Long reservationId) {
        ReservationId = reservationId;
    }

    public LocalDate getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalTime getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(LocalTime reservationTime) {
        this.reservationTime = reservationTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ResTable getTable() {
        return table;
    }

    public void setTable(ResTable table) {
        this.table = table;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public String getReserveUnder() {
        return reserveUnder;
    }

    public void setReserveUnder(String reserveUnder) {
        this.reserveUnder = reserveUnder;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
