package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.AppUser;
import com.nigelle.ecommerceback.service.AppUserService;
import com.nigelle.ecommerceback.service.IAppUserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/AppUser")
@AllArgsConstructor
public class AppUserController {
    private  IAppUserService service;

    @GetMapping("/allAppUsers")
    public List<AppUser> getAllAppUsers() {
        return service.getAll();
    }

    @PostMapping("/addAppUser")
    public AppUser createAppUser(@RequestBody AppUser AppUser) {
        return service.create(AppUser);
    }

    @PutMapping("/updateAppUser")
    public AppUser updateAppUser(@RequestBody AppUser AppUser) {
        return service.update(AppUser);
    }

    @DeleteMapping("/deleteAppUser/{id}")
    public void deleteAppUser(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findAppUserById/{id}")
    public AppUser getAppUserById(@PathVariable Long id) {
        return service.getById(id);
    }
}
