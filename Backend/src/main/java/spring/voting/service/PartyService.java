package spring.voting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.voting.entity.Party;
import spring.voting.exception.ResourceNotFoundException;
import spring.voting.repository.PartyRepository;

@Service
public class PartyService {
	@Autowired
	private PartyRepository pr;
	
	public List<Party> getAllParty()
	{
		return pr.findAll();
	}
    
	public Party addParty(Party p)
	{
		return pr.save(p);
		
	}
	
//	public void deleteByPartyId(long partyId) {
//		pr.findById(partyId).orElseThrow(()->new ResourceNotFoundException("Party","Id",partyId));
//		pr.deleteById(partyId);
//		
//	}
	
	public void deletePartyById(Long partyId) {
	      //  partyRepository.findById(partyId).orElseThrow(() -> new ResourceNotFoundException("party", "partyId", partyId));
	        pr.deleteById(partyId);
	    }
	
	public Party updateParty(long id,Party p) 
	{
        p.setPartyId(id);
        return pr.save(p);
    }
}
