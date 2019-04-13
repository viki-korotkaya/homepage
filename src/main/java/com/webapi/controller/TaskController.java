package com.webapi.controller;

import com.webapi.model.Task;
import com.webapi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping(path = "/todo")
    public Iterable<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public ResponseEntity create(@RequestBody Task task) throws Exception {
        taskRepository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
