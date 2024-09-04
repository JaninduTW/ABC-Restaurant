package com.ABC_Restaurant.back_end.repository;

import com.ABC_Restaurant.back_end.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository <Reservation, Long>{

    List<Reservation> findByUserId(Long userId);

    List<Reservation> findByUserId(Long reservationId);
}
