package lab.latte.issue.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Properties;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import lab.latte.issue.model.EmployeeVO;
import lab.latte.issue.service.IHrService;


@Controller
public class APIsController {
	
	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(APIsController.class);
	
	@Resource(name = "hrService")
	private IHrService hrService;
	
	@Resource(name="envProperties")
	private Properties env;

	@RequestMapping(value = "/apis/getEmployeesAll", method = RequestMethod.POST)
	@ResponseBody
	public List<EmployeeVO> getStations(@RequestBody HashMap<String, Object> params) {
		
		List<EmployeeVO> listEmployee = hrService.getEmployeesAll();
		
		return listEmployee;
	}	
}
