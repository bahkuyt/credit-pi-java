package com.pi.credit.DTO;

import java.util.List;

public class CategoryDTO {
    public int id;
    public String name;
    public List<ProductDTO> games;

    @Override
    public String toString() {
        return "CategoryDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", games=" + games +
                '}';
    }

    public CategoryDTO(int id, String name, List<ProductDTO> games) {
        this.id = id;
        this.name = name;
        this.games = games;
    }

    public CategoryDTO(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public CategoryDTO() {
    }
}
