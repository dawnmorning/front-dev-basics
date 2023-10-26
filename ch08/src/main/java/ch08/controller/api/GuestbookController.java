package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestBookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {

	@PostMapping
	public JsonResult add(@RequestBody GuestBookVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@GetMapping
	public JsonResult ex02(long sno) {
		List<GuestBookVo> list = new ArrayList<GuestBookVo>();
		
		GuestBookVo vo1 = new GuestBookVo();
		vo1.setNo(10L);
		vo1.setName("dawn");
		vo1.setContents("새벽");
		list.add(vo1);
		
		GuestBookVo vo2 = new GuestBookVo();
		vo2.setNo(9L);
		vo2.setName("dawn2");
		vo2.setContents("새벽2");
		list.add(vo2);
		
		GuestBookVo vo3 = new GuestBookVo();
		vo3.setNo(8L);
		vo3.setName("dawn3");
		vo3.setContents("새벽3");
		list.add(vo3);
		
		return JsonResult.success(list);
	}
}
