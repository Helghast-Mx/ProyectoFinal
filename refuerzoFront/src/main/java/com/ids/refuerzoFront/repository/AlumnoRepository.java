package com.ids.refuerzoFront.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ids.refuerzoFront.entity.Alumno;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno,Long>{
}
