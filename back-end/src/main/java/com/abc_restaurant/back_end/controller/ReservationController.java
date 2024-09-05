package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.model.User;
import com.abc_restaurant.back_end.repository.ReservationRepository;
import com.abc_restaurant.back_end.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping("/reservation")
    Reservation newReservation(@RequestBody Reservation newReservation){
        return reservationRepository.save(newReservation);
    }

}
