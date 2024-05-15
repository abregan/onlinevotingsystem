package spring.voting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.voting.entity.User;
import spring.voting.exception.ResourceNotFoundException;
import spring.voting.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	private UserRepository ur;
	
	public User registerUser(User user) 
	{
        if (user.getUserRole().equals("admin")) 
        {
            user.setActivateAccount(true);
        } 
        else
        {
            user.setActivateAccount(false);
        }
        return ur.save(user);
    }
	
	public Optional<User> loginUserByVotingCardNumber(String userVotingCardNumber, String userPassword) 
	{
	     return ur.findByUserVotingCardNumberAndUserPassword(userVotingCardNumber, userPassword);
	}
	
	public Optional<User> loginUserByEmail(String userEmail, String userPassword) 
	{
	     return ur.findByUserEmailAndUserPassword(userEmail, userPassword);
	}
	
	public List<User> getAllCandidate()
	{
		return ur.findAll();
	}
	
	public void deleteByUserId(long userId) {
		ur.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
		ur.deleteById(userId);
		
	}
	public User updateUser(long id,User u) 
	{
        u.setUserId(id);
        return ur.save(u);
    }
	public Optional<User> findByUserEmail(String userEmail) {
        System.out.println("#######" + userEmail);
        return ur.findByUserEmail(userEmail);
    }
	public List<User> getUserByRole(String userRole) {
        return ur.findByUserRole(userRole);
    }
}
