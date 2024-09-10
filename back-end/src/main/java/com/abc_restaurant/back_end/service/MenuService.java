package com.abc_restaurant.back_end.service;

import com.abc_restaurant.back_end.model.Menu;
import com.abc_restaurant.back_end.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    // Fetches all menu items
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    // Retrieves a specific menu item by its ID
    public Menu getMenuById(Long id) {
        return menuRepository.findById(id).orElse(null);
    }

    // Saves or updates a menu item
    public Menu saveMenu(Menu menu) {
        // You may include additional logic here if needed
        return menuRepository.save(menu);
    }

    // Deletes a menu item by its ID
    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }
}
