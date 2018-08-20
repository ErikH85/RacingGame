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
    public String index(HttpServletResponse response) {
        Cookie guest = new Cookie("GuestCookie", "guest");
        guest.setMaxAge(1000);
        response.addCookie(guest);
        return "index";
    }

    @PostMapping("/register")
    public String postRegister(@RequestParam String email,
                               @RequestParam String username,
                               @RequestParam String password,
                               Model model) {

        if (loginRepository.addUser(email, username, password)) {
            model.addAttribute("welcome", "Welcome ");
            return "mypages";
        }
        model.addAttribute("error", "Username or Email is already taken");
        return "index";
    }

    @PostMapping("/login")
    public String postLogin(@RequestParam String username,
                            @RequestParam String password,
                            HttpServletRequest request,
                            HttpServletResponse response,
                            Model model) {

        String[] result = loginRepository.getUser(username, password);

        if (result[0].equals("true")) {
            HttpSession session = request.getSession(true);
            session.setAttribute("User", username);
            Cookie guest = new Cookie("GuestCookie", "guest");
            guest.setMaxAge(0);
            response.addCookie(guest);
            model.addAttribute("welcome", "Welcome " + result[1]);
            return "mypages";
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
