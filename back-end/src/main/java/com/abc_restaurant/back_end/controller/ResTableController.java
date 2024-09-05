package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.repository.ResTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResTableController {

    @Autowired
    private ResTableRepository resTableRepository;

    @PostMapping("/table")
    ResTable newTable(@RequestBody ResTable newTable){
        return resTableRepository.save(newTable);
    }
}
