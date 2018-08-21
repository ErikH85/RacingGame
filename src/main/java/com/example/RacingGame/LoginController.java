package com.example.RacingGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/register")
    public String postRegister(@RequestParam String email,
                               @RequestParam String username,
                               @RequestParam String password,
                               Model model) {

        if (loginRepository.addUser(email, username, password)) {
            model.addAttribute("welcome", "Welcome ");
            return "game";
        }
        model.addAttribute("error", "Username or Email is already taken");
        return "index";
    }

    @PostMapping("/login")
    public String postLogin(@RequestParam String username,
                            @RequestParam String password,
                            HttpServletRequest request,
                            Model model) {

        boolean status = loginRepository.getUser(username, password);

        if (status) {
            HttpSession session = request.getSession(true);
            session.setAttribute("User", username);
            model.addAttribute("welcome", "Welcome " + username);
            return "game";
        }
        model.addAttribute("error", "Wrong username or password");
        return "index";
    }

    @PostMapping("/logout")
    public String postLogOut(HttpServletResponse response,
                             HttpServletRequest request) {
        Cookie sessionCookie = new Cookie("JSESSIONID", null);
        sessionCookie.setMaxAge(0);
        response.addCookie(sessionCookie);
        HttpSession session = request.getSession(true);
        session.invalidate();
        return "index";
    }
}
