package com.abc_restaurant.back_end.service;

import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.repository.ResTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ResTableService {

    @Autowired
    private ResTableRepository tableRepository;

    // Get all tables
    public List<ResTable> getAllTables() {
        return tableRepository.findAll();
    }

    // Get a table by id
    public Optional<ResTable> getTableById(Long id) {
        return tableRepository.findById(id);
    }

    // Create a new table
    public ResTable createTable(ResTable table) {
        return tableRepository.save(table);
    }

    // Update an existing table
    public ResTable updateTable(Long id, ResTable tableDetails) {
        ResTable table = tableRepository.findById(id).orElseThrow(() -> new RuntimeException("Table not found"));
        table.setTableNo(tableDetails.getTableNo());
        table.setNoOfSeats(tableDetails.getNoOfSeats());
        table.setLocation(tableDetails.getLocation());
        return tableRepository.save(table);
    }

    // Delete a table
    public void deleteTable(Long id) {
        tableRepository.deleteById(id);
}

}
