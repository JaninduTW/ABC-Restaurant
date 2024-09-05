package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Menu;
import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.repository.MenuRepository;
import com.abc_restaurant.back_end.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @PostMapping("/menu")
    Menu newmenu(@RequestBody Menu newMenu){
        return menuRepository.save(newMenu);
    }
}
