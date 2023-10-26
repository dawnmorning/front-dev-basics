package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {
	
	@RequestMapping("/ex01")
	public String add() {
		return "gb/ex01";
	}
	
	@RequestMapping("/ex02")
	public String add02() {
		return "gb/ex02";
	}
	
	@RequestMapping("/ex03")
	public String ex03() {
		return "gb/ex03";
				
	}
}
