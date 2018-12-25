package com.aurea.vacationcalendar.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import springfox.documentation.annotations.ApiIgnore;

@Controller
@ApiIgnore
public class ApiDocumentation
{
    @RequestMapping ("/api-doc")
    public String apiDoc()
    {
        return "redirect:swagger-ui.html";
    }
}
