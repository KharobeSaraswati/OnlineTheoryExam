package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepo extends JpaRepository<Test,Integer>
{
}
