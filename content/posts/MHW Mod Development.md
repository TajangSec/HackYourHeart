+++
title= "MHW Mod Development"
date= "2023-10-22T14:15:52+08:00"
lastmod = "2023-11-22T14:15:52+08:00"
draft = false
tags = [ "Mod", "MHW"]
categories = "Game"
slug = "7703af"
cover = "/test/img/mhwmodcover.webp"

+++

I’m absolutely obsessed with “Monster Hunter: World.” After the Iceborne expansion update, the game’s version stabilized, and Capcom announced that, following a round of bug fixes, they would no longer roll out major updates, locking the game at version `v15.11.01`. For the next three years, the game remained essentially unchanged, and despite racking up 800 hours of playtime, I didn’t encounter any particularly noticeable bugs. During this period, modding flourished, and I fell in love with creating mods myself—though I was still very much a beginner. At the time, I mostly relied on finding pre-made models online and swapping them into the game, rather than creating my own. The only mod I built entirely from scratch was a katana sound effect mod featuring my girlfriend’s voice acting.



**Image rendering and Fancybox testing:**

<img src="/test/img/bingzhou.webp" style="zoom:50%;" />

Then, on October 16, 2023, Capcom—damn them—suddenly released a small update, clocking in at just 90 MB. The update primarily added Steam Deck support and included Spanish language localization for Latin America. While seemingly minor, this update caused the version number to increment and altered the offsets of certain game files, rendering many previously stable mods incompatible. In essence, it dealt a blow to the mod community comparable to the Iceborne update, which wiped out most of the existing mod ecosystem for the base game. This time around, however, the impact was somewhat more targeted: only mods that rely on specific prerequisite files or anti-cheat mechanisms were broken, while injection-based mods largely remained functional. Simple mods that merely replace models or audio files continued to work without issue.

**Image rendering and Fancybox testing:**

<img src="/test/img/Dodogama.webp" style="zoom:50%;" />

As of now, the game is on version `v15.20`, and as of the time this article was written, the vast majority of existing mods are still incompatible with this version. On platforms like Nexus Mods, many mod entries still list update dates from 2020. That said, some mod authors have already begun updating their mods in response to the latest patch, and there’s at least one positive development: the authors of the prerequisite files have already pushed updates to address the issues introduced by the patch. 

One notable bug introduced by this update is that, after enabling the HD Texture Pack DLC, the icons for certain monsters disappear. According to reports on Reddit, Capcom appears to have removed the relevant asset files, leaving these icons missing. Why on earth would you remove icon assets just because you’re adding Steam Deck support and expanding language options? Given the nature of this bug, it’s almost certain that Capcom will release another update in the near future to fix it. While this isn’t an ideal time to dive into modding tutorials, it doesn’t pose a significant barrier for beginners who want to document their progress. Another key reason to write this up now is that I’ve been playing the game less frequently lately, and my desktop and download folders have become a chaotic mess of mod files. It’s high time I clean things up to keep track of the mods I’ve created—and to help other newcomers to the modding scene avoid getting overwhelmed by the sheer volume of available mods.
