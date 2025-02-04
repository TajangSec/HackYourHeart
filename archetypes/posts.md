+++
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
date = "{{ .Date }}"
lastmod = ""
draft = false
tags = [""]
categories = ""
slug= "{{ substr (md5 (printf "%s|%d" (replace .Name "-" "") now.Unix)) 0 6 | lower }}"
cover = ""

+++

