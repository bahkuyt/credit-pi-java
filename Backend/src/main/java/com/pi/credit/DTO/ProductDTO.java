package com.pi.credit.DTO;


import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


import java.util.Date;
import java.util.List;

public class ProductDTO {
    public int id;
    public String name;
    public String description;
    @Temporal(TemporalType.DATE)
    public Date Release;
    public List<CategoryDTO> categories;
    public ProductDTO(int id, String name, String description, Date release, List<CategoryDTO> categories) {
        this.id=id;
        this.name = name;
        this.description = description;
        this.Release = release;
        this.categories=categories;
    }

    public ProductDTO() {
    }
}
