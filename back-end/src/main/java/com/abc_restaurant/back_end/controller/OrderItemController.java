package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Menu;
import com.abc_restaurant.back_end.model.OrderItem;
import com.abc_restaurant.back_end.repository.MenuRepository;
import com.abc_restaurant.back_end.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderItemController {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @PostMapping("/orderitem")
    OrderItem newOrderItem (@RequestBody OrderItem newOrderItem){
        return orderItemRepository.save(newOrderItem);
    }
}
