package com.abc_restaurant.back_end.model;

import jakarta.persistence.*;

@Entity
public class CustomerQuery {

    @Id
    @GeneratedValue
    private Long queryId;

   @Column(nullable = false)
   private String message;

   @Column(nullable = false)
   private Boolean is_responded;

    @ManyToOne
    @JoinColumn(name="userId", nullable = false)
    private User user;

    //Getters and Setters


    public Long getQueryId() {
        return queryId;
    }

    public void setQueryId(Long queryId) {
        this.queryId = queryId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getIs_responded() {
        return is_responded;
    }

    public void setIs_responded(Boolean is_responded) {
        this.is_responded = is_responded;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userId) {
        this.user = userId;
    }
}
