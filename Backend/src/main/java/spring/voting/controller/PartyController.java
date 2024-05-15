package spring.voting.controller;

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
import spring.voting.repository.PartyRepository;
import spring.voting.service.PartyService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/party")
public class PartyController {
	@Autowired
	private PartyService ps;
	
	
	@Autowired
	private PartyRepository pr;
	
	@GetMapping("/partyList")
	public List<Party> getAllParty()
	{
        return ps.getAllParty();
    }
	
	@PostMapping("/addparty")
    public String addParty(@RequestBody Party party) {
        ps.addParty(party);
        return "Party added successfully";
    }
	
	
//	@DeleteMapping("/deleteparty/{id}")
//	public ResponseEntity<Boolean> deleteParty(@PathVariable("id") long partyId) {
//		ps.deleteByPartyId(partyId);
//		boolean flag = true;
//		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
//	}
	
	@DeleteMapping("/deleteparty/{partyId}")
    public String deletePartyById(@PathVariable Long partyId) {
        ps.deletePartyById(partyId);
        return "Party deleted successfully";
    }
	
	@PutMapping("/updateparty/{id}")
	public Party updateParty(@PathVariable long id , @RequestBody Party p) {
		return ps.updateParty(id, p);
       
    }
	
	@GetMapping("/findByPartyId/{partyId}")
    public Party getPartyByName(@PathVariable Long partyId) {
        return pr.findById(partyId).get();
    }

}
