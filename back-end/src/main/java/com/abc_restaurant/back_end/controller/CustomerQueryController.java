package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.CustomerQuery;
import com.abc_restaurant.back_end.repository.CustomerQueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerQueryController {

    @Autowired
    private CustomerQueryRepository customerQueryRepository;

    @PostMapping("/queryitem")
    CustomerQuery newCustomerQuery (@RequestBody CustomerQuery newCustomerQuery){
        return customerQueryRepository.save(newCustomerQuery);
    }
}
