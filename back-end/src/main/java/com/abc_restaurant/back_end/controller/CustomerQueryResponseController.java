package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.CustomerQueryResponse;
import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.repository.CustomerQueryResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerQueryResponseController {
    @Autowired
    private CustomerQueryResponseRepository customerQueryResponseRepository;

    @PostMapping("/customerqueryresponse")
    CustomerQueryResponse newCustomerQueryResponse(@RequestBody CustomerQueryResponse newCustomerQueryResponse){
        return customerQueryResponseRepository.save(newCustomerQueryResponse);
    }
}
