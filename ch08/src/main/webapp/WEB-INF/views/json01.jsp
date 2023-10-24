<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.7.1.js"></script>
<script>
	$(function() {
		$('button').click(function() {
			$.ajax({
				url : '${pageContext.request.contextPath}/api/json',
				async : true,
				type : 'get',
				dataType : 'json',
				success : function(res) {
					if(res.result !== "success"){
						console.error(res.message);
						return;
					}
					var vo = res.data;
					var html = ""
					html += ("<h3>" + vo.no + "</h3>")
					html += ("<h4>" + vo.name + "</h4>")
					html += ("<h5>" + vo.contents + "</h5>")
				
				},
				error : function(xhr, status, err) {
					console.error(status, err)
				}
			})
		})
	})
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data : $.ajax({}) 함수 사용하기</h1>
	<button>데이터 가져오기</button>
	<div id='data'></div>
</body>
</html>