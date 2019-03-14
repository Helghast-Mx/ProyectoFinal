package com.ids.refuerzoFront.service.impl;

import org.springframework.stereotype.Service;

import com.ids.refuerzoFront.entity.Alumno;
import com.ids.refuerzoFront.repository.AlumnoRepository;
import com.ids.refuerzoFront.service.AlumnoService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AlumnoServiceImpl implements AlumnoService{
	
	@Autowired
	private AlumnoRepository alumnoRepository;
	
	
	public void setAlumnoRepository(AlumnoRepository alumnoRepository){
		this.alumnoRepository = alumnoRepository;
	}
	
	public List<Alumno> consultaAlumno(){
		List<Alumno> alumno = alumnoRepository.findAll();
		return alumno;
	}
	
	@Override
	public Alumno consultaAlumno(Long alumnoId){
		Optional<Alumno> optAlumno = alumnoRepository.findById(alumnoId);
		return optAlumno.get();
	}
	
	@Override
	public void guardaAlumno(Alumno alumno){
		alumnoRepository.save(alumno);
	}
	
	@Override
	public void borraAlumno(Long alumnoId){
		alumnoRepository.deleteById(alumnoId);
	}
	
	@Override
	public void actualizaAlumno(Alumno alumno){
		alumnoRepository.save(alumno);
	}
	
}
