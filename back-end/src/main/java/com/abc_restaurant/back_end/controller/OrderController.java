package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.repository.OrderRepository;
import com.abc_restaurant.back_end.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order")
    Order newOrder(@RequestBody Order newOrder){
        return orderRepository.save(newOrder);
    }
}
