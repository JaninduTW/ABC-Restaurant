package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.service.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.List;



@RestController
@CrossOrigin("http://localhost:3000")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // Endpoint to check available tables
    @GetMapping("/reservation/available-tables")
    public ResponseEntity<List<ResTable>> getAvailableTables(
            @RequestParam String date,
            @RequestParam String time,
            @RequestParam String location) {

        try {
            // Convert the date from String to LocalDate
            LocalDate reservationDate = LocalDate.parse(date);
            LocalTime reservationTime = LocalTime.parse(time);

            // Now pass the LocalDate, time, and location to the service
            List<ResTable> availableTables = reservationService.findAvailableTables(reservationDate, reservationTime, location);
            return ResponseEntity.ok(availableTables);

        } catch (DateTimeParseException e) {
            // Handle invalid date format
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Endpoint to create a new reservation
    @PostMapping("/reservation/create")
    public Reservation createReservation(@RequestBody Reservation reservation) {

        return reservationService.createReservation(reservation);
    }

    // Endpoint to get all reservations for admin/staff
    @GetMapping("/reservation/getallreservation")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    // Endpoint to update reservation status (APPROVED, DECLINED)
    @PutMapping("/reservation/{id}/status")
    public Reservation updateReservationStatus(@PathVariable Long id, @RequestParam String status) {
        return reservationService.updateReservationStatus(id, status);
}

    @DeleteMapping("/reservation/delete/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable("id") Long id) {
        try {
            reservationService.deleteReservation(id);
            return ResponseEntity.ok("Reservation deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting reservation: " + e.getMessage());
}
}

}


