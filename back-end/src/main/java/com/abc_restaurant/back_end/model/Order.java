package com.abc_restaurant.back_end.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name="`Order`")
public class Order {

    @Id
    @GeneratedValue
    private Long orderId;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private User customer;

    @Column( columnDefinition = "DATETIME", nullable = false)
    private Timestamp timeStamp;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String status;



    //Getters and Setters


    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
