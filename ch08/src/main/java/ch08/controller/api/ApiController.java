package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.vo.GuestBookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "text 데이타";
	}

	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습 </h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public JsonResult json() {
		GuestBookVo vo = new GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setContents("호잇");
		return JsonResult.success(vo);
	}

}
