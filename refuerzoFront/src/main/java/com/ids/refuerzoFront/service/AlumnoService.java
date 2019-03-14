package com.ids.refuerzoFront.service;

import java.util.List;

import com.ids.refuerzoFront.entity.Alumno;

public interface AlumnoService {
	
	public List<Alumno> consultaAlumno();
	
	public Alumno consultaAlumno(Long alumnoId);
	
	public void guardaAlumno(Alumno alumno);
	
	public void borraAlumno(Long alumnoId);
	
	public void actualizaAlumno(Alumno alumno);
	
}