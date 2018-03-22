package com.jkc.index.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jkc.index.service.IndexService;

/**
 * @Author:kjc
 * @version @Date:2018年1月1日下午1:46:48
 * @Information:
 * 
 */
@Controller
@RequestMapping("/indexController")
public class IndexController {
	@Autowired
	IndexService indexService;

	@RequestMapping("test")
	@ResponseBody
	public String test(HttpServletRequest request, HttpServletResponse response) {
		indexService.test();

		System.out.println("hhhhhh");
		return "ahsffaha";

	}

}
