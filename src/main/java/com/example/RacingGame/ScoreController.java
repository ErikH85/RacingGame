package com.example.RacingGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;

    @GetMapping("/getHighscore")
    public @ResponseBody List<String> getHighscore() {
        return scoreRepository.getHighscores();
    }

    @PostMapping("/addHighscore")
    @ResponseBody
    public String addHighscore(@RequestParam int score, HttpServletRequest request){

        HttpSession session = request.getSession(true);
        int id = (Integer) session.getAttribute("UserID");
        scoreRepository.addHighscore(id, score);
        return "OK";
    }
}
