package com.abc_restaurant.back_end.model;

import jakarta.persistence.*;

@Entity
public class OrderItem {

    @Id
    @GeneratedValue
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name="order_id", nullable = false)
    private Order orderId;

    @ManyToOne
    @JoinColumn(name="item_id", nullable = false)
    private Menu itemId;

    @Column(nullable = false)
    private Long quantity;

    @Column(nullable = false)
    private Double price;

    //Getters and Setters


    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }

    public Menu getItemId() {
        return itemId;
    }

    public void setItemId(Menu itemId) {
        this.itemId = itemId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
