package com.nigelle.ecommerceback.service;

import java.util.List;


public interface IService <T>{
    T create(T entity);
    T update(T entity);
    void deleteById(Long id);
    T getById(Long id);
    List<T> getAll();
}