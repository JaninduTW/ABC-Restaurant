package com.abc_restaurant.back_end.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class CustomerQueryResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerQueryResponseId;

    @OneToOne
    @JoinColumn(name = "query_id", nullable = false)
    private CustomerQuery response_query;

    @ManyToOne
    @JoinColumn(name="staff_id", nullable = false)
    private User reponse_user;

    @Column( columnDefinition = "DATETIME", nullable = false)
    private Timestamp timeStamp;

    @Column(nullable = false)
    private String response_text;

    //Getters and Setters


    public Long getCustomerQueryResponseId() {
        return customerQueryResponseId;
    }

    public void setCustomerQueryResponseId(Long customerQueryResponseId) {
        this.customerQueryResponseId = customerQueryResponseId;
    }

    public CustomerQuery getResponse_query() {
        return response_query;
    }

    public void setResponse_query(CustomerQuery response_query) {
        this.response_query = response_query;
    }

    public User getReponse_user() {
        return reponse_user;
    }

    public void setReponse_user(User reponse_user) {
        this.reponse_user = reponse_user;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getResponse_text() {
        return response_text;
    }

    public void setResponse_text(String response_text) {
        this.response_text = response_text;
    }
}
