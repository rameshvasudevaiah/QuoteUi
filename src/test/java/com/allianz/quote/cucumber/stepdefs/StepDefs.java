package com.allianz.quote.cucumber.stepdefs;

import com.allianz.quote.AllianzQuoteMonoGradleApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = AllianzQuoteMonoGradleApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
