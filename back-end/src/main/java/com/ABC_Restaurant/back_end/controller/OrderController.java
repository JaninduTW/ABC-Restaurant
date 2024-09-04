package com.ABC_Restaurant.back_end.controller;
import com.ABC_Restaurant.back_end.model.Order;
import com.ABC_Restaurant.back_end.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return orderService.placeOrder(order);
    }

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @PutMapping("/{id}/status")
    public void updateOrderStatus(@PathVariable Long id, @RequestBody String status) {
        orderService.updateOrderStatus(id, status);
    }
}
