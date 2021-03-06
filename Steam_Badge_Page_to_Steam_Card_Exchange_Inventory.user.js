// ==UserScript==
// @name Steam Badge Page to Steam Card Exchange Inventory
// @namespace Steam Badge Page to Steam Card Exchange Inventory
// @author Laurvin
// @description Changes the Enhanced Steam link to the Steam Card Exchange to their Inventory page instead of their Showcase page.
// @version 1.1
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Steam-Badge-Page-to-Steam-Card-Exchange-Inventory/raw/master/Steam_Badge_Page_to_Steam_Card_Exchange_Inventory.user.js
// @include http://steamcommunity.com/id/*/gamecards/*
// @include https://steamcommunity.com/id/*/gamecards/*
// @include http://steamcommunity.com/profiles/*/gamecards/*
// @include https://steamcommunity.com/profiles/*/gamecards/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant none
// @run-at document-idle
// ==/UserScript==

setTimeout(function() // Waiting for Enhanced Steam to load.
{
	'use strict';

	$('a[href^="http://www.steamcardexchange.net/index.php"]').each(function()
	{
		var hrefString = $(this).attr('href');
		var GameID = hrefString.substring(hrefString.lastIndexOf('-') + 1);
		var newString = 'http://www.steamcardexchange.net/index.php?inventorygame-appid-' + GameID;
		$(this).attr('href', newString);
	});
 }, (1000));
