package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
public class Question {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	int id;
	String name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Question [id=" + id + ", name=" + name + "]";
	}
	public Question(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
