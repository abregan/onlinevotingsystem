package spring.voting;

import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import spring.voting.entity.Party;
import spring.voting.entity.User;
import spring.voting.exception.ResourceNotFoundException;
import spring.voting.service.PartyService;
import spring.voting.service.UserService;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
@SpringBootTest
class OnlinevotingsystemApplicationTests {


		@Autowired
		private UserService userService;
		@Autowired
		private PartyService partyService;
		static User user = null;
		static Party party=null;
		@Test
		void contextLoads() {
				}
		//Test Cases for User
//		@BeforeAll
//	    static void setUpBeforeClass() throws Exception {
//	         user=new User();
//	        user.setUserName("amol");
//	        user.setUserMobileNumber("8053897276");
//	        user.setUserPassword("Amol@123");
//	        user.setUserRole("voter");
//	        user.setUserAddress("Shahapur");
//	        user.setUserDateOfBirth(LocalDate.of(1996, 1, 1));
//	        user.setUserEmail("amol@gmail.com");
//	        user.setUserVotingCardNumber("amol123456");
//	        user.setUserGender("male");
//	    }
//		@Test
//		void testRegisterUser() {
//			assertNotNull(userService.registerUser(user));
//		}
//		@Test
//		void testGetUserById() {
//			assertNotNull(userService.getUserById(26));
//		}
//
//		@Test
//		void testGetUserByRole() {
//			assertNotNull(userService.getUserByRole(null));
//			assertEquals("voter", user.getUserRole("voter"));
//		}

//		@Test
//		void testDeleteUser() {
//			User userToDelete = new User();
//			userToDelete = userService.registerUser(userToDelete);
//			userService.deleteByUserId(userToDelete.getUserId());
//			assertThrows(ResourceNotFoundException.class, () -> userService.deleteByUserId(userToDelete.getUserId()));
//		}
		
		//Test Cases for Party
//		@Test
//		void testGetPartyById() {
//			assertNotNull(partyService.getPartyById(11));
//		}

	}

