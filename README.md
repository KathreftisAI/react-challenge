# Coding Challenge

## Overview

Write a simple React Web App by forking this Project & Commiting to the forked Project. Share the forked Project URL.
We'll assess the skills and approach on composing a web application along with how the code is structured, given JSON & API Call.

## Challenge

Using the provided screen as a reference, build react components to render the application.

We'll be looking at the code structure and component breakdown in the code submission.

Please include a `README` with setup instructions, and other documentation you created as part of your solution.

## Details

The app contains only One Page. Refer to given Screen for Reference.

- It should contain Header Component, Sidebar Component & Main Content Component which can have child components.
- Language Selector needs to be persistent even when the browser is closed.
- Use skeleton component during the data load.
- Handle Page Refresh.

#### Dropdown Values

Language : `EN-US, DE-DE, FR-FR, PL-PL, ES-ES, PT-BR, ZH-CN, KO-KR`

Items List: [JSON HERE](https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json "JSON HERE")

Tiers : `T1-T8`

Enchantment: `0-3`

Quality: `Defaults to 0. Valid values are 1 for Normal, 2 for Good, 3 for Outstanding, 4 for Excellent and 5 for Masterpiece`

To Load the image use below call. Explanation [Here](https://wiki.albiononline.com/wiki/API:Render_service "Here")

[https://render.albiononline.com/v1/item/T4_HEAD_PLATE_SET1.png?quality=4](https://render.albiononline.com/v1/item/T4_HEAD_PLATE_SET1.png?quality=4 "https://render.albiononline.com/v1/item/T4_HEAD_PLATE_SET1.png?quality=4")

To Load Data based on the selection.

[Swagger Doc for the API ](https://www.albion-online-data.com/api/swagger/index.html "Swagger Doc for the API ")

Use This API from Swagger Doc: `/api/v2/stats/Prices/{itemList}.{format}`
