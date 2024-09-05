package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
