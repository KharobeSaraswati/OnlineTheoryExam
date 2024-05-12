package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepo extends JpaRepository <Question,Integer>{

	//take random questions from the list of questions
		@Query(value = "SELECT q From Question q ORDER BY RAND() LIMIT 1")
		Optional<Question> findRandomQuestion();
		
}
