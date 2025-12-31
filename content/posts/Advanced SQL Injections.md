+++
title = "Advanced SQL Injections"
date = 2025-02-04T15:00:00+08:00
lastmod = ""
draft = false
tags = [ "Tier III", "Hard", "Offensive","2 days"]
categories = "Module"
slug = "bfff24"
cover = "https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/AdvancedSQLi.webp"

+++



### Module Summary

This module is focused on `advanced SQL injection techniques`, specifically when working with `PostgreSQL`. The target for this module is a `Java/Spring` application which we will decompile, analyze and eventually exploit.

This module is split up into the following `sections`:

- `Introduction`: These sections serve as a very brief introduction to interacting with PostgreSQL.

- `Identifying Vulnerabilities`: In these sections we cover various white-box techniques for identifying/debugging SQL injection vulnerabilities in Java applications.

- `Advanced SQL Injection Techniques`: Throughout these sections we cover the following advanced SQL injection techniques:

  - Common character bypasses
  - Error-based SQL injection
  - Second-order SQL injection

- `PostgreSQL-Specific Techniques` : These sections teach you the following attacks specific to PostgreSQL:

  - Reading and writing files
  - Command execution

- `Defending Against SQL Injection`: In this section we discuss how to fix/prevent SQL injection vulnerabilities from the point of view of a developer.

- `Skills Assessment`: Here we put your skills to the test! Identify and exploit multiple SQL injections in a Java application on your own.

After completing this module, you should be comfortable identifying and exploiting `advanced SQL injection vulnerabilities`, especially against `Java` applications and `PostgreSQL` databases.

------

`CREST CPSA/CRT`-related Sections:

- All sections

`CREST CCT APP`-related Sections:

- All sections

`CREST CCT INF`-related Sections:

- All sections

------

This module is broken into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.

You can start and stop the module at any time and pick up where you left off. There is no time limit or "grading," but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.

As you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts presented in each section. You can do this in the `PwnBox` provided in the interactive sections or your virtual machine.

The module is classified as "hard" and assumes an intermediate knowledge of how web applications function and common attack principles. It is highly recommended to also complete the following modules before starting this one:

- SQL Injection Fundamentals
- Blind SQL Injection

### Module Sections

-  Introduction to PostgreSQL
-  Decompiling Java Archives
-  Searching for Strings
-  Live-debugging Java Applications
-  Hunting for SQL Errors
-  Common Character Bypasses
-  Error-Based SQL Injection
-  Second-Order SQL Injection
-  Reading and Writing Files
-  Command Execution
-  Preventing SQL Injection Vulnerabilities
-  Skills Assessment

### Relevant Paths

This module progresses you towards the following Paths