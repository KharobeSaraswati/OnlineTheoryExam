package com.example.demo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin
public class UserController {


	@Autowired 
	UserRepo userRepo;
	@Autowired
	LogRepo logRepo;
	@Autowired
	QuestionRepo questionRepo;
	@Autowired
	TestRepo testRepo;
	
	@RequestMapping("login{username}")
	public int[] login(@PathVariable String username, @RequestBody String password)
	{
		//index0=login status
		try
		{
			int[] a=new int[3];
			int count=userRepo.countByUsername(username);
			if(count==0)
			{
				a[0]=1;//wrong username
				return a;
			}
			if(count>1)
			{
				a[0]=2;//multiple accounts
				return a;
			}
		
			User user =userRepo.findByUsername(username);
			if(user.password.equals(password))
			{
				a[0]=0;
				a[1]=user.id;
				a[2]=user.role;
				return a;
			}
			else
			{
				a[0]=3;//wrong password
				return a;
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("addQuestion")
	public Question addQuestion(@RequestBody String name)
	{
		Question question=new Question();
		question.name=name;
		Question questiondb=questionRepo.save(question);
		return questiondb;
	}
	
	@RequestMapping("giveQuestions")
	public List<Question> giveQuestions()
	{
		
		return questionRepo.findAll();
	}
	
	
	@RequestMapping("addTest")
	public Test addTest(@RequestBody Test test)
	{
		Test testdb=testRepo.save(test);
		return testdb;
	}
	
	
	@RequestMapping("giveTests")
	public List<Test> giveTest()
	{
		List<Test> list=testRepo.findAll();
		for(Test test:list)
		{
			String result="";
			List<User> users=userRepo.findByRole(1);
			for(User user:users)
			{
				int count=logRepo.countByUserIdAndTestIdAndVerify(user.id,test.id,1);
				if(count>=test.passingCount)
				{
					result=result+user.name+" :Pass("+count+")\n";
				}
				else
				{
					result=result+user.name+" : Fail("+count+")\n";
				}
			}
			test.setResult(result);
			testRepo.save(test);
		}
		return list;
	}
	
	
	
	@RequestMapping("giveActiveTests")
	public List<Test> giveActiveTests()
	{
		List<Test> tests=testRepo.findAll();
		List<Test> testsUi=new ArrayList<>();
		
		Date date=new Date();
		long now=date.getTime();
		
		for(Test test:tests)
		{
			Date start=test.getStart();
			Date end=test.getEnd();
			long startMili=start.getTime();
			long endMili=end.getTime();			
			
			if(now>startMili && now<endMili)
			{
				testsUi.add(test);
			}
		}
		return testsUi;
	}
	
	@RequestMapping("giveMeTestLogs{userid}and{testid}")
		public List<Log> giveMeTestLogs(@PathVariable int userid, @PathVariable int testid)
		{
		int count=logRepo.countByUserIdAndTestId(userid, testid);
		if(count==0)
		{
			Test test=testRepo.findById(testid).get();
			User user=userRepo.findById(userid).get();
			for(int i=0;i<test.questionCount;i++)
			{
				Log log=new Log();
				log.answer="";
				Question question=questionRepo.findRandomQuestion().get();
				log.question=question;
				log.submit=0;
				log.test=test;
				log.user=user;
				log.verify=0;
				logRepo.save(log);
			}
		}
		return logRepo.findByUserIdAndTestId(userid, testid);
	}
	
	@Transactional
	//Transactional, indicating that the method should be executed within a transaction. 
	//If an exception occurs during the execution,the transaction will be rolled back, ensuring data consistency.
	@RequestMapping("deleteTest/{testid}")
	public int deleteTest(@PathVariable int testid) {
        try {
            // Check if the test exists
            Optional<Test> optionalTest = testRepo.findById(testid);

            if (optionalTest.isPresent()) {
                // Delete associated logs for the test
                logRepo.deleteByTestId(testid);

                // Delete the test by ID
                testRepo.deleteById(testid);

                return 1; // Return 1 for "Test deleted successfully"
            } else {
                return 2; // Return 2 for "Test not found"
            }
        } catch (Exception e) {
            e.printStackTrace();
            return -1; // Return -1 for "Error deleting test"
        }
    }

	

	
	@RequestMapping("update{id}")
	public int update(@PathVariable int id, @RequestBody String answer)
	{
		try
		{
			Log log=logRepo.findById(id).get();
	        log.answer=answer;
			logRepo.save(log);
			return 1;
	       
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return 0;
		}
	}
	
	
	@RequestMapping("submit{id}")
	public int submit(@PathVariable int id)
	{
		try
		{
		        Log log = logRepo.findById(id).get();
		        log.submit = 1;
		        logRepo.save(log);
		        return 1;
		        
		 }
		 catch (Exception e) 
		{
		        e.printStackTrace();
		        return 0;
		 }
	}
	
	
	@RequestMapping("getAllLogsForVerfication")
	public List<Log> getAllLogsForVerfication()
	{
		return logRepo.findBySubmitAndVerify(1, 0);
	}
	
	@RequestMapping("acceptreject{id}")
	public int acceptreject(@PathVariable int id, @RequestBody int verify)
	{
		try
		{
			Log log=logRepo.findById(id).get();
			log.verify=verify;
			logRepo.save(log);
			return 1;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return 0;
		}
	}
	
	
	
}
