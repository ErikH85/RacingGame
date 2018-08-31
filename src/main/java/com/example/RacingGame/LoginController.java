package com.example.RacingGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
            return "redirect:menu";
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
            int id = loginRepository.getID(username);
            HttpSession session = request.getSession(true);
            session.setAttribute("UserID", id);
            model.addAttribute("welcome", "Welcome " + username);
            return "redirect:menu";
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

    @GetMapping("/game")
    public String getGame(Model model,
                          @RequestParam String player1,
                          @RequestParam String player2,
                          @RequestParam String map) {
        model.addAttribute("player1", player1);
        model.addAttribute("player2", player2);
        model.addAttribute("map", map);
        return "game";
    }

    @PostMapping("/menu")
    public String postMenu(RedirectAttributes redirectAttributes,
                           @RequestParam String player1,
                           @RequestParam (defaultValue = "none") String player2,
                           @RequestParam String map) {
        redirectAttributes.addAttribute("player1", player1);
        redirectAttributes.addAttribute("player2", player2);
        redirectAttributes.addAttribute("map", map);
        return "redirect:game";
    }

    @GetMapping("/menu")
    public String getMenu() {
        return "menu";
    }
}
