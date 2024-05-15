package spring.voting.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.voting.entity.User;

public interface UserRepository extends JpaRepository<User, Long>
{
	Optional<User> findByUserEmailAndUserPassword(String userEmail, String userPassword);
    Optional<User> findByUserVotingCardNumberAndUserPassword(String userVotingCardNumber, String userPassword);
    Optional<User> findByUserEmail(String userEmail);
    List<User> findByUserRole(String userRole);
}
