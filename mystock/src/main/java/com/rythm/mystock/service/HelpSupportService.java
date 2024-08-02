package com.rythm.mystock.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rythm.mystock.model.HelpSupport;
import com.rythm.mystock.repository.HelpSupportRepo;

@Service
public class HelpSupportService {
  @Autowired
  HelpSupportRepo hsr;
  public String addHelpSupport(HelpSupport hs)
  {
    hsr.save(hs);
    return "Added";
  }
  public Optional<HelpSupport> getHelpSupportIProblem(String problem){
    return hsr.findById(problem);
  }

  public String deleteHelpSupportProblem(String problem){
    hsr.deleteById(problem);
    return "Deleted";
  }
}
