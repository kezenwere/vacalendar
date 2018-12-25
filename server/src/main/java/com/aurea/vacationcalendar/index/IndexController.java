package com.aurea.vacationcalendar.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import springfox.documentation.annotations.ApiIgnore;

@Controller
@ApiIgnore
public class IndexController {
    @GetMapping ("")
    public String returnAppIndex() {
        return "index";
    }

    @GetMapping ("/index")
    public String returnAppIndexOnPageNotFound() {
        return "index";
    }
}