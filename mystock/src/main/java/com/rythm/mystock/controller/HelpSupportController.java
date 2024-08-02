package com.rythm.mystock.controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rythm.mystock.model.HelpSupport;

import com.rythm.mystock.service.HelpSupportService;

@RestController
public class HelpSupportController {
  @Autowired
  HelpSupportService hss;
   @PostMapping("/post/helpSupport")
          public String createHelpSupport(@RequestBody HelpSupport hs){
            return hss.addHelpSupport(hs);
          }
          @GetMapping("/get/helpSupport/{problem}")
          public Optional<HelpSupport> readHelpSupportById(@PathVariable String problem ){
            return hss.getHelpSupportIProblem(problem);
          }
          @DeleteMapping("/delete/helpSupport/{problem}")
          public String deletePro(@PathVariable("problem") String problem){
            return hss.deleteHelpSupportProblem(problem);
          }
}
