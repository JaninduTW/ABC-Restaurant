package com.abc_restaurant.back_end.service;


import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.repository.ResTableRepository;
import com.abc_restaurant.back_end.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ResTableRepository resTableRepository;

    public List<ResTable> findAvailableTables(LocalDate date, LocalTime time, String location) {
        // Find all tables for the given location
        List<ResTable> allTables = resTableRepository.findByLocation(location);

        // Find tables that are already reserved
        List<ResTable> reservedTables = reservationRepository.findReservedTables(date, time, location);

        // Filter out reserved tables
        return allTables.stream()
                .filter(table -> !reservedTables.contains(table))
                .collect(Collectors.toList());
    }

    // Save reservation details
    public Reservation createReservation(Reservation reservation) {
        reservation.setStatus("PENDING"); // Default status
        reservation.setTimestamp(LocalDateTime.now()); // Auto-generated timestamp
        return reservationRepository.save(reservation);
    }

    // Get all reservations for admin/staff to view and change status
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Update the status of a reservation (APPROVED, DECLINED)
    public Reservation updateReservationStatus(Long reservationId, String status) {
        Reservation reservation = reservationRepository.findById(reservationId).orElseThrow();
        reservation.setStatus(status);
        return reservationRepository.save(reservation);
}

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
}


}
