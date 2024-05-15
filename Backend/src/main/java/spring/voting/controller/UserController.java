package spring.voting.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import spring.voting.entity.Party;
import spring.voting.entity.User;
import spring.voting.repository.PartyRepository;
import spring.voting.repository.UserRepository;
import spring.voting.service.PartyService;
import spring.voting.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController 
{

	@Autowired
	private UserService us;
	
	@Autowired
	private UserRepository ur;
	
	@Autowired
	private PartyService ps;
	
	
	@Autowired
	private PartyRepository pr;
	
	@GetMapping
	
	public String display()
	{
		return "My code is working";
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
		us.registerUser(user);
		return ResponseEntity.ok("User Registered Successfully");
	}
	
	@PostMapping("/loginByEmail")
	public ResponseEntity<User> loginUserByEmail(@RequestBody User user) 
	{
		User u = us.loginUserByEmail(user.getUserEmail(), user.getUserPassword()).get();
		return ResponseEntity.ok(u);
	}
	
	
	@PostMapping("/loginByCardNumber")
	public ResponseEntity<User> loginUserByVotingCardNumber(@RequestBody User user) 
	{
		User u = us.loginUserByVotingCardNumber(user.getUserVotingCardNumber(), user.getUserPassword()).get();
		return ResponseEntity.ok(u);
	}

	@PostMapping("/activateUser/{userId}")
    public ResponseEntity<String> activateUser(@PathVariable Long userId) {
        User u = ur.findById(userId).get();
        if (u != null) {
            u.setActivateAccount(true);
            ur.save(u);
            return ResponseEntity.ok("User Activated Successfully");
        }
        return ResponseEntity.ok("User Not Found");
    }
	
	@GetMapping("/canditatelist")
    public List<User> getAllCandidate()
	{
        return us.getAllCandidate();
    }
	
	@DeleteMapping("/deletecanditate/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable("id") long userId) {
		us.deleteByUserId(userId);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}
	
//	@PutMapping("/updatecanditate/{id}")
//	public User updateUser(@PathVariable long id , @RequestBody User u) {
//        return us.updateUser(id, u);
//    }
//	
	
	@PutMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User u = ur.findById(user.getUserId()).get();
        u.setUserAddress(user.getUserAddress());
        u.setUserMobileNumber(user.getUserMobileNumber());
        //u.setUserDateOfBirth(user.getUserDateOfBirth());
        u.setUserEmail(user.getUserEmail());
        u.setUserName(user.getUserName());
        ur.save(u);
        return ResponseEntity.ok(u);
    }
	@PostMapping("/addvote/{partyId}/{userId}")
    public ResponseEntity<HashMap<String, String>> addCandidate(@PathVariable Long partyId, @PathVariable Long userId) {
        Party p = pr.findById(partyId).get();
        User u = ur.findById(userId).get();
        String voteStatus = "";
        if (p != null && u != null) {
            if (u.getStatus() == null) {
                p.setVotes(p.getVotes() + 1);
                u.setStatus("voted");
                pr.save(p);
                ur.save(u);
                voteStatus = "Vote Added";
            } else {
                voteStatus = "Vote Already Added";
            }
        }
        HashMap h = new HashMap<String, String>();
        h.put("vote", voteStatus);
        return ResponseEntity.ok(h);
    }
	
	@GetMapping("/electionenddate")
    public String getElectionEndDate() {
        return "May 20, 2024";
    }
	@GetMapping("/getUserById/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User u = ur.findById(userId).get();
        return ResponseEntity.ok(u);
    }
	@PostMapping("/changePassword/{uid}/{newpassword}")
    public User changeUserPassword(@PathVariable("uid") Long uid,@PathVariable("newpassword") String newpassword) {
        User u = ur.findById(uid).get();
        u.setUserPassword(newpassword);
        ur.save(u);
        return u;
    }
    @GetMapping("/findByUserEmail/{email}")
    public User getUserByEmail(@PathVariable String email) {
        System.out.println(">>>>" + email);
        return us.findByUserEmail(email).get();
    }
    
    @GetMapping("/findByRole/{userRole}")
    public List<User> getUserByRole(@PathVariable String userRole) {
        return us.getUserByRole(userRole);
    }
	
}
