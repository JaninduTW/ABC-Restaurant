package com.abc_restaurant.back_end.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Category {

    @Id
    @GeneratedValue
    private Long categoryId;

    @Column(nullable = false)
    private String categoryName;
}
