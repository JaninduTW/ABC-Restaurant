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
    private ResTableRepository resTableRepository;

    // Retrieve all tables
    public List<ResTable> getAllTables() {
        return resTableRepository.findAll();
    }

    // Get a table by its ID
    public Optional<ResTable> getTableById(Long id) {
        return resTableRepository.findById(id);
    }

    // Add a new table
    public ResTable addTable(ResTable table) {
        return resTableRepository.save(table);
    }

    // Update an existing table
    public ResTable updateTable(Long id, ResTable table) {
        Optional<ResTable> existingTable = resTableRepository.findById(id);
        if (existingTable.isPresent()) {
            ResTable updatedTable = existingTable.get();
            updatedTable.setTableNo(table.getTableNo());
            updatedTable.setNoOfSeats(table.getNoOfSeats());
            return resTableRepository.save(updatedTable);
        }
        return null; // Handle not found case
    }

    // Delete a table
    public void deleteTable(Long id) {
        resTableRepository.deleteById(id);
    }
}
