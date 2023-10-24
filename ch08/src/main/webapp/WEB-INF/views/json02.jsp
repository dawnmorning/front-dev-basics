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
	// DOM Load Event
	// 1. load
	// 2. DomContentLoaded : DOM만 로딩
	window
			.addEventListener(
					'DOMContentLoaded',
					function() {
						document.getElementsByTagName('button')[0]
								.addEventListener(
										'click',
										function() {
											var xhr = new XMLHttpRequest()
											xhr
													.addEventListener(
															'readystatechange',
															function() {
																if (this.readState === 0) {//readState = 0
																	// request 초기화 되기 전
																} else if (this.readyState === XMLHttpRequest.OPENED) {
																	// 서버와 연결이 성공
																} else if (this.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
																	// 서버가 request를 받음
																} else if (this.readyState === XMLHttpRequest.LOADING) {
																	// response를 처리 중
																} else if (this.readyState === XMLHttpRequest.DONE) {
																	// response를 처리 끝
																	if(this.status !== 200){
																		console.error(this.status, this.state)
																		return
																	}
																	console.log(this.responseText, typeof(this.responseText))
																	var response = JSON.parse(this.responseText)
																	console.log(response)
																}
															})
											xhr.open('get', '/ch08/api/json',
													true/* async */)
											xhr.send()
										})
					})
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data : XMLHttpRequest 직접 사용하기</h1>
	<button>데이터 가져오기</button>
	<div id='data'></div>
</body>
</html>