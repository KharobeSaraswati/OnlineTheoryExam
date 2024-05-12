package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	int id;
	String name;
	String username;
	String password;
		
	
}
