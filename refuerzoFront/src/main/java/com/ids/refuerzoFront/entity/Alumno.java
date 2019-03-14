package com.ids.refuerzoFront.entity;

import javax.persistence.*;

@Entity
@Table(name = "ALUMNO")
public class Alumno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="NOMBRE")
	private String nombre;
	
	@Column(name="TELPERSON")
	private Integer telPerson;
	
	@Column(name="FECH_CUMPLE")
	private String fechaCumpleaños;

	@Column(name="EMAILPERSON")
	private String emailPerson;
	
	@Column(name="TELOFI")
	private String telOfi;

	@Column(name="EMAIL_OFFICE")
	private String emailOfi;
	
	
	

	public Alumno() {
		super();
	}
	
	public Alumno(Long id, String nombre, Integer telPerson, String fechaCumpleaños, String emailPerson, 
			String telOfi, String emailOfi) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.telPerson = telPerson;
		this.emailPerson = emailPerson;
		this.telOfi = telOfi;
		this.emailOfi = emailOfi;
		
		this.fechaCumpleaños = fechaCumpleaños;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getTelPers() {
		return telPerson;
	}

	public void setTelPers(Integer telPerson) {
		this.telPerson = telPerson;
	}
	
	public String getfechaCumpleaños() {
		return fechaCumpleaños;
	}
	
	public void setfechaCumpleaños(String fechaCumpleaños) {
		this.fechaCumpleaños = fechaCumpleaños;
	}
	
	

	public String getEmailPerson() {
		return emailPerson;
	}

	public void setEmailPerson(String emailPerson) {
		this.emailPerson = emailPerson;
	}

	public String gettelOfi() {
		return telOfi;
	}

	public void settelOfi(String telOfi) {
		this.telOfi = telOfi;
	}

	public String getemailOfi() {
		return emailOfi;
	}

	public void setemailOfi(String emailOfi) {
		this.emailOfi = emailOfi;
	}

	

	

	@Override
	public String toString() {
		return "Alumno [id=" + id + ", nombre=" + nombre + ", "
				+ "telPerson=" + telPerson + ", fecha=" + fechaCumpleaños + ",  emailPerson=" + emailPerson + ", telOfi="
				+ telOfi + ", emailOfi=" + emailOfi + "]";
	}

}
